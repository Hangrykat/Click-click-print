import React from 'react'
import './Preview.css'

function Preview() {
    return (
        <div className='preview-container'>
            <div className='main-bg-wrapper'>
                <div className='secondary-bg-wrapper'>
                    <div className='title-big'>(2) Preview & manage file</div>
                    <div className="preview-panel"></div>
                    <div className="buttons-wrapper">
                        <button>Save</button>
                        <button>Print</button>
                        <button>Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview
