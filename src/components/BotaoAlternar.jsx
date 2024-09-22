import PropTypes from "prop-types";

const BotaoAlternar = ({ onClick, mostrarResposta }) => {
  return (
    <button
      style={{
        marginTop: "10px",
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {mostrarResposta ? "Ocultar Resposta" : "Mostrar Resposta"}
    </button>
  );
};

BotaoAlternar.propTypes = {
  onClick: PropTypes.func.isRequired,
  mostrarResposta: PropTypes.bool.isRequired,
};

export default BotaoAlternar;
