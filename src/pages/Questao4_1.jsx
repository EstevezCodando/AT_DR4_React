import {
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

const MenuCard = () => {
  const pages = [
    { name: "Questão 1.1", path: "/questao1_1" },
    { name: "Questão 1.2", path: "/questao1_2" },
    { name: "Questão 1.3", path: "/questao1_3" },
    { name: "Questão 1.4", path: "/questao1_4" },
    { name: "Questão 2.1", path: "/questao2_1" },
    { name: "Questão 2.2", path: "/questao2_2" },
    { name: "Questão 2.3", path: "/questao2_3" },
    { name: "Questão 2.4", path: "/questao2_4" },
    { name: "Questão 3.1", path: "/questao3_1" },
    { name: "Questão 3.2", path: "/questao3_2" },
    { name: "Questão 4.2.1 Admin Ligado", path: "/admin-ligado" },
    { name: "Questão 4.2.2 Admin Desligado", path: "/admin-desligado" },
    { name: "Questão 4.3 Brasil Selecionado", path: "/brasil-selecionado" },
    { name: "Questão 4.4 Formulario Preenchido", path: "/formulario-preenchido" },
  ];

  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        textAlign="center"
        style={{ marginTop: "2rem" }}
      >
        Menu de Questões
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {pages.map((page) => (
          <Grid item xs={12} sm={6} md={4} key={page.name}>
            <Card>
              <CardContent>
                <Typography variant="h6">{page.name}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={page.path}
                >
                  Acessar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MenuCard;
