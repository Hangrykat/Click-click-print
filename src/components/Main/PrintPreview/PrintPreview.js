import React, { useContext } from "react";
import "./PrintPreview.css";
import { StateContext } from "../../../context";

import CloseIcon from '@material-ui/icons/Close';

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
        <div className="close-button" onClick={() => setShowModalPreview(false)}><CloseIcon /></div>
        <div className="modal-content flex-center">
          <DndProvider backend={HTML5Backend}>
            <DragDrop/>
          </DndProvider>
                   
        </div>        
      </div>
    </div>
  );
}

export default PrintPreview;
