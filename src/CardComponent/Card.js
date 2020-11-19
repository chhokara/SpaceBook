import React, { Component } from 'react'
import CardBotHalf from './CardBotHalf' 
// import defaultDeskPic from '../assets/defaultDeskPic.svg'
import defaultDeskPic from '../assets/defaultDeskPic.jpg'

export class Card extends Component {
    render() {
        return (
            <div style={styles.outsideContainer}>
                <img src={defaultDeskPic} style={styles.imgStyle}/>
                <div style={{position: 'relative', marginTop: '-28px'}}>
                    <CardBotHalf />
                </div>
            </div>
        )
    }
}

const styles = {
    outsideContainer: {
        display: 'flex', 
        flexDirection:'column', 
        width: '247px',
        height: '501px',
        borderRadius: '8px 8px 8px 8px', 
        overflow: 'hidden',
        // boxShadow: '0px 5px 15px 0px #000000',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)'
    },
    imgStyle: {
        width: '200px',
        marginLeft: '-15px',
        // marginTop: '50px',
        width: '275px',
        height: '300px',
    }
}

export default Card
