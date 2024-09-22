import { useState } from "react";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

const Questao2_1 = ({ defaultChecked = false }) => {
  const [isAdmin, setIsAdmin] = useState(defaultChecked);

  const handleCheckboxChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        style={{ marginTop: "2rem", fontWeight: "bold", textAlign: "center" }}
      >
        Questão 2.1 - Verificação de Administrador
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="2rem"
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={isAdmin}
              onChange={handleCheckboxChange}
              color="primary"
            />
          }
          label="Administrador"
        />
        <Typography variant="body1" style={{ marginTop: "1rem" }}>
          O usuário atual é {isAdmin ? "Administrador" : "Colaborador"}.
        </Typography>
      </Box>
    </Container>
  );
};

Questao2_1.propTypes = {
  defaultChecked: PropTypes.bool,
};

export default Questao2_1;
