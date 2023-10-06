const calculateBmi = (heightCm: number, weightKg: number, printText: string): string => {
  const heightM: number = heightCm / 100;
  const bmi: number = weightKg / (heightM * heightM);

  if (isNaN(bmi) || bmi <= 0) {
    throw new Error('BMI calculation error: Invalid input for height or weight.');
  }


  let message: string;

  if (bmi < 18.5) {
    message = 'Underweight';
  } else if (bmi < 24.9) {
    message = 'Normal weight';
  } else if (bmi < 29.9) {
    message = 'Overweight';
  } else {
    message = 'Obese';
  }

  return `BMI: ${bmi.toFixed(2)}, ${message}`;
};

const heightCm: number = Number(process.argv[2]);
const weightKg: number = Number(process.argv[3]);
const printText: string = 'Result is:';

try {
  console.log(calculateBmi(heightCm, weightKg, printText));
} catch (error: any) {
  console.error('Error:', error.message);
}
