import React from 'react'
import CustomButton from './CustomButton'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import CustomDateInput from './CustomDateInput';
import CustomTextInput from './CustomTextInput'

import './Input.css'

function Input() {
    function handleLabelInfo(e) {
        
        e.preventDefault();
        console.log('HURAYYYY')
    }
    return (
        <div className='input-container'>
            <div className='main-bg-wrapper'>
                <form id='label-info' className='secondary-bg-wrapper' onSubmit={handleLabelInfo}>
                    <div className='title-big'>(1) Enter label information</div>
                    <div className='input-panel-wrapper'>
                        <div className='input-panel'>
                            <div className='title-mid'>About Product</div>
                            <div className='input-field-wrapper'>                                                                
                                <CustomTextInput label='Product name' />
                                <CustomTextInput label='Chemical formula' />
                                <CustomDateInput label='Date'/>
                                <CustomDateInput label='Possible expiry date' />
                                <CustomTextInput label='Description' line='multiline' rows='3'/>
                                <CustomTextInput label='Name of owner' />
                                <CustomTextInput label='Contact info'/>  {/* add a check for the email or number*/}                           
                            </div>
                        </div>
                        <div  className='input-panel'>
                            <div className='title-mid'>Hazardous symbols</div>
                            <div className='input-field'>
                                <div className='single-line-input'><p>Choose symbols:</p></div>
                                <div className="symbols-wrapper"></div>
                            </div>
                        </div> 
                    </div>
                        <div className='buttons-wrapper'>
                            <CustomButton icon={<AddCircleOutlineOutlinedIcon/>}  name='Create' type='submit' form='label-info' />
                            <CustomButton icon={<EditOutlinedIcon/>} name='Edit' />
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Input
