import React, { Component } from "react";
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
    timeFromTo: "",
  };

  componentDidMount() {
    const { handle } = this.props.match.params;
    const { timeFromTo } = this.props.location.state;
    console.log("I'm in component did mount of RoomSelectPage");
    this.setState({ timeFromTo });
  }

  render() {
    // console.log(this.state.timeFromTo);
    return (
      <div>
        <BookingHeader title="Book a room" />
        <SectionBar />
        <div style={{ marginLeft: "35px" }}>
          {this.state.hCardInfo.map((item) => (
            <HCard picUrl={item.picUrl} floor={item.floor} room={item.room} />
          ))}
        </div>
      </div>
    );
  }
}

export default RoomSelectPage;
