import React, { useContext } from "react";
import Dropdown from "react-dropdown";
import { StateContext } from "../../../../context";
import "../../../../shared-styles.css";

function NFPAinput() {
  const { setLabel, label } = useContext(StateContext);
  const healthHazardIndex = [
    "0-Normal material",
    "1-Slightly hazardous",
    "2-Hazardous",
    "3-Extreme danger",
    "4-Deadly",
  ];
  const flammabilityIndex = [
    "0-Will not burn",
    "1-Ignites when preheated",
    "2-Ignites with moderate heating",
    "3-Ignites under normal temperature conditions",
    "4-Very flamable",
  ];
  const instabilityIndex = [
    "0-Normal stable",
    "1-Not stable if heated",
    "2-Violente chemical change, but doesn't detonate",
    "3-May detonate with shock or heat",
    "4-May detonate under normal conditions",
  ];
  const specialNotice = [
    "OX-Oxidizer",
    "W-Reacts with water",
    "SA-Simple asphyxiant gas",
    "ACID-acid",
    "ALK-alkaline",
    "COR-corrosive",
    "BIO-Biological hazard",
    "RAD-radioactive",
  ];

  function OneColorDiamondWrapper(color, index, placeholder) {
    return (
      <div className="color-diamond-wrapper">
        <img
          src={require(`../../../../assets/NFPAsymbols/${color}.svg`)}
          alt={color}
        ></img>
        <Dropdown
          className="small-letters size100"
          options={index}
          placeholder={placeholder}
          onChange={(e) =>
            setLabel({
              ...label,
              NFPA: {
                ...label.NFPA,
                [color]: e.value.slice(0, e.value.indexOf("-")),
              },
            })
          }
          value={""}
        />
      </div>
    );
  }
  return (
    <div className="NFPA-Diamond-input">
      <div className="flex">
        {OneColorDiamondWrapper(
          "redDiamond",
          flammabilityIndex,
          "Flammability Index"
        )}
        {OneColorDiamondWrapper(
          "blueDiamond",
          healthHazardIndex,
          "Health Hazard"
        )}
      </div>
      <div className="flex">
        {OneColorDiamondWrapper(
          "yellowDiamond",
          instabilityIndex,
          "Inestability Index"
        )}
        {OneColorDiamondWrapper(
          "whiteDiamond",
          specialNotice,
          "Specific Hazard"
        )}
      </div>
    </div>
  );
}
export default NFPAinput;
