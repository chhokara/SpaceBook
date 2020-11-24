import React, { Component } from 'react'


export class Select extends Component {
    render(){
        return (
            <div style={{ margin: '20px' }}>
                <div style={styles.button}>
                    <text style={styles.text}>BOOK ANOTHER</text>
                </div>
                <div style={styles.secondary}>
                    <text style={styles.text}>DONE</text>
                </div>
            </div>
        )
    }
}

const styles = {
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '334px',
        height: '48px',
        borderRadius: '4px',
    },
    secondary: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        textDecorationLine: 'underline',
    },
    text: {
        fontSize: '12px',
        fontFamily: 'HKGroteskBold',
        color: 'black',
        letterSpacing: '2px',
    }
}

export default Select