const calculateBmi = (heightCm: number, weightKg: number): string => {
  const heightM: number = heightCm / 100;
  const bmi: number = weightKg / (heightM * heightM);
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

try {
  console.log('Result:', calculateBmi(174, 90));
} catch (error) {
  console.error('Error:', error.message);
}
