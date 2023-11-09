import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {Employee}  from "./pages/Employee";
import TechnologyList from "./pages/TechnologyList";
import SecurityGroup from "./pages/SecurityGroup";
import Device from "./pages/Device";
import { Client } from "./pages/Client";
import Designation from "./pages/Designation";
import { Role } from "./pages/Role";
import SeatNumber from "./pages/SeatNumber";
import { Type } from "./pages/Type";
import Login  from "./pages/Login";
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  return (
    
     <Router>
      <Sidebar/>
      <Routes>
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route path='/employee' element={<Employee/>} />
      <Route path='/master/technology' element={<TechnologyList/>} />
      <Route path='/master/security' element={<SecurityGroup/>} />
      <Route path='/master/device' element={<Device/>} />
      <Route path='/master/client' element={<Client/>} />
      <Route path='/master/designation' element={<Designation/>} />
      <Route path='/master/role' element={<Role/>} />
      <Route path='/master/seat' element={<SeatNumber/>} />
      <Route path='/master/type' element={<Type/>} />
      </Routes>
     </Router>
  );
}

export default App;
