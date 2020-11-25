import "./App.css";
import defaultDeskPic from "./assets/defaultDeskPic.jpg";
import Login from "./Login";
import Card from "./CardComponent/Card";
import DatesPage from "./DatesPage/DatesPage";
import TimesPage from "./TimesPage/TimesPage";
import BookingTypePage from "./BookingTypePage";
import HCard from "./HCardComponent/HCard";
import ConfirmedPage from "./ConfirmedBookingPage/ConfirmedPage";
import Scroll from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
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
          </Switch>
        </Router>
      </div>
    </div>
  );
}

const styles = {
  divSizing: {
    // height: "90vh",
    // width: '10vh'
  },
};

export default App;
