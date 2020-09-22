import React from 'react'
import LabelPreview from './LabelPreview/LabelPreview'
import Input from './Input/Input'
import PrintPreview from './PrintPreview/PrintPreview'
import PdfPreview from './Pdf/PdfPreview'
import './Main.css'

function Main() {
    return (
        <div className="main-container">
            <div className='main-page-view'>
                <Input />
                <LabelPreview />
            </div>
            <PrintPreview />
            <PdfPreview />
        </div>
    )
}

export default Main
