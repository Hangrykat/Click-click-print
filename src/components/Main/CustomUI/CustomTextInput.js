import React from "react";
import TextField from "@material-ui/core/TextField";

function CustomTextInput(props) {
  const styledInput = {
    borderRadius: 3,
    border: 0,
    fontSize: "0.5vw",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    marginBottom: "20px",
  };

  let button = (
    <TextField size="small" variant="outlined" style={styledInput} {...props} />
  );
  if (props.line)
    button = (
      <TextField
        size="small"
        multiline
        variant="outlined"
        style={styledInput}
        {...props}
      />
    );
  return <div>{button}</div>;
}

export default CustomTextInput;
