import React, { Component } from "react";
import SectionBar from "../DatesPage/SectionBar";
import TimeSlot from "./TimeSlot";
import BookingHeader from "../BookingHeader";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //for accessing global state (store)
import { changeBookingInfo } from "../actions";

let times = [
  "8:00am",
  "9:00am",
  "10:00am",
  "11:00am",
  "12:00pm",
  "1:00pm",
  "2:00pm",
  "3:00pm",
  "4:00pm",
  "5:00pm",
  "6:00pm",
  "7:00pm",
  "8:00pm",
  "9:00pm",
  "10:00pm",
  "11:00pm",
  "12:00am",
];

const mapBookingInfoStateToProps = (state) => ({
  //map store states to props in our class component below using connector
  month: state.month,
  dayOfMonth: state.dayOfMonth,
  weekDay: state.weekDay,
});

const mapDispatchToProps = () => {
  return {
    changeBookingInfo,
  };
};

export class TimesPage extends Component {
  state = {
    timeFromTo: "Choose a slot",
    timeFrom: "",
    timeTo: "",
    // month: "",
    // dayOfMonth: "",
    // weekDay: "",
  };

  labelTimes = (time) => {
    let timeFromToStr = time + "  to  " + times[times.indexOf(time) + 1];
    this.setState({ timeFromTo: timeFromToStr });
    this.setState({ timeFrom: time });
    this.setState({ timeTo: times[times.indexOf(time) + 1] });
  };

  render() {
    var slots = [];
    times.map((item, index) =>
      slots.push(<TimeSlot time={item} labelTimes={this.labelTimes} />)
    );
    return (
      <div>
        <BookingHeader title="Book a room" />
        <SectionBar />
        <div
          style={{
            paddingRight: "20px",
            paddingLeft: "40px",
            marginBottom: "100px",
          }}
        >
          <text style={styles.dateText}>
            {this.props.weekDay}, {this.props.month}
          </text>
          <text style={{ ...styles.dateText, fontSize: "30px" }}>
            {" "}
            {this.props.dayOfMonth}
          </text>
          {slots}
        </div>
        <div style={styles.nextContainer}>
          <text style={styles.timeFromToText}>{this.state.timeFromTo}</text>
          <Link
            to={"/roomSelectPage"}
            onClick={() =>
              this.props.changeBookingInfo({
                timeFrom: this.state.timeFrom,
                timeTo: this.state.timeTo,
              })
            }
          >
            <button style={styles.button}>NEXT</button>
          </Link>
        </div>
      </div>
    );
  }
}

const styles = {
  nextContainer: {
    display: "flex",
    width: "400px",
    backgroundColor: "white",
    position: "fixed",
    right: "0",
    bottom: "0",
    height: "83px",
  },
  button: {
    width: "110px",
    height: "48px",
    right: "0",
    marginRight: "10px",
    position: "absolute",
    background: "#1D1D1D",
    border: "2px solid #1D1D1D",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "12px",
    color: "white",
    marginTop: "15px",
  },
  timeFromToText: {
    marginTop: "20px",
    fontFamily: "HKGroteskBold",
    fontSize: "25px",
  },
  dateText: {
    fontFamily: "HKGrotesk",
    color: "#448985",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

// export default TimesPage;
export default connect(
  mapBookingInfoStateToProps,
  mapDispatchToProps()
)(TimesPage);
