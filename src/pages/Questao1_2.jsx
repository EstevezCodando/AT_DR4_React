import Button from "@mui/material/Button";
import LayoutQuestao from "@/components/LayoutQuestao";

const Questao1_2 = () => {
  return (
    <LayoutQuestao titulo="Questão 1.2 - Inline Event">
      <Button
        variant="contained"
        color="primary"
        onClick={() => alert("Evento Inline!")}
        style={{ fontSize: "1rem", padding: "10px 20px" }}
      >
        Clique Aqui
      </Button>
    </LayoutQuestao>
  );
};

export default Questao1_2;
