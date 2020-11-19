import React, { Component } from 'react'
import dotsAndLine from '../assets/timeDotsAndLine.svg'

export class Time extends Component {
    render() {
        return (
            <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', width: '132px'}}>
                <img src={dotsAndLine} />
                <div style={styles.timeContainer}>
                    <text>2:30pm</text>
                    <text>4:30pm</text>
                </div>
            </div>
        )
    }
}

const styles = {
    timeContainer: {
        height: '97px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        fontSize: '36px',
        fontFamily: 'Source Serif Pro'
    }
}

export default Time
