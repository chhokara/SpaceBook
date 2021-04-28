import React, { Component } from "react";
import HCardRightSide from "./HCardRightSide";
import defaultDeskPic from "../../assets/defaultDeskPic.jpg";
import PeopleCount from "./PeopleCount";

export class HCard extends Component {
  state = {
    borderColor: "",
  };

  onClick = () => {
    let floorAndRoomStr = this.props.floor + " " + this.props.room;
    this.props.cardOnClick(floorAndRoomStr, this.props.picUrl);
    this.setState({ borderColor: "4px solid #19C1B7" });
  };

  render() {
    return (
      <div
        style={{
          ...styles.outsideContainer,
          border: this.state.borderColor,
        }}
        onClick={this.onClick}
      >
        <div style={styles.imgContainer}>
          <img src={this.props.picUrl} style={{ height: "157px" }} />
        </div>
        <div style={styles.positioning}>
          <PeopleCount />
        </div>
        <HCardRightSide floor={this.props.floor} room={this.props.room} />
      </div>
    );
  }
}

const styles = {
  outsideContainer: {
    display: "flex",
    flexDirection: "row",
    width: "340px",
    height: "157px",
    borderRadius: "8px 8px 8px 8px",
    overflow: "hidden",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  imgContainer: {
    display: "flex",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    width: "138px",
    height: "157px",
  },
  positioning: {
    position: "absolute",
    top: "129px",
    left: "10px",
  },
};

export default HCard;
