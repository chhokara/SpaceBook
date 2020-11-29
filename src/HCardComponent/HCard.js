import React, { Component } from "react";
import HCardRightSide from "./HCardRightSide";
import defaultDeskPic from "../assets/defaultDeskPic.jpg";
import PeopleCount from "./PeopleCount";

export class HCard extends Component {
  render() {
    return (
      <div style={styles.outsideContainer}>
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
