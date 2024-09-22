import { useState } from "react";
import PropTypes from "prop-types"; 
import { Box, Button, TextField } from "@mui/material";

const GenericForm = ({ fields, validations, onSubmit }) => {
  const initialFormState = fields.reduce((acc, field) => {
    acc[field.name] = field.value || "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const validationResults = validations(formData);
    setErrors(validationResults.errors);
    return validationResults.isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        {fields.map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            error={Boolean(errors[field.name])}
            helperText={errors[field.name]}
            type={field.type || "text"}
            style={{ width: "300px" }}
          />
        ))}
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </Box>
    </form>
  );
};


GenericForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string,
    })
  ).isRequired,
  validations: PropTypes.func.isRequired, 
  onSubmit: PropTypes.func.isRequired,
};

export default GenericForm;
