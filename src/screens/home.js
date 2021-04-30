import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Display from "../components/CardComponent/Slider";
import BookingHeader from "../components/BookingHeader";
import { Link } from "react-router-dom";

export const Scroll = () => {
  const [state, setState] = useState({
    timeFrom: "",
    timeTo: "",
    month: "",
    dayOfMonth: "",
    weekDay: "",
    space: "",
    roomPicUrl: "",
  });

  const [name, setName] = useState("");

  const userLogin = useSelector((s) => s.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      let userName = userInfo.name.split(" ");
      setName(userName[0]);
    }
    if (state) {
      const { timeFrom } = state;
      setState({ timeFrom });
      const { timeTo } = state;
      setState({ timeTo });
      const { month } = state;
      setState({ month });
      const { dayOfMonth } = state;
      setState({ dayOfMonth });
      const { weekDay } = state;
      setState({ weekDay });
      const { space } = state;
      setState({ space });
      const { roomPicUrl } = state;
      setState({ roomPicUrl });
    }
  }, [state, userInfo]);
  console.log("IM HOME");
  console.log(state);

  return (
    <div>
      <BookingHeader title="My Bookings" />
      <h2 style={styles.nameLayout}>Welcome {name}</h2>
      <div style={styles.sliderAndButtonDiv}>
        <Display
          floorAndRoom={state.space}
          timeFrom={state.timeFrom}
          timeTo={state.timeTo}
          weekDay={state.weekDay}
          month={state.month}
          dayOfMonth={state.dayOfMonth}
          picUrl={state.roomPicUrl}
        />
        <Link to="/datesPage">
          <button style={styles.button}>+ NEW BOOKING</button>
        </Link>
      </div>
    </div>
  );
};

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
  nameLayout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#1D1D1D",
  },
};

export default Scroll;
