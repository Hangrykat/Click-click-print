import React, { useState, useCallback, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import CustomButton from "../../CustomUI/CustomButton"
import CancelIcon from '@material-ui/icons/Cancel';

import "./DragDrop.css"
import { PrintOutlined } from "@material-ui/icons";

const labelList = [
  { id: 1, title: "Neo", url: "burnable.jpg" },
  { id: 2, title: "Bruno", url: "burnable.jpg" },
  { id: 3, title: "Rania", url: "burnable.jpg" },
  { id: 4, title: "Richard", url: "burnable.jpg" },
  { id: 5, title: "Radhika", url: "burnable.jpg" },
  { id: 6, title: "Erick", url: "burnable.jpg" },
  { id: 7, title: "Justin", url: "burnable.jpg" },
  { id: 8, title: "Jakub", url: "burnable.jpg" },
];

const classes = {
  //labels: {
    //display: "flex",
    //flexDirection: "column",
    //width: "10%"
//},
  label: {
    display: "flex",
    margin: "5px",
    width: "250px",
    height: "100px",
    minWidth: "100px",
    border: "1px solid black",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  },
  slots: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    border: "1px solid black",
    margin: "5px",
    width: "80%"
  },
  slot: {
    display: "flex",
    margin: "5px",
    width: "250px",
    minWidth: "100px",
    height: "100px",
    border: "1px dashed black",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  }
};

const DragDrop = () => {
  const [mySlots, setSlots] = useState([]);

  const putLabelInSlot = useCallback(
    (id, slotId) => {
      let currentSlots = [...mySlots];
      currentSlots[slotId] = id;
      setSlots(currentSlots);
    },
    [mySlots]
  );
  
  const deleteSelectedLabel = useCallback(
    (slotId) => {
      let currentSlots = [...mySlots];
      currentSlots[slotId] = null;
      setSlots(currentSlots);
    },
    [mySlots]
  );

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="drag-drop-panel box-shadow">
          <div style={{display: "block"}} className="text-center">
            <div className="title-big teal-bg">Saved Labels</div>
            <div className="label-text">Drag the label(s) to print grid </div>
            <div className="labels-to-print">
              
              {labelList.map((label) => (
                <Label
                  id={label.id}
                  key={label.id}
                  title={label.title}
                  url={label.url}
                  draggable={true}
                ></Label>
              ))}
            </div>
          </div>
        </div>

        <div className="drag-drop-panel box-shadow">
          <div style={{display: "block"}} className="text-center">
            <div className="title-big teal-bg">Print Grid </div>
            <div className="label-text">Drop the label(s) in the grid </div>
            <div className="slots">
              {Array.apply(null, { length: 8 }).map((e, i) => (
                <div className="slot-to-print">
                  <Slot
                    pos={i}
                    key={i}
                    changeTaskStatus={putLabelInSlot}
                    clearslot={deleteSelectedLabel}
                  >
                  {labelList
                    .filter((a) => a.id === mySlots[i])
                    .map((label) => (
                      <Label
                        id={label.id}
                        key={label.id}
                        title={label.title}
                        url={label.url}
                        draggable={false}
                      ></Label>
                    ))}
                </Slot>
                </div>
              ))}
            </div>
          </div>

        </div>      
      </div>
      <div className="print-button">
        <CustomButton name="Print" endIcon={<PrintOutlined />} onClick={() => {window.print()}}/>
      </div>
    </div>
  );
};

export default DragDrop;

// Saved labels imported from context
const Label = ({ id, title, url, draggable }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: { type: "card", id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  if (draggable) drag(ref);

  return (
    <div ref={ref} className="label-to-print">
      {title}
    </div>
  );
};

// Create New Component Called, Grid --> Area to put the label

const Slot = ({ pos, changeTaskStatus, children, clearslot }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "card",
    drop(item) {
      changeTaskStatus(item.id, pos);
    }
  });
  drop(ref);
  return (
    <div ref={ref} className="slot">
      <div className="slot-content">{children}</div>
      <div className="delete-button" onClick={() => clearslot(pos)}><CancelIcon /></div>
    </div>
  );
};