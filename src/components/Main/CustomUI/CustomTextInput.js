import React from "react";
import TextField from "@material-ui/core/TextField";

function CustomTextInput(props) {
  const styledInput = {
    borderRadius: 3,
    border: 0,
    fontSize: "0.5vw",
    margin: "10px 0",
    padding: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  };

  let button = (
    <TextField
      size="small"
      variant="outlined"
      style={styledInput}
      {...props}
    />
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
