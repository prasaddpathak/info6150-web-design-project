import logo from './logo.svg';
import './App.css';
import MusicPlaying from './Components/Music Playing/MusicPlaying';
import AccountSetting from './Components/AccountSetting/AccountSetting';
import InternetRadio from './Components/InternetRadio/InternetRadio';
import { Route, BrowserRouter as Router, Link, Routes } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <div>
                <Router>
                    <Routes>
                        <Route path='/MusicPlaying' element={< MusicPlaying />} > < /Route>
                            <Route path='/AccountSetting' element={< AccountSetting />} > < /Route>
                                <Route path='/InternetRadio' element={< InternetRadio />} > < /Route>

                                </Routes> </Router > </div>

                    </div>
                    );
}

                    export default App;