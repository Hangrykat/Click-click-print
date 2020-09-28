import React, { useContext } from "react";
import "./PrintPreview.css";
import { StateContext } from "../../../context";
import CustomButton from "../CustomUI/CustomButton"

import DragDrop from "./DragDrop/DragDrop"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


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
        <button className="close-button" onClick={() => setShowModalPreview(false)}>Back</button>
        <div className="modal-content flex-center">
          <DndProvider backend={HTML5Backend}>
            <DragDrop/>
          </DndProvider>
          <div className="print-button">
            <CustomButton name="Print" onClick={() => {
                  window.print();
                }}
            />
          </div>          
        </div>
      </div>
    </div>
  );
}

export default PrintPreview;
