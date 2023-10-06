import express from 'express';
import _ from 'lodash';
import { calculateBmi } from './9.1exercise/bmiCalculator';


const app = express();



app.get('/bmi', (_req, res) => {
  const height = Number(_req.query.height);
  const weight = Number(_req.query.weight);
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    res.status(400).json({ error: 'malformatted parameters' });
  } else {
    const bmi = calculateBmi(height, weight);
    res.json({
      weight,
      height,
      bmi,
    });
  }
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});