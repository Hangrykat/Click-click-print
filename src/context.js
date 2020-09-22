import React, { createContext, useState } from "react";

export const StateContext = createContext({});

const ContextProvider = ({ children }) => {
  const [productName, setProductName] = useState();
  const [chemicalFormula, setChemicalFormula] = useState();
  const [date, setDate] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const [description, setDescription] = useState();
  const [userName, setUserName] = useState();
  const [contactInfo, setContactInfo] = useState();
  const [showModalPdf, setShowModalPdf] = useState(false);
  const [showModalPreview, setShowModalPreview] = useState(false);
  const [hazardousSymbols, setHazardousSymbols] = useState([]);

  return (
    <StateContext.Provider
      value={{
        productName,
        setProductName,
        chemicalFormula,
        setChemicalFormula,
        date,
        setDate,
        expiryDate,
        setExpiryDate,
        description,
        setDescription,
        userName,
        setUserName,
        contactInfo,
        setContactInfo,
        showModalPdf,
        setShowModalPdf,
        showModalPreview,
        setShowModalPreview,
        hazardousSymbols,
        setHazardousSymbols,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
