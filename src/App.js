
import './App.css';
import 'bootstrap' ;
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Forgotpasswordpage } from './Forgotpasswordpage';
import { Resetpassword } from './Resetpassword';
import Login from './Login';
import Signup from './Signup';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
  return (
    <div className="App">
     
     <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/forgotpassword" element={<Forgotpasswordpage/>}/>
      <Route path="/user/resetpassword/:token" element={<Resetpassword/>}/>


     </Routes>
     {/* <Resetpassword/> */}
    </div>
  );
}

export default App;
