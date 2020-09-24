import React, { useContext } from "react";
import { StateContext } from "../../../../context";

function SymbolsInput() {
  const { hazardousSymbols, setHazardousSymbols, setLabel, label } = useContext(
    StateContext
  );
  const symbolsArray = [
    "corrosive",
    "flammable",
    "environmentdanger",
    "toxic",
    "oxidationdanger",
    "healthhazard",
    "warning",
    "compressedgas",
    "explosive",
  ];

  function handleSymbols(symbol) {
    if (hazardousSymbols.includes(symbol)) {
      setHazardousSymbols(
        hazardousSymbols.filter((symbols) => symbols !== symbol)
      );
      setLabel({
        ...label,
        symbols: hazardousSymbols.filter((symbols) => symbols !== symbol),
      });
    } else {
      setHazardousSymbols([...hazardousSymbols, symbol]);
      setLabel({ ...label, symbols: [...hazardousSymbols, symbol] });
    }
  }
  function ShowSymbol(name) {
    return (
      <div className="chooseSymbol">
        <img
          className="previewSymbols"
          src={require(`../../../../assets/symbols/${name}.jpg`)}
          alt={name}
          onClick={() => handleSymbols(name)}
        />
      </div>
    );
  }
  return (
    <div className="choose-symbols-wrapper">
      {symbolsArray.map((elem) => ShowSymbol(elem))}
    </div>
  );
}

export default SymbolsInput;
