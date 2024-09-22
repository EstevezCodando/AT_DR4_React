import { useState } from "react";
import PropTypes from "prop-types";
import BotaoAlternar from "@/components/BotaoAlternar";

const PerguntaResposta = ({ pergunta, resposta }) => {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  const alternarResposta = () => {
    setMostrarResposta(!mostrarResposta);
  };

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", marginTop: "20px" }}
    >
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>{pergunta}</div>
      {mostrarResposta && <div style={{ marginTop: "10px" }}>{resposta}</div>}
      <BotaoAlternar
        onClick={alternarResposta}
        mostrarResposta={mostrarResposta}
      />
    </div>
  );
};

PerguntaResposta.propTypes = {
  pergunta: PropTypes.string.isRequired,
  resposta: PropTypes.string.isRequired,
};

export default PerguntaResposta;
