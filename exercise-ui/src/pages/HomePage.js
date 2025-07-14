import React from 'react';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function HomePage({ setExerciseToEdit }) {

  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();

  const onDelete = async _id => {
    const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
    if(response.status === 204) {
      setExercises(exercises.filter(e => e._id !== _id));
    } else {
      console.error('Failed to delete')
    }
  };

  const onEdit = exercise => {
    setExerciseToEdit(exercise);
    navigate('/edit-exercise')
  }

  const loadExercises = async () => {
    const response = await fetch('/exercises');
    const data = await response.json();
    setExercises(data);
  }

  useEffect(() => {
    loadExercises();
  }, []);

  return(
    <div className='homepage'>
      <h1 className='page-title'>Exercise List</h1>
      <div className="Exercise-List">
      <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
      </div>
      <Link to='/create-exercise'>Create a new exercise</Link>
    </div>
  );
}

export default HomePage;