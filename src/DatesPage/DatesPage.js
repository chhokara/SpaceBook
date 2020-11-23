import React, { Component } from "react";
import DateRectangle from "./DateRectangle";
import SectionBar from "./SectionBar";
import BookingHeader from "../BookingHeader";
import { Link } from "react-router-dom";

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let dates = [];
for (var i = 0; i < 14; i++) {
  var newDate = new Date(); //today's date
  newDate.setDate(new Date().getDate() + i);
  dates.push([newDate.getDate(), days[newDate.getDay()]]);
}

// const routeChange = (props) => {
//   let path = `/timesPage`;
//   let history = useHistory();
//   history.push(path);
// };

export class DatesPage extends Component {
  // routeChange = (props) => {
  //   let path = `/timesPage`;
  //   let history = useHistory();
  //   history.push(path);
  // };
  // onClick1 = () => {
  //   console.log("HEREREEEEEEEEEEEEEEEEEEEE");
  //   return <Redirect to="/timesPage" />;
  // };

  render() {
    return (
      <div>
        <BookingHeader title="Book a room" />
        <SectionBar />
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <text style={styles.monthName}>{months[new Date().getMonth()]}</text>
          {dates.map((item, index) => (
            <Link to={"/timesPage"}>
              <DateRectangle dateNum={item[0]} weekDay={item[1]} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  monthName: {
    display: "flex",
    justifyContent: "center",
    fontSize: "9px",
    fontWeight: "bold",
    letterSpacing: "0.1em",
    marginBottom: "20px",
    textTransform: "uppercase",
  },
};

export default DatesPage;
