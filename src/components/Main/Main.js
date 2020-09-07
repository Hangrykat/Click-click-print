import React from 'react'
import LabelPreview from './LabelPreview/LabelPreview'
import Input from './Input/Input'
import PrintPreview from './PrintPreview/PrintPreview'
import './Main.css'

function Main() {
    return (
        <div className="main-container">
            <div className='main-page-view'>
                <Input />
                <LabelPreview />
            </div>
            <PrintPreview />
        </div>
    )
}

export default Main
