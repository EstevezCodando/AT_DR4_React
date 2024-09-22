import  { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import GenericForm from "@/components/GenericForm";
import { validateForm } from "@/utils/validators";

const Questao3_2 = () => {

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (formData) => {
    setSubmittedData(formData); 
  };


  const fields = [
    { name: "nome", label: "Nome" },
    { name: "email", label: "Email" },
    { name: "telefone", label: "Telefone" },
  ];

  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        style={{ marginTop: "2rem", fontWeight: "bold", textAlign: "center" }}
      >
        Questão 3.2 - Formulário com Validações
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
          <Typography variant="h6">Dados Submetidos:</Typography>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </Box>
      )}
    </Container>
  );
};

export default Questao3_2;
