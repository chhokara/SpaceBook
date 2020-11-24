import React, { Component } from 'react'

export class BookingInfo extends Component {
    render(){
        return(
            <div style={styles.container}>
                <text style={{ paddingBottom: '10px'}}>Jen Wong</text>
                <text>Floor 14 Room C</text>
                <text>8:30am - 10:00am</text>
                <text style={{ paddingTop: '10px' }}>28th Feb</text>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'Source Serif Pro',
        fontSize: '24px',
    }
}

export default BookingInfo