import { useState } from 'react';
import './Bmr_Math.css';

const Bmr = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [bmr, setBmr] = useState(null);

  const calculateBMR = () => {
    let calculatedBMR;

    if (gender === 'male') {
      calculatedBMR = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
      calculatedBMR = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    setBmr(calculatedBMR.toFixed(2));
  };

  const handleReset = () => {
    setAge('');
    setWeight('');
    setHeight('');
    setBmr(null);
  };

  return (
    <div className="bmr-container">
      <h1 className="title">BMR Calculator</h1>

      <div className="input-group">
        <label>Age (Years):</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        />
      </div>

      <div className="input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight"
        />
      </div>

      <div className="input-group">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height"
        />
      </div>

      <div className="input-group">
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <button className="calculate-btn" onClick={calculateBMR}>
        Calculate BMR
      </button>
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>

      {bmr && (
        <div className="result">
          <h3>Your BMR is: {bmr} kcal/day</h3>
        </div>
      )}
    </div>
  );
};

export default Bmr;
