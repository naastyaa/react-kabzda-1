import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Navbar/>
                <div className='appWrapperContent'>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/news" element={<Profile />} />
                        <Route path="/settings" element={<Profile />} />
                        <Route path="/music" element={<Profile />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;