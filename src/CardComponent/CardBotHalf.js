import React, { Component } from 'react'
import Date from './Date'
import Time from './Time'

export class CardBotHalf extends Component {
    render() {
        return (
            <div style = {styles.container}>
                <div style = {styles.timesAndFloorOutside}>
                    <Time/>
                    <div style = {styles.timeLengthAndFloor}>
                        <text style={{fontFamily:'HKGroteskBold'}}>1 HOUR 30 MIN</text>
                        <text>Floor 14 Room 9-C</text>
                    </div>
                </div>
                <Date/>
            </div>
        )
    }
}

const styles = {
    container:{
        display: 'flex', 
        flexDirection:'column', 
        justifyContent: 'flex-end', 
        height: '230px', 
        width: '247px', 
        background: 'white',
        borderRadius: '8px 8px 8px 8px', 
    },
    timesAndFloorOutside:{
        marginLeft: '19px', 
        height: '176px', 
        display: 'flex', 
        flexDirection:'column', 
        justifyContent: 'space-between'
    },
    timeLengthAndFloor:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: '20px',
        // fontFamily: 'HKGrotesk'
    }
}
export default CardBotHalf
