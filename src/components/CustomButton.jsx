import PropTypes from "prop-types";
import Button from "@mui/material/Button";

const CustomButton = ({ text, onClick, color, style }) => {
  return (
    <Button
      variant="contained"
      color={color || "primary"}
      onClick={onClick}
      style={{ fontSize: "1rem", padding: "10px 20px", ...style }}
    >
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  style: PropTypes.object,
};

export default CustomButton;
