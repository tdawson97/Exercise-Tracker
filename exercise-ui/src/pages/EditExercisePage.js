import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditExercisePage({ exerciseToEdit }) {
  const [name, setName] = useState(exerciseToEdit.name);
  const [reps, setReps] = useState(exerciseToEdit.reps);
  const [weight, setWeight] = useState(exerciseToEdit.weight);
  const [unit, setUnits] = useState(exerciseToEdit.unit);
  const [date, setDate] = useState(exerciseToEdit.date);

  const navigate = useNavigate();

  const editExercise = async () => {
    const editedExercise = {name, reps, weight, unit, date};
    const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
      method: 'PUT',
      body: JSON.stringify(editedExercise),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if(response.status === 200){
      alert("Successfully edited");
    } else {
      alert("Failed to edit");
    }
    navigate("/");
  };

  return(
    <div className='add-page'>
      <h1 className='page-title'>Edit Exercise</h1>
      <input
        type="text"
        title='Enter the exercise name'
        value={name}
        onChange={e => setName(e.target.value)} />
      <input
        type="number"
        title='Enter the number of reps'
        value={reps}
        onChange={e => setReps(e.target.valueAsNumber)} />
      <div className='weight-units'>
      <input
        type="number"
        title='Enter the weight used'
        value={weight}
        onChange={e => setWeight(e.target.valueAsNumber)} />
      <select 
        name='units'
        title='Select the units'
        value={unit}
        onChange={e => setUnits(e.target.value)}>
        <option></option>
        <option value="kgs">kgs</option>
        <option value="lbs">lbs</option>
      </select>
      </div>
      <input
        type="text"
        title='Enter the date (MM-DD-YY)'
        value={date}
        onChange={e => setDate(e.target.value)} />
      <button onClick={editExercise}>Update</button>
    </div>
  )
};


export default EditExercisePage;