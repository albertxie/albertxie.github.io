import './App.css';
import { NavLink } from "react-router-dom";

/*
 * Homepage of albertxie.com
 */
function App() {
  return (
    <div className='content'>
      <h1 className='title'>Home</h1>
      <p className='subtitle'>This is the homepage</p>
      <NavLink to='/about'>about</NavLink><br></br>
    </div>
  );
}

export default App;
