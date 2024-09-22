import { useState } from "react";
import PropTypes from "prop-types"; 
import { Container, Typography, Box } from "@mui/material";
import GenericForm from "@/components/GenericForm";
import { validateForm } from "@/utils/validators";

const FormularioSimples = ({ initialData = {} }) => {

  const [submittedData, setSubmittedData] = useState(null);

 
  const handleSubmit = (formData) => {
    setSubmittedData(formData); 
  };


  const fields = [
    { name: "nome", label: "Nome", value: initialData.nome || "" },
    { name: "email", label: "Email", value: initialData.email || "" },
    { name: "telefone", label: "Telefone", value: initialData.telefone || "" },
  ];

  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        style={{ marginTop: "2rem", fontWeight: "bold", textAlign: "center" }}
      >
        Formulário Simples
      </Typography>

      {/* Formulário utilizando o componente GenericForm */}
      <Box marginTop={2}>
        <GenericForm
          fields={fields}
          validations={validateForm}
          onSubmit={handleSubmit}
        />
      </Box>

      {/* Exibindo os dados submetidos em formato JSON */}
      {submittedData && (
        <Box marginTop={4}>
          <Typography variant="h6">Dados Submetidos em Json:</Typography>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </Box>
      )}
    </Container>
  );
};


FormularioSimples.propTypes = {
  initialData: PropTypes.shape({
    nome: PropTypes.string,
    email: PropTypes.string,
    telefone: PropTypes.string,
  }),
};

export default FormularioSimples;
