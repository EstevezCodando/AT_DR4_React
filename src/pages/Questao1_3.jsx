import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LayoutQuestao from "@/components/LayoutQuestao";
import CustomButton from "@/components/CustomButton";

const Questao1_3 = () => {
  const [text, setText] = useState(
    "Texto Antes do Evento de clicar ou inserir"
  );
  const [userText, setUserText] = useState("");

  const handleToggleClick = () => {
    setText((prevText) =>
      prevText === "Texto Antes do Evento de clicar ou inserir"
        ? "Texto Depois do Evento de clicar"
        : "Texto Antes do Evento de clicar ou inserir"
    );
  };

  const handleInputChange = (event) => {
    setUserText(event.target.value);
  };

  const handleUserTextSubmit = () => {
    if (userText.trim() !== "") {
      setText(userText);
      setUserText(""); 
    }
  };

  return (
    <LayoutQuestao titulo="Questão 1.3 - Event Handler Function Melhorado">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={2} 
      >
        {/* Texto Modificável */}
        <Typography variant="body1" style={{ marginBottom: "1.5rem" }}>
          {text}
        </Typography>

        {/* Botão para alternar o texto */}
        <CustomButton
          text="Alternar Texto"
          onClick={handleToggleClick}
          color="primary"
        />

        {/* Entrada de Texto para Inserção Manual */}
        <TextField
          label="Insira seu próprio texto"
          variant="outlined"
          value={userText}
          onChange={handleInputChange}
          style={{ width: "300px", marginTop: "1rem" }}
        />

        {/* Botão para Submeter o Texto do Usuário */}
        <CustomButton
          text="Atualizar Texto com Entrada"
          onClick={handleUserTextSubmit}
          color="secondary"
          style={{ marginTop: "1rem" }}
        />
      </Box>
    </LayoutQuestao>
  );
};

export default Questao1_3;
