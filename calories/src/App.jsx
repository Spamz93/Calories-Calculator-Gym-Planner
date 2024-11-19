import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import NavList from './components/NavList/NavList'; // Formerly Sidebar
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import GymPlans from './pages/GymPlans/GymPlans';
import ProteinCalculator from './pages/ProteinCalculator/ProteinCalculator';
import Bmr from './pages/Bmr/Bmr';
import Contact from './pages/Contact/Contact';
import Login from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import MainContent from './components/MainContent/MainContent';

function App() {
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';

  return (
    <div className="app-container">
      <Header />
      {!isProfilePage && <NavList />} 
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gymplans" element={<GymPlans />} />
          <Route path="/proteincalculator" element={<ProteinCalculator />} />
          <Route path="/bmr" element={<Bmr />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={<Profile user={location.state} />} 
          />
        </Routes>
      </MainContent>
      {!isProfilePage && <Footer />} 
    </div>
  );
}

export default App;
