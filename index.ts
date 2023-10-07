import express from 'express';
import _ from 'lodash';
import { calculateBmi } from './9.1exercise/bmiCalculator';
import { calculateExercises } from './9.2exercise/exerciseCalculator';


const app = express();
app.use(express.json());



app.get('/bmi', (_req, res) => {
  const height = Number(_req.query.height);
  const weight = Number(_req.query.weight);
  if(isNaN(height) || isNaN(weight) || height <=0 || weight <=0){
    res.send(400).json({error: ("malformed format")})
  } else{
    const bmi = calculateBmi(height, weight);
    res.json({
      height,
      weight,
      bmi
    })
  }
});

app.post('/exercises', (req, res) => {
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !Array.isArray(daily_exercises) || isNaN(target)) {
    return res.status(400).json({ error: 'malformatted parameters' });
  }

  const result = calculateExercises(daily_exercises, target);
  return res.json(result);
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});