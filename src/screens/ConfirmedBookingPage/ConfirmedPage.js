import React, { Component } from "react";
import BookingInfo from "./BookingInfo";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import DoneButton from "./DoneButton";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //for accessing global state (store)

const mapBookingInfoStateToProps = (state) => ({
  //map store states to props in our class component below using connector
  month: state.month,
  dayOfMonth: state.dayOfMonth,
  timeFrom: state.timeFrom,
  timeTo: state.timeTo,
  space: state.space,
});

export class ConfirmedPage extends Component {
  render() {
    return (
      <div style={styles.page}>
        <IoIosCheckmarkCircleOutline style={styles.icon} />
        <text style={styles.text}>Booking confirmed!</text>
        <text style={{ color: "white" }}>_____________________</text>
        {/* View component to make the line would be better */}
        <BookingInfo
          timeFrom={this.props.timeFrom}
          timeTo={this.props.timeTo}
          month={this.props.month}
          dayOfMonth={this.props.dayOfMonth}
          space={this.props.space}
        />
        <Link to={"/home"}>
          {/* want to add this booking to the database after clicking this button */}
          <DoneButton />
        </Link>
      </div>
    );
  }
}

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100vh",
    padding: "50px",
    alignItems: "center",
    backgroundColor: "#19C1B7",
  },
  icon: {
    position: "relative",
    color: "white",
    fontSize: "200px",
  },
  text: {
    position: "relative",
    fontFamily: "Source Serif Pro",
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "24px",
    fontWeight: "bold",
  },
};

// export default ConfirmedPage;
export default connect(mapBookingInfoStateToProps, null)(ConfirmedPage);
