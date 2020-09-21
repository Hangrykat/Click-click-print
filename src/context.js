import React, { createContext, useState } from "react";

export const StateContext = createContext({});

const ContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [hazardousSymbols, setHazardousSymbols] = useState([]);
  const [label, setLabel] = useState({
    productName: "",
    chemicalFormula: "",
    description: "",
    owner: "",
    contactInfo: "",
    date: "",
    eDate: "",
  });

  return (
    <StateContext.Provider
      value={{
        showModal,
        setShowModal,
        hazardousSymbols,
        setHazardousSymbols,
        label,
        setLabel,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
