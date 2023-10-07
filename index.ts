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
  const { hoursPerDay, target } = req.body;

  if ( !hoursPerDay || isNaN(Number(hoursPerDay)) || !target || isNaN(Number(target)) ) {
    return res.status(400).send({ error: 'parameters missing'});
  }


  const result = calculateExercises(hoursPerDay, target);
  return res.send({ result });
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});