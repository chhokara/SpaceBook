import React, { Component } from 'react'
import { BiPencil } from 'react-icons/bi'

export class FieldSection extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.sections}>
                    <text>Type</text>
                    <div style={styles.field}>
                        <text style={styles.fieldText}>Team meeting room</text>
                    </div>
                    <BiPencil style={{ height: '20px', paddingLeft: '5px' }}/>
                </div>

                <div style={styles.sections}>
                    <text>Date</text>
                    <div style={styles.field}>
                        <text style={styles.fieldText}>Feb 28, 2020</text>
                    </div>
                    <BiPencil style={{ height: '20px', paddingLeft: '5px' }}/>
                </div>

                <div style={styles.sections}>
                    <text>Time</text>
                    <div style={styles.timeSection}>
                        <div style={styles.timeField}>
                            <text style={styles.fieldText}>8:00am</text>
                        </div>
                        <text>—</text>
                        <div style={styles.timeField}>
                            <text style={styles.fieldText}>9:00am</text>
                        </div>
                    </div>
                    <BiPencil style={{ height: '20px', paddingLeft: '5px' }}/>
                </div>

                <div style={styles.sections}>
                    <text>Space</text>
                    <div style={styles.field}>
                        <text style={styles.fieldText}>Floor 12 Room 3</text>
                    </div>
                    <BiPencil  style={{ height: '20px', paddingLeft: '5px' }}/>
                </div>

                <div style={styles.sections}>
                    <text>Participants</text>
                    <BiPencil  style={{ height: '20px', paddingLeft: '5px', marginLeft: 'auto' }}/>
                </div>
                <div style={styles.participantField}>
                    <text style={styles.fieldTextP}>Kamala Harris, Joe Biden, Donald Trump, Mike Pence</text>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        fontFamily: 'Source Serif Pro',
        fontSize: '24px',
        height: '474px',
        margin: '50px 23px 50px 23px',
    },
    sections: {
        display: 'flex',
        flexDirection: 'row',
        width: '329px',
        alignItems: 'center',
    },
    field:  {
        minWidth: '222px',
        height: '41px',
        border: '2px solid #1D1D1D',
        borderRadius: '4px',
        marginLeft: 'auto',
    },
    timeSection: {
        display: 'flex', 
        flexDirection: 'row', 
        width: '222px', 
        justifyContent: 'space-evenly',
        marginLeft: 'auto',
        alignItems: 'center',
    },
    timeField: {
        width: '96px',
        height: '41px',
        border: '2px solid #1D1D1D',
        borderRadius: '4px',
    },
    participantField: {
        display: 'flex',
        width: '326px',
        height: '146px',
        border: '2px solid #1D1D1D',
        borderRadius: '4px',
    },
    fieldText: {
        paddingLeft: '16px', 
        color: '#717171', 
        fontSize: '18px',
        textAlign: 'inherit',
    },
    fieldTextP: {
        padding: '13px 15px 13px 15px', 
        color: '#717171', 
        fontSize: '18px',
        textAlign: 'inherit',
    }
}

export default FieldSection