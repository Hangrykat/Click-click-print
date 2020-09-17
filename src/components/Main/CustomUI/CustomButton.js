import React from "react";
import Button from "@material-ui/core/Button";

function CustomButton(props) {
  const styledButton = {
    background: "#488b8f",
    borderRadius: 3,
    border: 0,
    fontSize: "0.8vw",
    color: "#fff",
    fontWeight: "bold",
    margin: "5px",
    padding: "5px, 10px",
  };
  return (
    <div>
      <Button 
        style={styledButton}
        {...props}
      >
        {props.name}
      </Button>
    </div>
  );
}

export default CustomButton;
