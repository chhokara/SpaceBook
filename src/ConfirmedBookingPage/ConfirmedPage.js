import React, { Component } from "react";
import BookingInfo from "./BookingInfo";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import DoneButton from "./DoneButton";
import { Link } from "react-router-dom";

export class ConfirmedPage extends Component {
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
  render() {
    return (
      <div style={styles.page}>
        <IoIosCheckmarkCircleOutline style={styles.icon} />
        <text style={styles.text}>Booking confirmed!</text>
        <text style={{ color: "white" }}>_____________________</text>
        {/* View component to make the line would be better */}
        <BookingInfo
          timeFrom={this.state.timeFrom}
          timeTo={this.state.timeTo}
          month={this.state.month}
          dayOfMonth={this.state.dayOfMonth}
          space={this.state.space}
        />
        <Link
          to={{
            pathname: "/home",
            state: {
              timeFrom: this.state.timeFrom,
              timeTo: this.state.timeTo,
              month: this.state.month,
              dayOfMonth: this.state.dayOfMonth,
              weekDay: this.state.weekDay,
              space: this.state.space,
              roomPicUrl: this.state.roomPicUrl,
            },
          }}
        >
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

export default ConfirmedPage;
