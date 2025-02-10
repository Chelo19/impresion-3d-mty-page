import React from "react";
import PropTypes from "prop-types";
import "./CustomButton.css";

const CustomButton = ({ type, children, onClick, disabled, outlined }) => {
  return (
    <button
      className={`custom-button ${type} ${outlined ? "outlined" : ""} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  outlined: PropTypes.bool
};

export default CustomButton;