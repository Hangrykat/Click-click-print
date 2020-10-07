import React, { useContext } from "react";
import "./LabelPreview.css";
import "../../../shared-styles.css";
import nextId from "react-id-generator";
import SaveOutlinedIcon from "@material-ui/icons/SaveAltOutlined";
import PrintOutlinedIcon from "@material-ui/icons/PrintOutlined";
import { confirmAlert } from "react-confirm-alert"; // Import

import CustomButton from "../CustomUI/CustomButton";
import { StateContext } from "../../../context";
import Label from "./Label/Label";
import MiniLabel from "./MiniLabel/Minilabel";
import AddLabel from "./AddLabel/AddLabel";

function LabelPreview() {
  const {
    label,
    setLabel,
    labelsArray,
    setLabelsArray,
    setShowModalPreview,
    setHazardousSymbols,
    selectedId,
  } = useContext(StateContext);
  const emptylabel = {
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
  };

  function previewHandler() {
    if (labelsArray.length === 0) {
      confirmAlert({
        title: "No labels detected",
        message: "Please create at least one to process to the print",
        buttons: [
          {
            label: "Close",
          },
        ],
      });
    } else {
      setShowModalPreview(true);
    }
  }

  function emptyLabel() {
    confirmAlert({
      title: "Empty Label",
      message: "The Label is completly Empty. Please fill some inputs",
      buttons: [
        {
          label: "ok",
        },
      ],
    });
  }
  function saveHandler(label, labelsArray) {
    let checkNonEmptyObject = false;
    if (
      label.id !== "" ||
      label.productName !== "" ||
      label.chemicalFormula !== "" ||
      label.description !== "" ||
      label.owner !== "" ||
      label.contactInfo !== "" ||
      label.date !== "" ||
      label.eDate !== "" ||
      label.symbols.length !== 0 ||
      label.NFPA.redDiamond !== "" ||
      label.NFPA.blueDiamond !== "" ||
      label.NFPA.yellowDiamond !== "" ||
      label.NFPA.whiteDiamond !== ""
    ) {
      checkNonEmptyObject = true;
    }
    if (checkNonEmptyObject === true) {
      if (labelsArray.length > 8) {
        confirmAlert({
          title: "Max Labels reach",
          message: "Please delete some to create a new one",
          buttons: [
            {
              label: "ok",
            },
          ],
        });
      } else if (label.id === "") {
        label.id = nextId();
        setLabelsArray([
          ...labelsArray.filter((elem) => elem.id !== ""),
          label,
        ]);
        setLabel(emptylabel);
        setHazardousSymbols([]);
      } else {
        setLabelsArray([
          ...labelsArray.filter((elem) => elem.id !== label.id),
          label,
        ]);
        setLabel(emptylabel);
      }
    } else {
      emptyLabel();
    }
  }
  function previewSavedLabels(label) {
    if (label.id === selectedId) {
      return <MiniLabel label={label} styled={true} />;
    } else if (label.id !== selectedId) {
      return <MiniLabel label={label} styled={false} />;
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
          <div className="buttons-wrapper">
            <CustomButton
              endIcon={<SaveOutlinedIcon />}
              name="Save"
              onClick={() => saveHandler(label, labelsArray)}
            />
          </div>
          <div className="title-big">Step 3: Edit and delete labels</div>
          <div className="collection-wrapper flex-center">
            {labelsArray !== []
              ? labelsArray.map((elem) => previewSavedLabels(elem))
              : ""}
            {labelsArray.length !== 0 ? <AddLabel /> : ""}
          </div>
          <div className="buttons-wrapper">
            <CustomButton
              endIcon={<PrintOutlinedIcon />}
              name="Preview"
              onClick={() => {
                previewHandler();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default LabelPreview;
