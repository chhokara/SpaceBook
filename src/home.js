import React, { Component } from "react";
import Display from "./CardComponent/Slider";
import BookingHeader from "./BookingHeader";
import { Link } from "react-router-dom";

export class Scroll extends Component {
  state = {
    timeFrom: "",
    timeTo: "",
    month: "",
    dayOfMonth: "",
    weekDay: "",
    space: "",
    roomPicUrl: "",
  };
  componentDidMount() {
    const { handle } = this.props.match.params;
    if (this.props.location.state) {
      const { timeFrom } = this.props.location.state;
      this.setState({ timeFrom });
      const { timeTo } = this.props.location.state;
      this.setState({ timeTo });
      const { month } = this.props.location.state;
      this.setState({ month });
      const { dayOfMonth } = this.props.location.state;
      this.setState({ dayOfMonth });
      const { weekDay } = this.props.location.state;
      this.setState({ weekDay });
      const { space } = this.props.location.state;
      this.setState({ space });
      const { roomPicUrl } = this.props.location.state;
      this.setState({ roomPicUrl });
    }
  }
  render() {
    console.log("IM HOME");
    console.log(this.state);
    return (
      <div>
        <BookingHeader title="My Bookings" />
        <div style={styles.sliderAndButtonDiv}>
          <Display
            floorAndRoom={this.state.space}
            timeFrom={this.state.timeFrom}
            timeTo={this.state.timeTo}
            weekDay={this.state.weekDay}
            month={this.state.month}
            dayOfMonth={this.state.dayOfMonth}
            picUrl={this.state.roomPicUrl}
          />
          <Link to="/datesPage">
            <button style={styles.button}>+ NEW BOOKING</button>
          </Link>
        </div>
      </div>
    );
  }
}

const styles = {
  button: {
    width: "364px",
    height: "58px",
    left: "27px",
    top: "12px",
    background: "#1D1D1D",
    border: "2px solid #1D1D1D",
    borderRadius: "16px",
    fontSize: "14px",
    fontFamily: "Helvetica",
    color: "white",
    marginTop: "10px",
    radius: "8px",
  },
  sliderAndButtonDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "80px",
  },
};

export default Scroll;
