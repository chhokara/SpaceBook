import React, { Component } from 'react'


export class SelectButton extends Component {
    render(){
        return (
            <div style={styles.button}>
                <text style={styles.text}>SELECT</text>
            </div>
        )
    }
}

const styles = {
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '94px',
        height: '34.12px',
        left: '154px',
        borderRadius: '4px',
    },
    text: {
        fontSize: '12px',
        fontFamily: 'HKGroteskSemiBold',
        color: 'white',
        letterSpacing: '2px',
    }
}

export default SelectButton