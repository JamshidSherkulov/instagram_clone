import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar className='navbar__comp' />
      <Outlet className='outlet__comp' />
    </div>
  );
}

export default App;
