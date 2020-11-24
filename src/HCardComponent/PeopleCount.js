import React, { Component } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'

export class PeopleCount extends Component {
    render(){
        return (
            <div style={styles.rounded}>
                <BsFillPersonFill style={{height: '10px'}}/> 
                <text style={styles.text}>
                    4-6
                </text>
            </div>
        )
    }
}

const styles = {
    rounded: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '47px',
        height: '19.5px',
        borderRadius: '20px'
    },
    text: {
        fontSize: '10px',
        fontFamily: 'HKGroteskBold'
    }
}

export default PeopleCount