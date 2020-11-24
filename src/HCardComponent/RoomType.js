import React, { Component } from 'react'

export class RoomType extends Component {
    render(){
        return (
            <div style={styles.rounded}>
                <text style={styles.text}>MEETING ROOM</text>
            </div>
        )
    }
}

const styles = {
    rounded: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E7E7E7',
        width: '136px',
        height: '25px',
        left: '152px',
        borderRadius: '29px',
    },
    text: {
        fontSize: '12px',
        fontFamily: 'HKGroteskBold',
        color: 'black',
        letterSpacing: '1px',
    }
}

export default RoomType