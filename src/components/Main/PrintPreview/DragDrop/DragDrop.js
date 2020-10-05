import React, { useState, useCallback, useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";
import { StateContext } from "../../../../context";

import "./DragDrop.css";
import "../../../../shared-styles.css";
import CancelIcon from "@material-ui/icons/Cancel";
import Label from "../../LabelPreview/Label/Label";

const DragDrop = () => {
  const { labelsArray } = useContext(StateContext);

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
      <div className="drag-drop-container">
        <div className="drag-drop-panel box-shadow">
          <div className="text-center">
            <div className="title-big teal-bg">Saved Labels</div>
            <div className="single-line-input text-center">
              <p>Drag the label(s) to print grid</p>
            </div>
            <div className="labels-to-print">
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
          <div className="text-center">
            <div className="title-big teal-bg">Print Grid </div>
            <div className="single-line-input text-center">
              <p>Drop the label(s) in the grid</p>
            </div>
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
  );
};

export default DragDrop;

// Saved Label (Drag)
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

// Print Grid (Drop)
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
        <CancelIcon style={{ color: "#F8F8F8" }} />
      </div>
    </div>
  );
};
