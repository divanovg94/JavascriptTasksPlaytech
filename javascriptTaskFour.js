//Task if Fibonacci max number is  <= 500;
numberOne = 0;
numberTwo = 1;
fibonacciNumber = 0;
console.log(numberOne);
console.log(numberTwo);
while (fibonacciNumber <= 500) {

    fibonacciNumber = numberOne + numberTwo;
if(fibonacciNumber <= 500){
  console.log(fibonacciNumber);
}
numberOne = numberTwo;
numberTwo = fibonacciNumber;

  }

//Task if Fibonacci numbers count is <= 500
numberOneTaskTwo = 0;
numberTwoTaskTwo = 1; 
fibonacciNumberTaskTwo = 0;
countTaskTwo = 2;
console.log(numberOneTaskTwo);
console.log(numberTwoTaskTwo);
while (countTaskTwo < 500) {

    fibonacciNumberTaskTwo = numberOneTaskTwo + numberTwoTaskTwo;

  console.log(fibonacciNumberTaskTwo);

numberOneTaskTwo = numberTwoTaskTwo;
numberTwoTaskTwo = fibonacciNumberTaskTwo;
countTaskTwo++;

  }