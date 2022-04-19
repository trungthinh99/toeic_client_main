import './App.css';
import { Layout } from 'antd';
import { Routes, Route } from "react-router-dom";
import AppHeader from './components/header/AppHeader';
import Home from './components/homepage/Home';
import VocabContent from './components/vocab/Vocab';
import ListenContent from './components/listen/Listening';
import ReadContent from './components/reading/Reading';
import Interface from './components/game/Interface';
import LogIn from './components/login/LogOut';
import Score from './components/game/Score';
import Amount from './components/game/Amount';

function App() {
    return (
        <div className="App">
            <Layout style={{ backgoundColor: '#fcfaf2' }}>
                <AppHeader />
                <Routes>
                    <Route path="home" element={<Home />}/>
                    <Route path="vocab" element={<VocabContent />}/>
                    <Route path="vocab" element={<VocabContent />}/>
                    <Route path="listen" element={<ListenContent />}/>
                    <Route path="reading" element={<ReadContent />}/>
                    <Route path="game" element={<Amount />}/>
                    <Route path="login" element={<LogIn />}/>
                    <Route path="score" element={<Score />}/>
                    <Route path="playgame" element={<Interface />}/>
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
