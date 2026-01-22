
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/Authcontext';
import VideoMeetComponent from './pages/videoMeet';
import HomeComponent from './pages/home';
import Myhistory from './pages/myHistory';


function App() {
    return (
        <div>
            <Router>

                <AuthProvider>




                    <Routes>

                        <Route path='/' element={<LandingPage />} />

                        <Route path='/auth' element={<Authentication />} />

                        <Route path='/home' element={<HomeComponent />} />

                        <Route path='/history' element={<Myhistory />} />

                        <Route path='/:url' element={<VideoMeetComponent />} />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    )
}

export default App;