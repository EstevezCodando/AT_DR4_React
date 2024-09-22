import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const LayoutQuestao = ({ titulo, children }) => {
  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        style={{ marginTop: "2rem", fontWeight: "bold", textAlign: "center" }}
      >
        {titulo}
      </Typography>

      <Box marginTop="2rem" textAlign="center">
        {children}
      </Box>
    </Container>
  );
};

LayoutQuestao.propTypes = {
  titulo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LayoutQuestao;
