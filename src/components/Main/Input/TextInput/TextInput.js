import React, { useContext } from "react";
import CustomDateInput from "../../CustomUI/CustomDateInput";
import CustomTextInput from "../../CustomUI/CustomTextInput";
import { StateContext } from "../../../../context";

function TextInput() {
  return (
    <div className="input-panel">
      <div className="title-mid">About Product</div>
      <div className="input-field-wrapper">
        <CustomTextInput
          name="product"
          label="Product name"
          onChange={(e) => setLabel({ ...label, productName: e.target.value })}
        />
        <CustomTextInput
          name="formula"
          label="Chemical formula"
          onChange={(e) =>
            setLabel({ ...label, chemicalFormula: e.target.value })
          }
        />
        <CustomTextInput
          name="description"
          label="Description"
          line="multiline"
          rows="3"
          onChange={(e) => setLabel({ ...label, description: e.target.value })}
        />
        <CustomTextInput
          name="owner"
          label="Name/ID number"
          onChange={(e) => setLabel({ ...label, owner: e.target.value })}
        />
        <CustomTextInput
          name="contactInfo"
          label="Contact info"
          onChange={(e) => setLabel({ ...label, contactInfo: e.target.value })}
        />
        <div className="flex-wrapper">
          <div className="flex-grow">
            <CustomDateInput
              name="date"
              label="Date"
              onChange={(e) => setLabel({ ...label, date: e.target.value })}
            />
          </div>
          <div className="flex-grow">
            <CustomDateInput
              name="eDate"
              label="Possible expiry date"
              onChange={(e) => setLabel({ ...label, eDate: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TextInput;
