import React, { useContext } from "react";
import CustomDateInput from "../CustomUI/CustomDateInput";
import CustomTextInput from "../CustomUI/CustomTextInput";

import { StateContext } from "../../../context"

import "./Input.css";
import "../../../shared-styles.css"

function Input() {
  const {
    setProductName,
    setChemicalFormula,
    setDate,
    setExpiryDate,
    setDescription,
    setUserName,
    setContactInfo } = useContext(StateContext);

  function handleLabelInfo(e) {
    e.preventDefault();    
    setProductName(e.target.product.value);
    setChemicalFormula(e.target.formula.value);
    setDate(e.target.date.value);
    setExpiryDate(e.target.eDate.value);
    setDescription(e.target.description.value);
    setUserName(e.target.owner.value);
    setContactInfo(e.target.contactInfo.value);
  }
  return (
    <div className="panel-container">
      <div className="main-bg-wrapper">
        <form
          id="label-info"
          className="secondary-bg-wrapper"
        >
          <div className="title-big">Step 1: Enter label information</div>
          <div className="input-panel-wrapper">
            <div className="input-panel">
              <div className="title-mid">About Product</div>
              <div className="input-field-wrapper">
                <CustomTextInput name="product" label="Product name" onChange={(e) => setProductName(e.target.value)}/>
                <CustomTextInput name="formula" label="Chemical formula" onChange={(e) => setChemicalFormula(e.target.value)}/>
                <CustomTextInput
                  name="description"
                  label="Description"
                  line="multiline"
                  rows="3"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <CustomTextInput name="owner" label="Name/ID number" onChange={(e) => setUserName(e.target.value)}/>
                <CustomTextInput name="contactInfo" label="Contact info" onChange={(e) => setContactInfo(e.target.value)}/>
                <div className='flex-wrapper'>
                  <div className='flex-grow'>         
                    <CustomDateInput name="date" label="Date" onChange={(e) => setDate(e.target.value)}/>
                  </div>
                  <div className='flex-grow'> 
                    <CustomDateInput name="eDate" label="Possible expiry date" onChange={(e) => setExpiryDate(e.target.value)}/>
                  </div>
                </div> 

              </div>
            </div>
            <div className="input-panel">
              <div className="title-mid">Hazardous symbols</div>
              <div className="input-field">
                <div className="single-line-input">
                  <p>Choose symbols:</p>
                </div>
                <div className="flex-center margin">
                  <div className='symbol'>
                    <img src="" alt="explosive"/>
                  </div>
                  <div className='symbol'>
                    <img src="" alt="corrosive"/>
                  </div>
                  <div className='symbol'>
                    <img src="" alt="flammable"/>
                  </div>
                  <div className='symbol'>
                    <a><img src="" alt="environment danger"/></a>
                  </div>
                  <div className='symbol'>
                    <a><img src="" alt="toxic"/></a>
                  </div>
                  <div className='symbol'>
                    <a><img src="" alt="oxidation"/></a>
                  </div>
                  <div className='symbol'>
                    <a><img src="" alt="health Hazard"/></a>
                  </div>
                  <div className='symbol'>
                    <a><img src="" alt="warning"/></a>
                  </div>
                    <div className='symbol'>
                  <a><img src="" alt="compressed gas"/></a>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
