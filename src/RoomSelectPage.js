import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookingHeader from "./BookingHeader";
import SectionBar from "./DatesPage/SectionBar";

import HCard from "./HCardComponent/HCard";

export class RoomSelectPage extends Component {
  state = {
    hCardInfo: [
      {
        floor: "Floor 15",
        room: "Room 9-C",
        picUrl:
          "https://www.spacesworks.com/wp-content/uploads/2019/10/Meeting-room-spaces_SpacesGrosspeterTower_Basel_Switzerland_LargeMeetingRoom_WithoutPeople2.jpg",
      },
      {
        floor: "Floor 9",
        room: "Room 12-D",
        picUrl:
          "https://1r4z5a9gfu1acm33245gbc10-wpengine.netdna-ssl.com/blog/wp-content/uploads/sites/11/2020/03/solve-Meeting-room-No-Shows-878x550.png",
      },
      {
        floor: "Floor 18",
        room: "Room 11-F",
        picUrl:
          "https://www.langdonhall.ca/wp-content/uploads/bb-plugin/cache/MeetingRooms-3370_low-res-landscape.jpg",
      },
    ],
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
  }

  cardOnClick = (floorAndRoom, roomPicUrl) => {
    console.log("I'm in cardOnClick of RoomSelectPage");
    this.setState({ space: floorAndRoom });
    this.setState({ roomPicUrl });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <BookingHeader title="Book a room" />
        <SectionBar />
        <div style={{ marginLeft: "35px" }}>
          {this.state.hCardInfo.map((item) => (
            <HCard
              picUrl={item.picUrl}
              floor={item.floor}
              room={item.room}
              cardOnClick={this.cardOnClick}
            />
          ))}
        </div>
        <div style={styles.nextContainer}>
          <Link
            to={{
              pathname: "/bookingFieldPage",
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
    width: "300px",
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
};
export default RoomSelectPage;
