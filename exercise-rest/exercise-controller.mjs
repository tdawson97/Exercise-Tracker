import 'dotenv/config';
import * as exercise from './exercise-model.mjs';
import express from 'express';
import { body, validationResult } from 'express-validator';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.post(
    '/exercises',

    body('name').notEmpty(),
    body('name').exists({checkNull: true}),
    body('reps').isFloat({min: 1}),
    body('weight').isFloat({min: 1}),
    body('unit').isIn(["kgs", "lbs"]),

    (req, res) => {
    
    const errors = validationResult(req);

    if (exercise.isDateValid(req.body.date) && errors.isEmpty()) {
  exercise.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
      .then(exercise => {
          res.status(201).json(exercise);
      })
      .catch(error => {
          console.error(error);
          res.status(400).json({ Error: 'Request failed' });
      });
    } else {
        res.status(400).json({ Error: 'Invalid request' })
    }
});

app.get('/exercises', (req, res) => {
  
  exercise.findExercises()
      .then(exercise => {
          res.send(exercise);
      })
      .catch(error => {
          console.error(error);
          res.send({ Error: 'Request failed' });
      });
});

app.get('/exercises/:_id', (req, res) => {
    const exerciseID = req.params._id;
    exercise.findExerciseByID(exerciseID)
        .then(exercise => { 
            if (exercise !== null) {
                res.json(exercise);
            } else {
                res.status(404).json({ Error: 'Not found' });
            }         
         })
        .catch(error => {
            res.status(400).json({ Error: 'Request failed' });
        });
});

app.put('/exercises/:_id', 

    body('name').notEmpty(),
    body('name').exists({checkNull: true}),
    body('reps').isFloat({min: 1}),
    body('weight').isFloat({min: 1}),
    body('unit').isIn(["kgs", "lbs"]),
    
    (req, res) => {

    const errors = validationResult(req);

    if (exercise.isDateValid(req.body.date) && errors.isEmpty()) {
  exercise.replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
      .then(numUpdated => {
          if (numUpdated === 1) {
              res.json({ _id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date })
          } else {
              res.status(404).json({ Error: 'Not found' });
          }
      })
      .catch(error => {
          console.error(error);
          res.status(400).json({ Error: 'Request failed' });
      });
    } else {
        res.status(400).json({ Error: 'Invalid request' });
    };
});

app.delete('/exercises/:_id', (req, res) => {
  exercise.deleteExercise(req.params._id)
      .then(deletedCount => {
          if (deletedCount === 1) {
              res.status(204).send();
          } else {
              res.status(404).json({ Error: 'Not found' });
          }
      })
      .catch(error => {
          console.error(error);
          res.send({ error: 'Request failed' });
      });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});