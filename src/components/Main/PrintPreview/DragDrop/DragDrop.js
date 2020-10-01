import React, { useState, useCallback, useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";
import { StateContext } from "../../../../context";

import "./DragDrop.css";
import "../../../../shared-styles.css"
import CancelIcon from "@material-ui/icons/Cancel";
import Label from "../../LabelPreview/Label/Label";

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

const DragDrop = () => {
  const { label, labelsArray } = useContext(StateContext);

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
          <div style={{ display: "block" }} className="text-center">
            <div className="title-big teal-bg">Saved Labels</div>
            <div className="single-line-input text-center"><p>Drag the label(s) to print grid</p></div>
            <div className="labels-to-print">
              {/*
              {labelList.map((label) => (
                <Label
                  id={label.id}
                  key={label.id}
                  title={label.title}
                  url={label.url}
                  draggable={true}
                ></Label>
              ))}
               */}

              {labelsArray.map((label) => (
                <PrintLabel
                  id={label.id}
                  label={label}
                  draggable={true}
                ></PrintLabel>
              ))}
            </div>
          </div>
        </div>

        <div className="drag-drop-panel box-shadow">
          <div style={{ display: "block" }} className="text-center">
            <div className="title-big teal-bg">Print Grid </div>
            <div className="single-line-input text-center"><p>Drop the label(s) in the grid</p></div>
            <div className="slots">
              {Array.apply(null, { length: 8 }).map((e, i) => (
                <div className="slot-to-print">
                  <Slot
                    pos={i}
                    key={i}
                    changeTaskStatus={putLabelInSlot}
                    clearslot={deleteSelectedLabel}
                  >
                    {labelsArray
                      .filter((a) => a.id === mySlots[i])
                      .map((label) => (
                        <PrintLabel
                          id={label.id}
                          key={label.id}
                          label={label}
                          draggable={false}
                        ></PrintLabel>
                      ))}
                  </Slot>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragDrop;

// Saved labels imported from context
const PrintLabel = ({ id, label, draggable }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: { type: "card", id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (draggable) drag(ref);

  return (
    <div ref={ref} className="label-to-print">
      <Label label={label} />
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
    },
  });
  drop(ref);
  return (
    <div ref={ref} className="slot">
      {children}
      <div className="delete-button" onClick={() => clearslot(pos)}>
        <CancelIcon style={{color: "#F8F8F8"}}/>
      </div>
    </div>
  );
};
