import './App.css';
import Login from './Login'
import Card from './CardComponent/Card'

function App() {
  return (
  <div>
    <div className='centered'>
        {/* <Login /> */}
        <Card/>
    </div>
  </div>
  );
}

const headerStyle = {
  marginTop: '500px'
}

export default App;
