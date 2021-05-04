import "./App.css";
import React, { useState, useEffect } from "react";
import defaultDeskPic from "./assets/defaultDeskPic.jpg";
import Login from "./screens/Login";
import Card from "./components/CardComponent/Card";
import DatesPage from "./screens/DatesPage/DatesPage";
import TimesPage from "./screens/TimesPage/TimesPage";
import BookingTypePage from "./screens/BookingTypePage";
import HCard from "./components/HCardComponent/HCard";
import ConfirmedPage from "./screens/ConfirmedBookingPage/ConfirmedPage";
import Scroll from "./screens/home";
import RoomSelectPage from "./screens/RoomSelectPage";
import BookingPage from "./screens/BookingFieldPage/BookingFieldPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "./firebase";
import SignUp from "./screens/SignUp";
import ProfilePage from "./screens/ProfilePage";

function App() {
  // //hooks
  // const [bookings, setBookings] = useState([]); //originally empty
  // const [loading, setLoading] = useState(false);

  // const ref = firebase.firestore().collection("bookings");

  // //REALTIME FUNCTION
  // function getBookings() {
  //   setLoading(true);
  //   ref.onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     setBookings(items);
  //     setLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   getBookings();
  //   // getSchools2();
  // }, []);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  // return (
  //   <div>
  //     <h1>Bookings</h1>
  //     {bookings.map((booking) => (
  //       <div key={booking.id}>
  //         <h2>{booking.timeFrom}</h2>
  //         <h2>{booking.timeTo}</h2>
  //       </div>
  //     ))}
  //   </div>
  return (
    <div>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/home" component={Scroll} />
            <Route exact path="/datesPage" component={DatesPage} />
            <Route
              exact
              path="/card"
              component={() => (
                <Card
                  timeAmount="1 HOUR 30 MIN"
                  floorAndRoom="Floor 15 Room 9-C"
                  timeFrom="1:30pm"
                  timeTo="3:30pm"
                  date="TODAY, 23RD JAN"
                  picUrl={defaultDeskPic}
                />
              )}
            />
            <Route exact path="/hCard" component={HCard} />
            <Route exact path="/timesPage" component={TimesPage} />
            <Route exact path="/bookingTypePage" component={BookingTypePage} />
            <Route exact path="/confirmedPage" component={ConfirmedPage} />
            <Route exact path="/roomSelectPage" component={RoomSelectPage} />
            <Route exact path="/bookingFieldPage" component={BookingPage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
