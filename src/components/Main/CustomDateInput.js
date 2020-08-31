import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'

function CustomDateInput(props) {
    const [inputType, setInputType] = useState("")
    const styledInput = {
        borderRadius: 3,
        border: 0,
        fontSize: '0.5vw',
        margin: '5px',
        padding: 0,
        width: '95%',
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
    };

    //const today = new Date();

    //const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    // type={props.type}
    const handleInputType = (inp) => {
        setInputType(inp)
    }
    return (
        <div>
            <TextField size='small' onFocus={() => handleInputType("date")} onBlur={()=> handleInputType("")} type={inputType} variant='outlined' label={props.label} style={styledInput} />
        </div>
    )
}

export default CustomDateInput
