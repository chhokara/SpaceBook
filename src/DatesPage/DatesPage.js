import React, { Component } from "react";
import DateRectangle from "./DateRectangle";
import SectionBar from "./SectionBar";
import BookingHeader from "../BookingHeader";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //for accessing global state (store)
import { changeBookingInfo } from "../actions";

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let dates = [];
for (var i = 0; i < 14; i++) {
  var newDate = new Date(); //today's date
  newDate.setDate(new Date().getDate() + i);
  dates.push([newDate.getDate(), days[newDate.getDay()]]);
}

const mapBookingInfoStateToProps = (state) => ({
  //map store states to props in our class component below using connector
  dayOfMonth: state.dayOfMonth,
});

const mapDispatchToProps = () => {
  return {
    changeBookingInfo,
  };
};

export class DatesPage extends Component {
  render() {
    return (
      <div>
        <BookingHeader title="Book a room" />
        <SectionBar />
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <text style={styles.monthName}>{months[new Date().getMonth()]}</text>
          {dates.map((item, index) => (
            <Link
              to={"/timesPage"}
              onClick={() =>
                this.props.changeBookingInfo({
                  //changeBookingInfo() is one of the actions created and passed as a prop
                  month: months[new Date().getMonth()],
                  dayOfMonth: item[0],
                  weekDay: item[1],
                })
              }
            >
              <DateRectangle dateNum={item[0]} weekDay={item[1]} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  monthName: {
    display: "flex",
    justifyContent: "center",
    fontSize: "9px",
    fontWeight: "bold",
    letterSpacing: "0.1em",
    marginBottom: "20px",
    textTransform: "uppercase",
  },
};

// export default DatesPage;
export default connect(
  mapBookingInfoStateToProps,
  mapDispatchToProps()
)(DatesPage);
