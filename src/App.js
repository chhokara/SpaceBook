import './App.css';
import Login from './Login'
import Card from './CardComponent/Card'
import DatesPage from './DatesPage/DatesPage'
import TimesPage from './TimesPage/TimesPage'

function App() {
  return (
  <div>
    <div style={styles.divSizing}>
        {/* <Login/> */}
        {/* <Card/> */}
        {/* <DatesPage/> */}
        <TimesPage/>
    </div>
  </div>
  );
}

const styles = {
  divSizing: {
    height: '90vh',
    // width: '10vh'
  }
}

export default App;
