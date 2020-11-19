import React, { Component } from 'react'

export class TimeSlot extends Component {
    render() {
        return (
            <div style={styles.outsideContainer}>
                <text style={{fontSize:'10px', fontWeight:'bold'}}>{this.props.time}</text>
                <div style = {styles.rectangle}/>
            </div>

        )
    }
}

const styles = {
    outsideContainer:{
        display: 'flex',
        // width: '70vw'
    },
    rectangle: {
        // height: '65px',
        // width: '250px',
        height: '8vh',
        width: '300px',
        // width: 'calc(100vh-50px)',
        background: '#19C1B7',
        opacity: '0.2'
    }
}

export default TimeSlot
