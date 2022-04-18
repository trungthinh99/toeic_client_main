import './App.css';
import { Layout } from 'antd';
import AppHeader from './components/header/AppHeader';
import Home from './components/homepage/Home';

function App() {
    return (
        <div className="App">
            <Layout>
                <AppHeader />
                <Home />
            </Layout>
        </div>
    );
}

export default App;
