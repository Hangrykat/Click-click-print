import React, { createContext, useRef, useState } from "react";

export const StateContext = createContext({});

const ContextProvider = ({ children }) => {
  const [showModalPreview, setShowModalPreview] = useState(false);
  const [hazardousSymbols, setHazardousSymbols] = useState([]);
  const [label, setLabel] = useState({
    id: "",
    productName: "",
    chemicalFormula: "",
    description: "",
    owner: "",
    contactInfo: "",
    date: "",
    eDate: "",
    symbols: [],
    NFPA: {
      redDiamond: "",
      blueDiamond: "",
      yellowDiamond: "",
      whiteDiamond: "",
    },
  });
  const [labelsArray, setLabelsArray] = useState([]);
  const [selectedId, setSelectedId] = useState();
  let refInput = useRef(null);

  return (
    <StateContext.Provider
      value={{
        showModalPreview,
        setShowModalPreview,
        hazardousSymbols,
        setHazardousSymbols,
        label,
        setLabel,
        labelsArray,
        setLabelsArray,
        selectedId,
        setSelectedId,
        refInput,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
