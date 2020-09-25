import React, { useContext } from "react";
import "./LabelPreview.css";
import "../../../shared-styles.css";
import nextId from "react-id-generator";
import SaveOutlinedIcon from "@material-ui/icons/SaveAltOutlined";

import PrintOutlinedIcon from "@material-ui/icons/PrintOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

import CustomButton from "../CustomUI/CustomButton";
import { StateContext } from "../../../context";
import Label from "./Label/Label";
import MiniLabel from "./MiniLabel/Minilabel";

function LabelPreview() {
  const {
    label,
    setLabel,
    labelsArray,
    setLabelsArray,
    setShowModalPreview,
    setHazardousSymbols,
  } = useContext(StateContext);

  function saveHandler(label, labelsArray) {
    if (label.id === "") {
      label.id = nextId();
      setLabelsArray([...labelsArray, label]);
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
      });
      setHazardousSymbols([]);
    } else {
      setLabelsArray([
        ...labelsArray.filter((elem) => elem.id !== label.id),
        label,
      ]);
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
      });
    }
  }
  function previewSavedLabels(label) {
    if (label.id !== "") {
      console.log(label);
      return <MiniLabel label={label} />;
    } else {
      return "";
    }
  }

  return (
    <div className="panel-container">
      <div className="main-bg-wrapper">
        <div className="secondary-bg-wrapper">
          <div className="title-big">Step 2: Check the preview</div>
          <div className="preview-panel">
            <Label label={label} />
          </div>
          <div className="save-button-wrapper">
            <CustomButton
              endIcon={<SaveOutlinedIcon />}
              name="Save"
              onClick={() => saveHandler(label, labelsArray)}
            />
          </div>
          <div className="title-big">Step 3: Manage label and file</div>
          <div className="collection-wrapper flex-center">
            {labelsArray !== []
              ? labelsArray.map((elem) => previewSavedLabels(elem))
              : ""}
          </div>
          <div className="buttons-wrapper">
            <CustomButton endIcon={<ShareOutlinedIcon />} name="Share" />
            <CustomButton
              endIcon={<PrintOutlinedIcon />}
              name="Preview"
              onClick={() => {
                setShowModalPreview(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default LabelPreview;
