import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";


function App(props) {
    debugger;
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path='/profile' render={() =>
                    <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />}
                />
                <Route exact path='/dialogs' render={() =>
                    <Dialogs
                        store={props.store}
                    />}
                />
                <Route exact path='/news' render={() =>
                    <News
                    />}
                />
                <Route exact path='/music' render={() =>
                    <Music
                    />}
                />
                <Route exact path='/settings' render={() =>
                    <Settings
                    />}
                />
            </div>
        </div>
    );
}

export default App;
