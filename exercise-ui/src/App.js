import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditExercisePage from './pages/EditExercisePage';
import CreateExercisePage from './pages/CreateExercisePage';
import Navigation from './components/Navigation';
import { useState } from 'react';

function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <header>
        <h1>Fitness Tracker</h1>
        <p>Keep track of your past workouts and plan future ones</p>
      </header>
      <Router>
      <div className="App-header">
        <Navigation />
          <Routes>
            <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit} />}></Route>
            <Route path="/edit-exercise" element={<EditExercisePage exerciseToEdit={exerciseToEdit} />}></Route>
            <Route path="/create-exercise" element={<CreateExercisePage />}></Route>
          </Routes>
      </div>
      </Router>
      <footer><p>© 2024 Tanner Dawson</p></footer>
    </div>
  );
}

export default App;
