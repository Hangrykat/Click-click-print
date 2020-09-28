import React, { useContext } from "react";
import { StateContext } from "../../../../context";
import "../MiniLabel/MiniLabel.css";

function AddLabel() {
  const { setLabel } = useContext(StateContext);
  return (
    <div
      className="addlabel-wrapper"
      onClick={() =>
        setLabel({
          id: "",
          productName: "",
          chemicalFormula: "",
          description: "",
          owner: "",
          contactInfo: "",
          date: "",
          eDate: "",
          symbols: [],
          NFPA: {
            redDiamond: "",
            blueDiamond: "",
            yellowDiamond: "",
            whiteDiamond: "",
          },
        })
      }
    >
      <img
        className="addLabel"
        src={require("../../../../assets/extras/drawing.svg")}
        alt="addsymbol"
      ></img>
    </div>
  );
}

export default AddLabel;
