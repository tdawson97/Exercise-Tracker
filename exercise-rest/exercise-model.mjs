import mongoose from 'mongoose';
import 'dotenv/config';


mongoose.connect(
  process.env.MONGODB_CONNECT_STRING,
  { useNewUrlParser: true }
);

const exerciseSchema = mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  unit: { type: String, required: true },
  date: { type: String, required: true }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

function isDateValid(date) {
  const format = /^\d\d-\d\d-\d\d$/;
  return format.test(date);
}

const createExercise = (name, reps, weight, unit, date) =>{
  const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date});
  return exercise.save();
};

const findExercises = () =>{
  const query = Exercise.find();
  return query.exec();
};

const findExerciseByID = (id) => {
  const query = Exercise.findById(id);
  return query.exec();
};

const replaceExercise = async (id, name, reps, weight, unit, date) => {
  const result = await Exercise.replaceOne({_id: id}, {name: name, reps: reps, weight: weight, unit: unit, date: date});
  return result.modifiedCount;
};

const deleteExercise = async (id) => {
  const result = await Exercise.deleteOne({_id: id});
  return result.deletedCount;
};



export {createExercise, findExercises, findExerciseByID, replaceExercise, deleteExercise, isDateValid};