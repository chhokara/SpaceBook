import './App.css';
import Login from './Login'
import Card from './CardComponent/Card'
import DatesPage from './DatesPage/DatesPage'

function App() {
  return (
  <div>
    <div className='centered'>
        {/* <Login/> */}
        {/* <Card/> */}
        <DatesPage/>
    </div>
  </div>
  );
}

const headerStyle = {
  marginTop: '500px'
}

export default App;
