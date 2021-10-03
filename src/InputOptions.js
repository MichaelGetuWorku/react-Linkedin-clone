import React from "react";
import "./InputOptions.css";
function InputOptions({ Icon, title, color, onClick }) {
  return (
    <div className="inputOptions" onClick={onClick}>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOptions;
