type Operation = 'multiply' | 'add' | 'divide';
type Result = number | string


const calculator = (a: number, b: number, op: Operation): Result => {

  switch(op){
    case 'add':
      return a+b
    case 'divide':
      if(b===0)throw new Error("dividing on 0 is not possible")
      return a/b
    case 'multiply':
      return a*b
    default:
      throw new Error('Operation is not multiply, add or divide!');

  }
}

const result = calculator(2, 0, 'add');
  console.log('Result:', result);