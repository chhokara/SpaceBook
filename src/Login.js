import React, { Component } from 'react'


export class Login extends Component {
    render() {
        return (
            <div className = "centered container">
                <h1 style = {styles.headerStyle}>SpaceBook</h1>
                <input 
                    type="text" 
                    name="email" 
                    style = {styles.inputStyle}
                    placeholder="Email" 
                    />
                <input 
                    type="password" 
                    name="password" 
                    style={styles.inputStyle}
                    placeholder="Password" 
                    />
                <button style={styles.button}>LOG IN</button> 
                <button style={{...styles.button, background:'#F2FCFB', color:'#1D1D1D'}}>SIGN UP</button>
            </div>
        )
    }
}

const styles = {
    button: {
        width: '202px',
        height: '48px',
        left: '236px',
        top: '866px',
        background: '#1D1D1D',
        border: "2px solid #1D1D1D",
        borderRadius: '4px', 
        fontSize: '14px',
        fontFamily: 'Avenir',
        color: 'white',
        marginTop: '10px'
    },
    inputStyle: {
        // flex: '10', 
        padding: '5px',
        width: '417px',
        height: '48px',
        left: '511px',
        top: '636px',
        marginBottom: '10px', 
        background: '#F2F2F2',
        border: '2px'
    },
    // headerStyle: {
    //     paddingTop: '20px'
    // }
}

export default Login


