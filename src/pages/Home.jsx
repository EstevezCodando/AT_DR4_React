import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <Container>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        style={{ marginTop: "2rem", fontSize: "2.5rem", fontWeight: "bold" }}
      >
        Bem vindo à resolução do AT da disciplina DR4
      </Typography>
      <Typography
        variant="body1"
        style={{ marginTop: "1.5rem", fontSize: "1.25rem", lineHeight: "1.8" }}
      >
        Use o menu de navegação acima para acessar as partes e questões do
        projeto. Acompanhe cada questão e explore as funcionalidades de React
        que estamos implementando.
      </Typography>
    </Container>
  );
};

export default Home;
