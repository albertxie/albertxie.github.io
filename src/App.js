import './App.css';
import { NavLink } from "react-router-dom";

/*
 * Homepage of albertxie.com
 */
function App() {
  return (
    <div className='content'>
      <h1 className='title'>Hello world!</h1>
      <p>I am a software engineer at <a href='https://www.instacart.com'>Instacart</a>, welcome to my page! </p>

      <NavLink to='/about'>about</NavLink><br></br>
      <a href='https://www.github.com/albertxie'>github</a><br></br>
      <a href='https://www.linkedin.com/in/albertxie/'>linkedin</a>
    </div>
  );
}

export default App;
