import React, { Component } from 'react'

export class Buttons extends Component {
    render() {
        return (
            <div style={styles.container}>
                <text style={styles.buttonWhite}>BACK</text>
                <text style={styles.buttonBlack}>CONFIRM</text>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '48px',
        fontFamily: 'HKGrotesk',
        letterSpacing: '2px',
    },
    buttonWhite: {
        width: '153px',
        height: '48px',
        background: 'white',
        border: '2px solid #1D1D1D',
        borderRadius: '4px',
        fontWeight: 'bold',
        fontSize: '12px',
        color: 'black',
        lineHeight: '48px',
        marginTop: '10px',
        textAlign: 'center',
    },
    buttonBlack: {
        width: '153px',
        height: '48px',
        background: '#1D1D1D',
        border: '2px solid #1D1D1D',
        borderRadius: '4px',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '48px',
        color: 'white',
        marginTop: '10px',
        textAlign: 'center',
    }
}

export default Buttons