import React from 'react'
import "./PrintPreview.css"




import DragDrop from "./DragDrop/DragDrop"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function LabelsToPrint() {
    // import saved labels with useContext
    //const { labelsArray } = useContext(StateContext);

    return (
        <div>
            <div className="flex-center">                
                <div className="label-to-print text-center">
                    {/*Add new component for Drag & Drop? */}
                    <DndProvider backend={HTML5Backend}>
                        <DragDrop/>
                    </DndProvider>
                </div>            
            </div>            
      </div>
    )
}

export default LabelsToPrint
