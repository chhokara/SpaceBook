import React, { Component } from 'react'
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/Fear_remedy.png";
import Display from './CardComponent/Slider'
import Card from './CardComponent/Card'
export class Scroll extends Component {
    render() {
        return (
            
            <div className = "centered container">
                <div style={{ display: "flex" }}>
                <h1 style = {styles.headerStyle}>My Bookings</h1>
                <ReactRoundedImage
                    image={MyPhoto}
                    roundedColor="#321124"
                    imageWidth="60"
                    imageHeight="60"
                    roundedSize="6"
                    hoverColor="#DD1144"
                    

                   
                />
                </div>
                <Display />
                
                <button style={{...styles.button}}>+ NEW BOOKING</button>
            
                
        
            </div>

           
        )
    }
}

const styles = {
    button: {
        width: '364px',
        height: '58px',
        left: '27px',
        top: '12px',
        background: '#1D1D1D',
        border: "2px solid #1D1D1D",
        borderRadius: '16px', 
        fontSize: '14px',
        fontFamily: 'Helvetica',
        color: 'white',
        marginTop: '10px',
        radius: '8px'
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
    headerStyle: {
        paddingTop: '10px',
        fontFamily: 'Source Serif Pro',
        height: '115px',
        width: '255px',
        
        
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '40px',
        lineHeight: '110%',
/* or 35px */

        letterSpacing: '-0.05em'
     }
}

export default Scroll


