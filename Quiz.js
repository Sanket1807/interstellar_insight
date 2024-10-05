import React, { useState, useEffect } from 'react';
import axios from 'axios';

const questionBank = [
  { question: "What is the closest planet to the Sun?", options: ["Earth", "Mars", "Venus", "Mercury"], answer: "Mercury" },
  { question: "What is the largest planet in our Solar System?", options: ["Earth", "Jupiter", "Saturn", "Neptune"], answer: "Jupiter" },
  { question: "What planet is known as the Red Planet?", options: ["Mars", "Venus", "Saturn", "Mercury"], answer: "Mars" },
  { question: "What is the name of our galaxy?", options: ["Andromeda", "Milky Way", "Triangulum", "Whirlpool"], answer: "Milky Way" },
  { question: "How many planets are in our Solar System?", options: ["7", "8", "9", "10"], answer: "8" },
  { question: "What is the name of the first human to travel into space?", options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"], answer: "Yuri Gagarin" },
  { question: "Which planet is known for its rings?", options: ["Earth", "Saturn", "Jupiter", "Uranus"], answer: "Saturn" },
  { question: "What force keeps the planets in orbit around the Sun?", options: ["Friction", "Gravity", "Magnetism", "Inertia"], answer: "Gravity" },
  { question: "What is a light year?", options: ["A unit of time", "A unit of distance", "A unit of speed", "A unit of mass"], answer: "A unit of distance" },
  { question: "What do we call the study of celestial objects?", options: ["Physics", "Geology", "Astronomy", "Biology"], answer: "Astronomy" },
  { question: "What planet is known as the morning star?", options: ["Mars", "Venus", "Jupiter", "Mercury"], answer: "Venus" },
  { question: "Which planet has the most moons?", options: ["Mars", "Earth", "Jupiter", "Saturn"], answer: "Jupiter" },
  { question: "What is the hottest planet in our Solar System?", options: ["Mercury", "Venus", "Mars", "Jupiter"], answer: "Venus" },
  { question: "What celestial body orbits a planet?", options: ["Star", "Comet", "Moon", "Asteroid"], answer: "Moon" },
  { question: "What is the name of the first artificial satellite?", options: ["Apollo 11", "Hubble", "Sputnik", "Voyager"], answer: "Sputnik" },
  { question: "What is the name of the largest moon of Saturn?", options: ["Titan", "Europa", "Ganymede", "Callisto"], answer: "Titan" },
  { question: "What is a supernova?", options: ["A type of star", "An exploding star", "A black hole", "A nebula"], answer: "An exploding star" },
  { question: "What is the primary gas in the Sun?", options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Helium"], answer: "Hydrogen" },
  { question: "Which planet is the farthest from the Sun?", options: ["Uranus", "Neptune", "Pluto", "Saturn"], answer: "Neptune" },
  { question: "What is the term for a planet outside our Solar System?", options: ["Exoplanet", "Asteroid", "Dwarf Planet", "Satellite"], answer: "Exoplanet" },
  { question: "What is the second smallest planet in our Solar System?", options: ["Earth", "Mars", "Venus", "Mercury"], answer: "Mars" },
  { question: "What is the name of the red giant star closest to Earth?", options: ["Sirius", "Proxima Centauri", "Betelgeuse", "Rigel"], answer: "Proxima Centauri" },
  { question: "Which planet is known as the 'Giant Planet'?", options: ["Earth", "Saturn", "Jupiter", "Mars"], answer: "Jupiter" },
  { question: "What do you call a celestial body that travels through space and becomes a meteor when it enters Earth's atmosphere?", options: ["Asteroid", "Comet", "Meteoroid", "Planet"], answer: "Meteoroid" },
  { question: "What is the phenomenon where a planet appears to move backward in its orbit?", options: ["Retrograde motion", "Direct motion", "Orbital shift", "None of the above"], answer: "Retrograde motion" },
  { question: "How many Earth days does it take for the Moon to orbit the Earth?", options: ["27.3 days", "30 days", "29.5 days", "28 days"], answer: "27.3 days" },
  { question: "What is the largest volcano in the Solar System?", options: ["Mount Everest", "Olympus Mons", "Mauna Kea", "Mount Kilimanjaro"], answer: "Olympus Mons" },
  { question: "Which star is known as the North Star?", options: ["Sirius", "Polaris", "Betelgeuse", "Aldebaran"], answer: "Polaris" },
  { question: "What is the term for the point in the Earth's orbit when it is closest to the Sun?", options: ["Aphelion", "Perihelion", "Equinox", "Solstice"], answer: "Perihelion" },
  { question: "What is the name of the large, dark areas on the Moon's surface?", options: ["Maria", "Highlands", "Craters", "Ridges"], answer: "Maria" },
  { question: "What do you call the path an object takes as it moves around another object in space?", options: ["Orbit", "Rotation", "Revolution", "Trajectory"], answer: "Orbit" },
  { question: "What is the closest star to Earth?", options: ["Sirius", "Proxima Centauri", "Alpha Centauri", "Betelgeuse"], answer: "Proxima Centauri" },
  { question: "What is the name of the spacecraft that first landed humans on the Moon?", options: ["Apollo 11", "Voyager 1", "Hubble", "Space Shuttle"], answer: "Apollo 11" },
  { question: "Which planet has the Great Red Spot?", options: ["Mars", "Jupiter", "Saturn", "Neptune"], answer: "Jupiter" },
  { question: "What is the term for a solar system that has a star and planets orbiting it?", options: ["Planetary system", "Galaxy", "Cluster", "Nebula"], answer: "Planetary system" },
  { question: "What celestial event occurs when the Moon passes between the Earth and the Sun?", options: ["Lunar eclipse", "Solar eclipse", "Meteor shower", "Comet"], answer: "Solar eclipse" },
  { question: "Which planet is known for having a tilted rotation axis?", options: ["Earth", "Uranus", "Jupiter", "Mars"], answer: "Uranus" },
  { question: "What is the coldest planet in our Solar System?", options: ["Neptune", "Uranus", "Mars", "Pluto"], answer: "Neptune" },
  { question: "What are the small, icy bodies that originate from the Kuiper Belt called?", options: ["Asteroids", "Comets", "Meteors", "Planets"], answer: "Comets" },
  { question: "What is the term for the visible halo around the Sun or Moon?", options: ["Corona", "Eclipse", "Aurora", "Lunar"], answer: "Corona" },
  { question: "Which planet has the highest surface temperature?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Venus" },
  { question: "What is the main component of the Sun's atmosphere?", options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"], answer: "Hydrogen" },
  { question: "What is the name of the phenomenon where light from a star is bent by gravity?", options: ["Gravitational lensing", "Refraction", "Reflection", "Diffraction"], answer: "Gravitational lensing" },
  { question: "Which planet is known as the 'Earth's Twin'?", options: ["Mars", "Venus", "Mercury", "Jupiter"], answer: "Venus" },
  { question: "What is the name of the ring system around Saturn?", options: ["Herschel Rings", "F-ring", "Saturnian Rings", "Roche Rings"], answer: "Saturnian Rings" },
  { question: "How long does it take for light from the Sun to reach the Earth?", options: ["8 minutes", "10 minutes", "5 minutes", "15 minutes"], answer: "8 minutes" },
  { question: "What are shooting stars actually?", options: ["Meteoroids", "Comets", "Asteroids", "Planets"], answer: "Meteoroids" },
  { question: "What is the term for the brightness of a star as seen from Earth?", options: ["Magnitude", "Luminance", "Brightness", "Luminosity"], answer: "Magnitude" },
  { question: "What is the name of the largest crater on the Moon?", options: ["Tycho", "Copernicus", "Clavius", "Kepler"], answer: "Tycho" },
  { question: "What do we call a cloud of gas and dust in space?", options: ["Galaxy", "Nebula", "Star", "Planet"], answer: "Nebula" },
  { question: "What is the term for the angle between the Sun, Earth, and Moon during a solar eclipse?", options: ["Umbra", "Penumbra", "Eclipse", "Obscuration"], answer: "Umbra" },
  { question: "Which planet has a day longer than its year?", options: ["Venus", "Mars", "Jupiter", "Mercury"], answer: "Venus" },
  { question: "What is the name of the largest desert on Earth?", options: ["Sahara", "Gobi", "Antarctic", "Arabian"], answer: "Antarctic" },
  { question: "What is the term for the speed needed to break free from a planet's gravitational pull?", options: ["Escape velocity", "Orbital velocity", "Terminal velocity", "Speed of light"], answer: "Escape velocity" },
  { question: "What do we call the place where stars are born?", options: ["Galaxy", "Nebula", "Cluster", "Supernova"], answer: "Nebula" },
  { question: "Which planet is famous for its large storm known as the Great Red Spot?", options: ["Mars", "Jupiter", "Saturn", "Uranus"], answer: "Jupiter" },
  { question: "What do we call a group of stars that form a recognizable pattern?", options: ["Galaxy", "Cluster", "Constellation", "Nebula"], answer: "Constellation" },
  { question: "What is the term for the position of the Earth in its orbit when it is tilted towards the Sun?", options: ["Summer Solstice", "Winter Solstice", "Equinox", "Aphelion"], answer: "Summer Solstice" },
  { question: "What is the main component of Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Nitrogen" },
  { question: "Which planet is known as the 'Dwarf Planet'?", options: ["Earth", "Pluto", "Mars", "Jupiter"], answer: "Pluto" },
  { question: "What is the main source of energy for life on Earth?", options: ["Water", "Sunlight", "Soil", "Air"], answer: "Sunlight" },
  { question: "Which is the smallest planet in our Solar System?", options: ["Mars", "Mercury", "Venus", "Earth"], answer: "Mercury" },
  { question: "What is the name of the first spacecraft to reach Mars?", options: ["Viking 1", "Voyager 1", "Apollo 11", "Mars Rover"], answer: "Viking 1" },
  { question: "What is the term for the time it takes for the Earth to make one full rotation?", options: ["Day", "Year", "Month", "Hour"], answer: "Day" },
  { question: "What is the name of the galaxy closest to the Milky Way?", options: ["Andromeda", "Triangulum", "Whirlpool", "Sombrero"], answer: "Andromeda" },
  { question: "What do we call the time when the Sun is at its highest point in the sky?", options: ["Dawn", "Noon", "Sunset", "Midnight"], answer: "Noon" },
  { question: "What is the primary gas in the Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Nitrogen" },
  { question: "Which planet is known for having a tilted rotation axis?", options: ["Earth", "Uranus", "Jupiter", "Mars"], answer: "Uranus" },
  { question: "What is the term for the pattern of stars in the night sky?", options: ["Constellation", "Galaxy", "Cluster", "Nebula"], answer: "Constellation" },
  { question: "What is the main purpose of a telescope?", options: ["To observe distant objects", "To create stars", "To measure time", "To travel in space"], answer: "To observe distant objects" },
  { question: "Which celestial body is the largest in the Solar System?", options: ["Sun", "Jupiter", "Earth", "Neptune"], answer: "Sun" },
  { question: "What is the term for the time it takes for the Earth to orbit the Sun?", options: ["Year", "Month", "Day", "Hour"], answer: "Year" },
  { question: "What do we call a star that has exploded?", options: ["Supernova", "Nova", "Black Hole", "White Dwarf"], answer: "Supernova" },
  { question: "What is the name of the fourth planet from the Sun?", options: ["Earth", "Mars", "Venus", "Mercury"], answer: "Mars" },
  { question: "Which planet is known for its rings?", options: ["Earth", "Saturn", "Jupiter", "Mars"], answer: "Saturn" },
  { question: "What is the name of the first human to walk on the Moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"], answer: "Neil Armstrong" },
  { question: "What is the name of the star at the center of our Solar System?", options: ["Sirius", "Polaris", "Sun", "Betelgeuse"], answer: "Sun" },
  { question: "What is the term for the area around a black hole from which nothing can escape?", options: ["Event Horizon", "Singularity", "Accretion Disk", "Photon Sphere"], answer: "Event Horizon" },
  { question: "What is the term for the pattern of stars in the night sky?", options: ["Constellation", "Galaxy", "Cluster", "Nebula"], answer: "Constellation" },
  { question: "Which planet is known for its extreme winds and storms?", options: ["Mars", "Venus", "Jupiter", "Neptune"], answer: "Neptune" },
  { question: "What is the term for the brightness of a star as seen from Earth?", options: ["Magnitude", "Luminosity", "Brightness", "Luminance"], answer: "Magnitude" },
  { question: "What is the name of the largest planet in our Solar System?", options: ["Earth", "Jupiter", "Saturn", "Uranus"], answer: "Jupiter" },
  { question: "What is the term for the phenomenon when the Earth passes between the Sun and the Moon?", options: ["Solar eclipse", "Lunar eclipse", "Comet", "Meteor shower"], answer: "Lunar eclipse" },
  { question: "Which planet is known as the 'Earth's Twin'?", options: ["Mars", "Venus", "Mercury", "Jupiter"], answer: "Venus" },
  { question: "What is the main component of the Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Nitrogen" },
  { question: "What do we call the path an object takes as it moves around another object in space?", options: ["Orbit", "Rotation", "Revolution", "Trajectory"], answer: "Orbit" },
  { question: "What is the name of the first satellite launched into space?", options: ["Apollo", "Voyager", "Sputnik", "Hubble"], answer: "Sputnik" },
  { question: "What is the term for the point in the Earth's orbit when it is farthest from the Sun?", options: ["Aphelion", "Perihelion", "Equinox", "Solstice"], answer: "Aphelion" },
  { question: "What is the term for the light emitted by a star?", options: ["Luminance", "Brightness", "Luminosity", "Magnitude"], answer: "Luminosity" },
  { question: "Which planet is known for having a thick atmosphere?", options: ["Earth", "Mars", "Venus", "Mercury"], answer: "Venus" },
  { question: "What do we call the time it takes for the Earth to rotate once on its axis?", options: ["Day", "Year", "Month", "Hour"], answer: "Day" },
  { question: "What is the name of the largest moon of Jupiter?", options: ["Europa", "Ganymede", "Callisto", "Io"], answer: "Ganymede" },
  { question: "What do we call a star that is dying and has exhausted its nuclear fuel?", options: ["Red Giant", "White Dwarf", "Supernova", "Black Hole"], answer: "Red Giant" },
  { question: "Which planet is known for having many moons?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Jupiter" },
  { question: "What is the term for the study of celestial objects and phenomena?", options: ["Astrology", "Geology", "Astronomy", "Physics"], answer: "Astronomy" },
  { question: "What is the name of the first human to travel into space?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], answer: "Yuri Gagarin" },
  { question: "What is the term for the boundary around a black hole?", options: ["Event Horizon", "Singularity", "Accretion Disk", "Photon Sphere"], answer: "Event Horizon" },
  { question: "Which planet has a day longer than its year?", options: ["Venus", "Mars", "Jupiter", "Mercury"], answer: "Venus" },
  { question: "What is the main source of energy for life on Earth?", options: ["Water", "Sunlight", "Soil", "Air"], answer: "Sunlight" },
  { question: "What is the term for the brightness of a star?", options: ["Magnitude", "Luminosity", "Brightness", "Luminance"], answer: "Magnitude" },
  { question: "What do we call a large cloud of gas and dust in space?", options: ["Galaxy", "Nebula", "Cluster", "Supernova"], answer: "Nebula" },
  { question: "What is the name of the largest desert on Earth?", options: ["Sahara", "Gobi", "Antarctic", "Arabian"], answer: "Antarctic" },
  { question: "Which planet has the Great Red Spot?", options: ["Mars", "Jupiter", "Saturn", "Neptune"], answer: "Jupiter" },
  { question: "What is the term for the time it takes for the Earth to complete one orbit around the Sun?", options: ["Day", "Year", "Month", "Hour"], answer: "Year" },
  { question: "What do we call the patterns of stars in the night sky?", options: ["Constellations", "Galaxies", "Clusters", "Nebulae"], answer: "Constellations" },
  { question: "What is the name of the first human to walk on the Moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], answer: "Neil Armstrong" },
  { question: "What is the largest planet in the Solar System?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
  { question: "What is the coldest planet in the Solar System?", options: ["Mercury", "Venus", "Neptune", "Uranus"], answer: "Neptune" },
  { question: "What do we call a group of stars that form a pattern in the night sky?", options: ["Constellation", "Galaxy", "Cluster", "Nebula"], answer: "Constellation" },
  { question: "What is the term for the time it takes for the Earth to rotate once on its axis?", options: ["Day", "Year", "Month", "Hour"], answer: "Day" },
  { question: "What is the name of the fourth planet from the Sun?", options: ["Earth", "Mars", "Venus", "Mercury"], answer: "Mars" },
  { question: "What is the largest moon of Saturn?", options: ["Titan", "Europa", "Ganymede", "Callisto"], answer: "Titan" },
  { question: "What is the term for the visible halo around the Sun?", options: ["Corona", "Eclipse", "Aurora", "Lunar"], answer: "Corona" },
  { question: "What is the name of the phenomenon where a planet appears to move backward in its orbit?", options: ["Retrograde motion", "Direct motion", "Orbital shift", "None of the above"], answer: "Retrograde motion" },
  { question: "What is the term for the time it takes for light from the Sun to reach the Earth?", options: ["8 minutes", "10 minutes", "5 minutes", "15 minutes"], answer: "8 minutes" },
];


const saveScore = async (finalScore, username) => {
  try {
    const response = await axios.post('http://localhost:8080/save-quiz-score', { score: finalScore, username }, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error saving score:', error);
  }
};

const fetchScores = async () => {
  try {
    const response = await axios.get('http://localhost:8080/quiz-scores', { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error fetching scores:', error);
    return [];
  }
};

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [username, setUsername] = useState(''); 
  const [scoreList, setScoreList] = useState([]);

  useEffect(() => {
    const shuffledQuestions = questionBank.sort(() => Math.random() - 0.5).slice(0, 20);
    setQuestions(shuffledQuestions);

    const storedUsername = "YourUsername";
    setUsername(storedUsername);

    const getScores = async () => {
      const scores = await fetchScores();
      setScoreList(scores);
    };

    getScores();
  }, []);

  const handleAnswer = async (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setTimeout(() => {
        setCurrentQuestionIndex(nextQuestionIndex);
        setSelectedOption('');
      }, 100);
    } else {
      setIsQuizFinished(true);
      const finalScore = score + (option === questions[currentQuestionIndex].answer ? 1 : 0);
      await saveScore(finalScore, username);
      const updatedScores = await fetchScores();
      setScoreList(updatedScores);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsQuizFinished(false);
    const shuffledQuestions = questionBank.sort(() => Math.random() - 0.5).slice(0, 20);
    setQuestions(shuffledQuestions);
  };

  if (isQuizFinished) {
    return (
      <div className="quiz-page"> 
        <div className="score-container">
          <h2 className="score-title">Your Score: {score} out of {questions.length}</h2>
          <button onClick={handleRestart} className="quiz-option">Restart Quiz</button> 
          <h3>Scores List:</h3>
          <ul className="score-list">
            {scoreList.map((scoreEntry, index) => (
              <li key={index} className="score-entry">{scoreEntry.username}: {scoreEntry.score}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <h2 className="quiz-title">Quiz</h2>
        <h3 className="quiz-question">
          Question {currentQuestionIndex + 1} of {questions.length}
        </h3>
        <h4>{questions[currentQuestionIndex]?.question}</h4>
        <div className="quiz-options">
          {questions[currentQuestionIndex]?.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`quiz-option ${selectedOption === option ? 'selected-option' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;