import React, { Component } from "react";
import BookingHeader from "../BookingHeader";
import SectionBar from "../DatesPage/SectionBar";
import FieldSection from "./FieldSection";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

export class BookingPage extends Component {
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
    console.log(this.state);
    return (
      <div>
        <BookingHeader title="Book a room" />
        <SectionBar />
        <FieldSection
          month={this.state.month}
          dayOfMonth={this.state.dayOfMonth}
          timeFrom={this.state.timeFrom}
          timeTo={this.state.timeTo}
          space={this.state.space}
        />
        <Link
          to={{
            pathname: "/confirmedPage",
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
          {/* just have both buttons take us to confirmed for now */}
          <Buttons />
        </Link>
      </div>
    );
  }
}

const styles = {
  formatting: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default BookingPage;
