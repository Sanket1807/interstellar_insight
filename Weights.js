import React, { useState } from 'react';
import './App.css';

const planets = [
  { name: 'Mercury', gravity: 0.38, yearLength: 88 },
  { name: 'Venus', gravity: 0.91, yearLength: 225 },
  { name: 'Mars', gravity: 0.38, yearLength: 687 },
  { name: 'Jupiter', gravity: 2.34, yearLength: 4333 },
  { name: 'Saturn', gravity: 1.06, yearLength: 10759 },
  { name: 'Uranus', gravity: 0.92, yearLength: 30687 },
  { name: 'Neptune', gravity: 1.19, yearLength: 60190 },
];

const calculateWeight = (weight, gravity) => weight * gravity;
const calculateAge = (age, yearLength) => age * (365 / yearLength);

const Weights = () => {
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(30); 

  return (
    <div className="weight">
      <div className="weights-container">
        <h1>Ages and Weights on Different Planets</h1>

        <div className="input-group">
          <label>
            Enter your weight on Earth (kg) :
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="input-field"
            />
          </label>
        </div>

        <div className="input-group">
          <label>
            Enter your age on Earth (years) :
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input-field"
            />
          </label>
        </div>

        <div className="results">
          {planets.map((planet) => {
            const weightOnPlanet = calculateWeight(weight, planet.gravity).toFixed(2);
            const ageOnPlanet = calculateAge(age, planet.yearLength).toFixed(2);

            return (
              <div className="planet-card" key={planet.name}>
                <h3>{planet.name}</h3>
                <p>Weight: {weightOnPlanet} kg</p>
                <p>Age: {ageOnPlanet} years</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Weights;
