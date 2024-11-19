import { useState } from 'react';
import './ProteinCalculator.css';

const ProteinCalculator = () => {
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('1.2'); 
  const [proteinIntake, setProteinIntake] = useState(null);

  const calculateProtein = () => {
    const weightValue = parseFloat(weight);
    const activityMultiplier = parseFloat(activityLevel);
    if (!isNaN(weightValue)) {
      const protein = weightValue * activityMultiplier;
      setProteinIntake(protein.toFixed(2)); 
    }
  };

  return (
    <div className="protein-calculator">
      <h2>Daily Protein Intake Calculator</h2>
      <p>Enter your weight in kg and select your activity level:</p>
      
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="input-field"
      />
      
      <select
        value={activityLevel}
        onChange={(e) => setActivityLevel(e.target.value)}
        className="activity-level"
      >
        <option value="1.2">Sedentary</option>
        <option value="1.375">Lightly active</option>
        <option value="1.55">Moderately active</option>
        <option value="1.725">Very active</option>
        <option value="1.9">Extra active</option>
      </select>

      <button onClick={calculateProtein}>Calculate</button>

      {proteinIntake !== null && (
        <p>Your daily protein intake should be: <strong>{proteinIntake} grams</strong></p>
      )}
    </div>
  );
}

export default ProteinCalculator;

