import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import './App.css';
import Navbarex from './Navebarex';
import Carosal from './Carosal/Carosal';
import Carosalbutton from './Carosal/Carosalbutton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Logincomponents/Login';
import ViewCard from './Cardcomponents/ViewCard';
import Sign from './Logincomponents/Sign';
import Panel from './Panel';
import Addfunct from './Addfunct';
import Naveex from './Naveex';
import UserDetails from './UserDetails';
import Useroutlet from './Useroutlet';
import UserLogin from './UserLogin';

// Create a context for cart management
export const cartContext = createContext();

function App() {
  const [uid, setUid] = useState('');
  const [cardlist, setCardlist] = useState([]);

  return (
    <cartContext.Provider value={{ uid, setUid, cardlist, setCardlist }}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route element ={<UserLogin/>}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ViewCard" element={<ViewCard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/addfun/:id" element={<Addfunct />} />
          </Route>

          {/* Protected Routes (Require user to be logged in) */}
          <Route element={<Useroutlet />}>
            <Route path="/Panel" element={<Panel />} />
            <Route path="/Details" element={<UserDetails />} />
          </Route>

         
        </Routes>
      </Router>
    </cartContext.Provider>
  );
}

export default App;
