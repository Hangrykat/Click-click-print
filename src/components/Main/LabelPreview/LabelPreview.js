import React,{useContext} from 'react'
import './LabelPreview.css'

import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import CustomButton from '../CustomUI/CustomButton'
import {StateContext} from "../../../context"

import logoExplosive from '../../../assets/symbols/explosive.jpg'
import logoCorrosive from '../../../assets/symbols/corrosive.jpg'
import logoFlammable from '../../../assets/symbols/flammable.jpg'

function LabelPreview() {
    const {
        productName,
        chemicalFormula,
        date,
        expiryDate,
        description,
        userName,
        contactInfo } = useContext(StateContext);
    return (
        <div className='preview-container'>
            <div className='main-bg-wrapper'>
                <div className='secondary-bg-wrapper'>
                    <div className="title-big">(2) Preview & manage file</div>
                    <div className="preview-panel">
                        <div className='label-wrapper'>
                            <div className='label'>
                                <div className='label-sheet'>
                                    <div className="name-container">
                                        <div className='title-blackBG'>{productName} ({chemicalFormula})</div>                                        
                                    </div>
                                
                                    <div className="description-container">
                                        <div className='label-text'>Date:{date}</div> 
                                        <div className='label-text'>Expiry Date:{expiryDate}</div> 
                                        <div className='label-text'>Description:{description}</div>                                        
                                        <div className='label-text'>Name/ID No:{userName}</div> 
                                        <div className='label-text'>Contact:{contactInfo}</div>                                                                             
                                    </div>
                                </div>
                                <div className='label-sheet'>
                                    <h1>Hazardous Symbols</h1>
                                    <div className='symbols-wrapper'>
                                        <div className='symbol'>
                                            <img src={logoExplosive} />
                                        </div>
                                        <div className='symbol'>
                                            <img src={logoCorrosive} />
                                        </div>
                                        <div className='symbol'>
                                            <img src={logoFlammable} />
                                        </div>
                                    </div>
                                    <div id="diamond" className="warning-diamond">
                                        Warning Diamond
                                    </div>                                      
                                </div>                                                                                 
                            </div>
                        </div>    
                    </div>
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

export default LabelPreview
