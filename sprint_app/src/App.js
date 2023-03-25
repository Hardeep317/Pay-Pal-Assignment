
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import AllRotes from './AllRoutes/AllRoutes';
import { useState } from 'react';

function App() {
  const [userDetails, setUserDetails] = useState(JSON.parse(sessionStorage.getItem("userDetails")))
  return (
    <div className="App">
      <Navbar userDetails={userDetails} setUserDetails={setUserDetails} />
      <AllRotes userDetails={userDetails} setUserDetails={setUserDetails} />
    </div>
  );
}

export default App;
