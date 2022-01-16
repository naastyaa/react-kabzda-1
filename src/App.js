import './App.css';

import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";


const App = () => {
    return (<div className={'app_wrapper'}>
        <Header/>
        <Navbar/>
        <Profile />
    </div>)
        ;
}

export default App;
