import "./App.css";
import Login from "./Login";
import Card from "./CardComponent/Card";
import DatesPage from "./DatesPage/DatesPage";
import TimesPage from "./TimesPage/TimesPage";
import BookingTypePage from "./BookingTypePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        {/* <Card /> */}
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/datesPage" component={DatesPage} />
            <Route exact path="/card" component={Card} />
            <Route exact path="/timesPage" component={TimesPage} />
            <Route exact path="/bookingTypePage" component={BookingTypePage} />
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
