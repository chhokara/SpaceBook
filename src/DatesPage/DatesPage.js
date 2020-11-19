import React, { Component } from 'react'
import DateRectangle from './DateRectangle'
import SectionBar from './SectionBar'

let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let months = ['January','February','March','April','May','June','July','August','September', 'October', 'November', 'December']
let dates = []
for (var i =0; i<14; i++){
    var newDate = new Date() //today's date
    newDate.setDate(new Date().getDate()+i)
    dates.push([newDate.getDate(), days[newDate.getDay()]])
}

export class DatesPage extends Component {

    render() {
        return (
            <div>
                <SectionBar/>
                <text style = {styles.monthName}>{months[new Date().getMonth()]}</text>
                {
                    dates.map( (item, index) => (
                        <DateRectangle dateNum={item[0]} weekDay={item[1]}/>
                    ))
                }
            </div>
        )
    }
}

const styles = {
    monthName:{
        display: 'flex',
        justifyContent: 'center',
        fontSize: '9px',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
        marginBottom: '20px',
        textTransform: 'uppercase'
    }
}

export default DatesPage
