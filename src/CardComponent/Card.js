import React, { Component } from 'react'
import CardBotHalf from './CardBotHalf' 
// import defaultDeskPic from '../assets/defaultDeskPic.svg'
import defaultDeskPic from '../assets/defaultDeskPic.jpg'

export class Card extends Component {
    render() {
        return (
            <div style={styles.outsideContainer}>
                <img src={defaultDeskPic} style={styles.imgStyle}/>
                <div style={{position: 'relative', marginTop: '-30px'}}>
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
        overflow: 'hidden'
    },
    imgStyle: {
        width: '200px',
        marginLeft: '-20px',
        // marginTop: '50px',
        width: '275px',
        height: '300px',
    }
}

export default Card
