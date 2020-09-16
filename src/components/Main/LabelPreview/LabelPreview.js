import React, { useContext } from "react";
import "./LabelPreview.css";

import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";
import PrintOutlinedIcon from "@material-ui/icons/PrintOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

import CustomButton from "../CustomUI/CustomButton";
import { StateContext } from "../../../context";

function LabelPreview() {
  const {
    productName,
    chemicalFormula,
    date,
    expiryDate,
    description,
    userName,
    hazardousSymbols,
    contactInfo,
  } = useContext(StateContext);
  function showSymbol(symbol) {
    return (
      <div className="symbol">
        <img src={require(`../../../assets/symbols/${symbol}.jpg`)} />
      </div>
    );
  }
  return (
    <div className="panel-container">
      <div className="main-bg-wrapper">
        <div className="secondary-bg-wrapper">
          <div className="title-big">Step 2: Check the preview</div>
          <div className="preview-panel">
            <div className="label-wrapper">
              <div className="label">
                <div className="label-sheet">
                  <div className="name-container">
                    <div className="title-blackBG">
                      {productName} ({chemicalFormula})
                    </div>
                  </div>

                  <div className="description-container">
                    <div className="label-text">Date:{date}</div>
                    <div className="label-text">Expiry Date:{expiryDate}</div>
                    <div className="label-text">Description:{description}</div>
                    <div className="label-text">Name/ID No:{userName}</div>
                    <div className="label-text">Contact:{contactInfo}</div>
                  </div>
                </div>
                <div className="label-sheet">
                  <div className="title-label">Hazardous Symbols</div>
                  <div className="symbols-wrapper">
                    {hazardousSymbols.map((elem) => showSymbol(elem))}
                  </div>
                  <div id="diamond" className="warning-diamond">
                    Warning Diamond
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="title-big">Step 3: Manage label and file</div>
          <div className="collection-wrapper flex-center">
            <div className="small-label title-label">Label 1</div>
            <div className="small-label title-label">Label 2</div>
            <div className="small-label title-label">Label 3</div>
          </div>
          <div className="buttons-wrapper">
            <CustomButton icon={<SaveOutlinedIcon />} name="Save" />
            <CustomButton icon={<PrintOutlinedIcon />} name="Print" />
            <CustomButton icon={<ShareOutlinedIcon />} name="Share" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabelPreview;
