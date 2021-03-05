import React, { Component } from "react";
import BookingHeader from "../BookingHeader";
import SectionBar from "../DatesPage/SectionBar";
import FieldSection from "./FieldSection";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //for accessing global state (store)
// import { changeBookingInfo } from "../actions";

const mapBookingInfoStateToProps = (state) => ({
  //map store states to props in our class component below using connector
  month: state.month,
  dayOfMonth: state.dayOfMonth,
  weekDay: state.weekDay,
  timeFrom: state.timeFrom,
  timeTo: state.timeTo,
  space: state.space,
});

// const mapDispatchToProps = () => {
//   return {
//     changeBookingInfo,
//   };
// };

export class BookingPage extends Component {
  render() {
    console.log(this.state);
    return (
      <div>
        <BookingHeader title="Book a room" />
        <SectionBar />
        <FieldSection
          month={this.props.month}
          dayOfMonth={this.props.dayOfMonth}
          timeFrom={this.props.timeFrom}
          timeTo={this.props.timeTo}
          space={this.props.space}
        />
        <Link to={"/confirmedPage"}>
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

// export default BookingPage;
export default connect(mapBookingInfoStateToProps, null)(BookingPage);
