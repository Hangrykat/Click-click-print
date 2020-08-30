import React from 'react'
import CustomButton from './CustomButton'
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import './Preview.css'

function Preview() {
    return (
        <div className='preview-container'>
            <div className='main-bg-wrapper'>
                <div className='secondary-bg-wrapper'>
                    <div className="title-big">(2) Preview & manage file</div>
                    <div className="preview-panel"></div>
                    <div className="buttons-wrapper">    
                        <CustomButton icon={<SaveOutlinedIcon/>} name='Save' />
                        <CustomButton icon={<PrintOutlinedIcon/>} name='Print' />
                        <CustomButton icon={<ShareOutlinedIcon/>}name='Share' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview
