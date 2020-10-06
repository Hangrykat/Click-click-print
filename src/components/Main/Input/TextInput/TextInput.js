import React, { useContext } from "react";
import CustomDateInput from "../../CustomUI/CustomDateInput";
import CustomTextInput from "../../CustomUI/CustomTextInput";
import { StateContext } from "../../../../context";

function TextInput() {
  const { setLabel, label, refInput } = useContext(StateContext);
  return (
    <div className="input-panel-wrapper">
      <div className="input-field-wrapper">
        <CustomTextInput
          name="product"
          label="Product name"
          onChange={(e) => setLabel({ ...label, productName: e.target.value })}
          inputRef={refInput}
          value={label.productName}
        />
        <CustomTextInput
          name="formula"
          label="Chemical formula"
          onChange={(e) =>
            setLabel({ ...label, chemicalFormula: e.target.value })
          }
          value={label.chemicalFormula}
        />
        <CustomTextInput
          name="description"
          label="Description"
          line="multiline"
          rows="2"
<<<<<<< HEAD
          inputProps={{ maxLength : 65 }}
=======
          inputProps={{ maxLength: 70 }}
>>>>>>> brunoBranch
          onChange={(e) => setLabel({ ...label, description: e.target.value })}
          value={label.description}
        />
        <div className="flex-wrapper">
          <div className="flex-grow mr-5">
            <CustomTextInput
              name="owner"
              label="Name/ID"
              onChange={(e) => setLabel({ ...label, owner: e.target.value })}
              value={label.owner}
            />
          </div>
          <div className="flex-grow">
            <CustomTextInput
              name="contactInfo"
              label="Contact info"
              onChange={(e) =>
                setLabel({ ...label, contactInfo: e.target.value })
              }
              value={label.contactInfo}
            />
          </div>
        </div>
        <div className="flex-wrapper">
          <div className="flex-grow mr-5">
            <CustomDateInput
              name="date"
              label="Date"
              onChange={(e) => setLabel({ ...label, date: e.target.value })}
              value={label.date}
            />
          </div>
          <div className="flex-grow">
            <CustomDateInput
              name="eDate"
              label="Possible expiry date"
              onChange={(e) => setLabel({ ...label, eDate: e.target.value })}
              value={label.eDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TextInput;
