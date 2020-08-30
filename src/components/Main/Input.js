import React from 'react'
import CustomButton from './CustomButton'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import TextInput from './TextInput';

import './Input.css'

function Input() {
    return (
        <div className='input-container'>
            <div className='main-bg-wrapper'>
                <div className='secondary-bg-wrapper'>
                    <div className='title-big'>(1) Enter label information</div>
                    <div className='input-panel-wrapper'>
                        <div className='input-panel'>
                            <div className='title-mid'>About Product</div>
                            <div className='input-field'>
                                <div className='single-line-input'><p>Product name:</p><input type="text"></input></div>
                                <div className='single-line-input'><p>Chemical formula:</p><input type="text"></input></div>
                                <div className='single-line-input'><p>Date:</p><input type="number"></input></div>
                                <div className='single-line-input'><p>Possible expiry date:</p><input type="number"></input></div>
                                <div className='single-line-input'><p>Description:</p><textarea placeholder="e.g. molarity"></textarea></div>
                                <div className='single-line-input'><p>Name of owner:</p><input type="text"></input></div>
                                <div className='single-line-input'><p>Contact info</p><input type="text"></input></div>
                                <TextInput variant='outlined' label='Product name' />
                                <TextInput variant='outlined' label='Date' type='number' />
                                
                            </div>
                        </div>
                        <div className='input-panel'>
                            <div className='title-mid'>Hazardous symbols</div>
                            <div className='input-field'>
                                <div className='single-line-input'><p>Choose symbols:</p></div>
                                <div className="symbols-wrapper"></div>
                            </div>
                        </div>
                    </div>
                    <div className='buttons-wrapper'>
                        <CustomButton icon={<AddCircleOutlineOutlinedIcon/>} name='Create' />
                        <CustomButton icon={<EditOutlinedIcon/>} name='Edit' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Input
