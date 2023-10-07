interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (daily_exercises: number[], target: number): ExerciseResult => {
  const periodLength = daily_exercises.length;
  const trainingDays = daily_exercises.filter(hours => hours > 0).length;
  const totalHours = daily_exercises.reduce((sum, hours) => sum + hours, 0);
  const average = totalHours / periodLength;

  const targetReached = average >= target;
  const rating = targetReached ? 3 : average >= target - 0.5 ? 2 : 1;
  const ratingDescription =
    rating === 3 ? 'great job, target achieved!' : rating === 2 ? 'not too bad but could be better' : 'need improvement';

  return {
    periodLength,
    trainingDays,
    success: targetReached,
    rating,
    ratingDescription,
    target,
    average,
  };
};

const args = process.argv.slice(2); 
const daily_exercises = args.map(arg => parseFloat(arg)).filter(arg => !isNaN(arg));

if (daily_exercises.length === 0) {
  console.log('Please provide valid exercise hours as command-line arguments.');
  process.exit(1);
}

const target = parseFloat(args[args.length - 1]);


const exerciseResult: ExerciseResult = calculateExercises(daily_exercises, target);

console.log(exerciseResult);


