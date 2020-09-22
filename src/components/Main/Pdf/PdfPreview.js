import React, { useContext } from "react";
import "./Pdf.css";
import { StateContext } from "../../../context";
import Pdf from "../Pdf/Pdf"
import { PDFViewer } from "@react-pdf/renderer";

function PrintPreview() {
  const { setShowModalPdf, showModalPdf } = useContext(StateContext);
  const { productName } = useContext(StateContext);

  return (
    <div className="print-preview">
      {showModalPdf ? (
        <div
          id="modal-wrap"
          className="visible"
          onClick={() => setShowModalPdf(false)}
        ></div>
      ) : (
        <div id="modal-wrap"></div>
      )}
      <div className="modal-window">
        <button onClick={() => setShowModalPdf(false)}>Back</button>
        <div className="modal-content">
            <div className="pdf-view">
              <PDFViewer>
                <Pdf productName={productName} />
              </PDFViewer>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PrintPreview;