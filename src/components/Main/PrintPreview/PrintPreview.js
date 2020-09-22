import React, { useContext } from "react";
import "./PrintPreview.css";
import { StateContext } from "../../../context";

function PrintPreview() {
  const { setShowModalPreview, showModalPreview } = useContext(StateContext);

  return (
    <div className="print-preview">
      {showModalPreview ? (
        <div
          id="modal-wrap"
          className="visible"
          onClick={() => setShowModalPreview(false)}
        ></div>
      ) : (
        <div id="modal-wrap"></div>
      )}
      <div className="modal-window">
        <button onClick={() => setShowModalPreview(false)}>Back</button>
        <div className="modal-content">
            <h1>Drag and Drop Labels</h1>
        </div>
      </div>
    </div>
  );
}

export default PrintPreview;
