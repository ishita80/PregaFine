//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Myths from './components/Myths';
import Navbar from './components/Navbar.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DadsGuide from './components/DadsGuide';
import ContactUs from './components/ContactUs';
import FirstTrimester from './components/FirstTrimester';
import SecondTrimester from './components/SecondTrimester';
import ThirdTrimester from './components/ThirdTrimester';
import React from 'react'
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
    <Navbar/>

   <Routes>
    <Route exact path="/" element={<Home key="home"/>}></Route>
    <Route exact path="/myths" element={<Myths key="myths"/>}></Route>
    <Route exact path="/dad'sGuide" element={<DadsGuide key="dad'sGuide"/>}></Route>
    <Route exact path="/contactUs" element={<ContactUs key="contactUs"/>}></Route>
    <Route exact path="/firstTrimester" element={<FirstTrimester key="firstTrimester"/>}></Route>
    <Route exact path="/secondTrimester" element={<SecondTrimester key="secondTrimester"/>}></Route>
    <Route exact path="/thirdTrimester" element={<ThirdTrimester key="thirdTrimester"/>}></Route>
    
   </Routes>
   </Router>
   </> 
  );
}

export default App;
