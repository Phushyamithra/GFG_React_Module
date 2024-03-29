import './App.css';
import User from './components/User.js'
import Timer from './components/Timer.js'
import { useState } from 'react';
function App() {

  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      {/* <User/> */}
      {toggle ? <p>Alternate Component</p> : <Timer/>}
      <button onClick={() => {
        setToggle(!toggle);
      }}>Click to toggle</button>
    </div>
  );
}

export default App;
