import { useState } from 'react';
import './GymPlan.css';

const GymPlans_choosePlan =() => {
  const [boxes, setBoxes] = useState([
    { text: 'Monday', isOpen: false, inputValue: '' },
    { text: 'Tuesday', isOpen: false, inputValue: '' },
    { text: 'Wednesday', isOpen: false, inputValue: '' },
    { text: 'Thursday', isOpen: false, inputValue: '' },
    { text: 'Friday', isOpen: false, inputValue: '' },
    { text: 'Saturday', isOpen: false, inputValue: '' },
    { text: 'Sunday', isOpen: false, inputValue: '' },
  ]);


  const handleBoxClick = (index) => {
    const newBoxes = boxes.map((box, i) => {
      if (i === index) {
        return { ...box, isOpen: !box.isOpen }; 
      }
      return { ...box, isOpen: false };
    });
    setBoxes(newBoxes);
  };


  const handleInputChange = (index, value) => {
    const newBoxes = boxes.map((box, i) => {
      if (i === index) {
        return { ...box, inputValue: value }; 
      }
      return box; 
    });
    setBoxes(newBoxes);
    };

  return (
    <div className="box-container">
      {boxes.map((box, index) => (
        <div key={index} className="box-wrapper">
          <div
            className="box"
            onClick={() => handleBoxClick(index)} 
          >
            {box.text}
          </div>

          
          {box.isOpen && (
            <div className="dropdown">
              <input
                type="text"
                placeholder="Write your plan down..."
                value={box.inputValue}
                onChange={(e) => handleInputChange(index, e.target.value)} 
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default GymPlans_choosePlan;

