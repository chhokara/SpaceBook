import React, { Component } from 'react'

export class Date extends Component {
    render() {
        return (
            <div style={styles.rectangle}>
                <text style={styles.text}>Today, 23rd Jan</text>
            </div>
        )
    }
}

const styles = {
    rectangle: {
        width: '247px',
        height: '42px',
        left: '23px',
        top: '459px',

        background: '#19C1B7',
        borderRadius: '0px 0px 8px 8px', 
        
        //centering
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: '12px',
        fontFamily: 'HK Grotesk',
        color: 'white',

    }
}

export default Date
