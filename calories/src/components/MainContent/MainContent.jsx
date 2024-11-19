import { Routes, Route } from 'react-router-dom';
import GymPlans from '../../pages/GymPlans/GymPlans';
import ProteinCalculator from '../../pages/ProteinCalculator/ProteinCalculator';
import Bmr from '../../pages/Bmr/Bmr'; 
import Contact from '../../pages/Contact/Contact';
import Login from '../../pages/LogIn/LogIn';
import Home from '../../pages/Home/Home'
import './MainContent.css';
import Register from '../../pages/Register/Register';

const MainContent = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gymplans" element={<GymPlans />} />
        <Route path="/proteincalculator" element={<ProteinCalculator />} />
        <Route path="/bmr" element={<Bmr />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default MainContent;

