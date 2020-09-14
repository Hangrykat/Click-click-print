import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

function CustomDateInput(props) {
  const [inputType, setInputType] = useState("");
  const styledInput = {
    borderRadius: 3,
    border: 0,
    fontSize: "0.5vw",
    padding: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  };

  // type={props.type}
  const handleInputType = (inp) => {
    setInputType(inp);
  };
  return (
    <div>
      <TextField
        size="small"
        name={props.name}
        onFocus={() => handleInputType("date")}
        onBlur={() => handleInputType("")}
        type={inputType}
        variant="outlined"
        label={props.label}
        style={styledInput}
      />
    </div>
  );
}

export default CustomDateInput;
