import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar';
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
    <NavBar /> 
    <Routes>
      <Route exact path='/' element={<Home />}/>
    </Routes>
    </div>
  );
}

export default App;
