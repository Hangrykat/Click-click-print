import React from 'react'
import Button from '@material-ui/core/Button';


function CustomButton(props) {
    const styledButton = {
        background: '#488b8f',
        borderRadius: 3,
        border: 0,
        fontSize: '10px',
        color: '#fff',
        fontWeight: 'bold',
        margin: '5px',
        padding: '5px, 10px',
    };

    return (
        <div>
            <Button endIcon={props.icon} style={styledButton}>{props.name}</Button>
        </div>
    )
}

export default CustomButton
