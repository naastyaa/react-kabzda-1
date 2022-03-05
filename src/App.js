import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";



const App = (props) => {
    return (
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <div className='appWrapperContent'>
                <Routes>
                    <Route path='/dialogs'
                           element={<Dialogs state={props.state.dialogsPage} />}/>

                    <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                             dispatch={props.dispatch}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;