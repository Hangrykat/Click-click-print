import React, { useContext } from 'react'
import PrintGrid from './PrintGrid'
import Box from './Box'

import "../PrintPreview.css"
import PrintOutlinedIcon from "@material-ui/icons/PrintOutlined";
import CustomButton from "../../CustomUI/CustomButton";
import { StateContext } from "../../../../context";

function DragDrop() {
    const rowStyle = {
        overflow:'hidden',
        clear: 'both',
    }

    const {setShowModalPdf} = useContext(StateContext);

    return (
        <div>
        <div className="flex-center">
            <div className="labels-container">
                <div style={rowStyle}> {/*Labels to be printed */}
                    <Box name="Label 1" />
                    <Box name="Label 2" />
                    <Box name="Label 3" />
                </div>
            </div>
            <div className="print-grid-container">
                <div className="grid2x4">
                    <div className="div1" id="grid1">
                        <div style={rowStyle}>                          
                            <PrintGrid />
                        </div>
                    </div>
                    <div className="div2" id="grid2">
                        <div style={rowStyle}>
                            <PrintGrid />
                        </div>
                    </div>
                    <div className="div3" id="grid3">
                        <div style={rowStyle}>
                            <PrintGrid />
                        </div>
                    </div>
                    <div className="div4" id="grid4">
                        <div style={rowStyle}>
                            <PrintGrid />
                        </div>
                    </div>
                    <div className="div5" id="grid5">
                        <div style={rowStyle}>
                            <PrintGrid />
                        </div>
                    </div>
                    <div className="div6" id="grid6">
                        <div style={rowStyle}>
                            <PrintGrid />
                        </div>
                    </div>
                    <div class="div7" id="grid7">
                        <div style={rowStyle}>
                            <PrintGrid />
                        </div>
                    </div>
                    <div class="div8" id="grid8">
                        <div style={rowStyle}>
                            <PrintGrid />
                        </div>
                    </div>
                    <CustomButton
                        endIcon={<PrintOutlinedIcon />}
                        name="PDF"
                        onClick={() => {
                        setShowModalPdf(true);
                        console.log("PDF");
                        }}
                     />
                </div>               
            </div>
        </div>        
  </div>
    )
}

export default DragDrop
