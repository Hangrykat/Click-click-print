import React from 'react'
import TextField from '@material-ui/core/TextField'

function TextInput(props) {
    const styledInput = {
        borderRadius: 3,
        border: 0,
        fontSize: '5px',
        margin: '5px',
        padding: 0,
        width: '95%',
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
    };

    return (
        <div>
            <TextField size='small' type={props.type} variant={props.variant} label={props.label} style={styledInput} />
        </div>
    )
}

export default TextInput
