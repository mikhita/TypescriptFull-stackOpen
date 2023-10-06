interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (hoursPerDay: number[], target: number): ExerciseResult => {
  const periodLength = hoursPerDay.length;
  const trainingDays = hoursPerDay.filter(hours => hours > 0).length;
  const totalHours = hoursPerDay.reduce((sum, hours) => sum + hours, 0);
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
const hoursPerDay = args.map(arg => parseFloat(arg)).filter(arg => !isNaN(arg));

if (hoursPerDay.length === 0) {
  console.log('Please provide valid exercise hours as command-line arguments.');
  process.exit(1);
}

const target = parseFloat(args[args.length - 1]);


const exerciseResult: ExerciseResult = calculateExercises(hoursPerDay, target);

console.log(exerciseResult);


