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

// Call the function with example data
const exampleHoursPerDay = [3, 0, 2, 4.5, 0, 3, 1];
const target = 2;

console.log(calculateExercises(exampleHoursPerDay, target));


