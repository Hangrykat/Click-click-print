import React, { useContext } from 'react'
import '../../../shared-styles.css'
import {StateContext} from "../../../context"

function PrintPreview() {
    const { setShowModal, showModal } = useContext(StateContext);

    return (
        <div className="print-preview">
            { showModal ? (<div id="modal-wrap" className="visible"></div>) :(<div id="modal-wrap" ></div>)}
            <div className="modal-window">
                <button onClick={ () => setShowModal(false)}>Back</button>
                <div className="modal-content">
                  <h1>Print Preview</h1>
                </div>
            </div>
        </div>
    )
}

export default PrintPreview
