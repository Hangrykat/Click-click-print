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
      name={props.name}
      type={props.type}
      rows={props.rows}
      variant="outlined"
      label={props.label}
      style={styledInput}
    />
  );
  if (props.line)
    button = (
      <TextField
        size="small"
        name={props.name}
        type={props.type}
        rows={props.rows}
        multiline
        variant="outlined"
        label={props.label}
        style={styledInput}
      />
    );
  return <div>{button}</div>;
}

export default CustomTextInput;
