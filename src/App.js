import './App.css';
import { Layout } from 'antd';
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import AppHeader from './components/header/AppHeader';
import Home from './components/homepage/Home';
import VocabContent from './components/vocab/Vocab';
import ListenContent from './components/listen/Listening';
import ReadContent from './components/reading/Reading';
import Interface from './components/game/Interface';
import LogIn from './components/user/login/LogOut';
import Score from './components/game/Score';
import Amount from './components/game/Amount';
import Profile from './components/user/profile';
import AppHeaderLogin from './components/header/AppHeaderLogin';
import Register from './components/user/register/Register';

function App() {
    const [header, setHeader] = useState(<AppHeader />);
    let location = useLocation();
    useEffect(() => {
        if (location.pathname === "/login" || location.pathname === "/register")
        setHeader(<AppHeaderLogin />)
    }, [location])

    return (
        <div className="App">
            <Layout style={{ backgoundColor: '#fcfaf2' }}>
                {header}
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="home" element={<Home />}/>
                    <Route path="vocab" element={<VocabContent />}/>
                    <Route path="listen" element={<ListenContent />}/>
                    <Route path="reading" element={<ReadContent />}/>
                    <Route path="game" element={<Amount />}/>
                    <Route path="login" element={<LogIn />}/>
                    <Route path="score" element={<Score />}/>
                    <Route path="playgame" element={<Interface />}/>
                    <Route path="profile" element={<Profile />}/>
                    <Route path="register" element={<Register />}/>
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
