import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function CreateExercisePage() {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnits] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  const addExercise = async () => {
    const newExercise = {name, reps, weight, unit, date};
    const response = await fetch('/exercises', {
      method: 'POST',
      body: JSON.stringify(newExercise),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if(response.status === 201){
      alert("Successfully added");
    } else {
      alert("Failed to add");
    }
    navigate("/");
  };

  return(
    <div className='add-page'>
      <h1 className='page-title'>Add Exercise</h1>
      <input
        type="text"
        placeholder='Enter exercise name here'
        value={name}
        onChange={e => setName(e.target.value)} />
      <input
        type="number"
        placeholder='Enter the number of reps'
        value={reps}
        onChange={e => setReps(e.target.valueAsNumber)} />
      <div className='weight-units'>
      <input
        type="number"
        placeholder='Enter weight'
        value={weight}
        onChange={e => setWeight(e.target.valueAsNumber)} />
      <select 
        name='units'
        value={unit}
        onChange={e => setUnits(e.target.value)}>
        <option></option>
        <option value="kgs">kgs</option>
        <option value="lbs">lbs</option>
      </select>
      </div>
      <input
        type="text"
        placeholder='Enter the date (MM-DD-YY)'
        value={date}
        onChange={e => setDate(e.target.value)} />
      <button onClick={addExercise}>Add</button>
    </div>
  )
};

export default CreateExercisePage;