import './App.css';
import Scroll from './home'
import Login from './booking'
import Card from './CardComponent/Card'
import Display from './CardComponent/Slider'
function App() {
  return (
  <div>
    <div>
        {/* <h1 style = {headerStyle}>SpaceBook</h1>
        <Login /> */}
        {/*<Scroll />*/}
        <Scroll />
    </div>
  </div>
  );
}

const headerStyle = {
  marginTop: '500px'
}

export default App;
