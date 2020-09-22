import React, { createContext, useState } from "react";

export const StateContext = createContext({});

const ContextProvider = ({ children }) => {
  const [showModalPdf, setShowModalPdf] = useState(false);
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
  });
  const [labelsArray, setLabelsArray] = useState([]);

  return (
    <StateContext.Provider
      value={{
        showModalPdf,
        setShowModalPdf,
        showModalPreview,
        setShowModalPreview,
        hazardousSymbols,
        setHazardousSymbols,
        label,
        setLabel,
        labelsArray,
        setLabelsArray,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
