function myFunction(array) {
    let numbers = array;
    let newNumbers = [];
    for ( let i=0; i < numbers.length; i++){
        if(numbers[i] >= 0){
            newNumbers.push(numbers[i]);
        }
        
    }
    console.log(newNumbers);
  
  }
  myFunction([ -21, -12, -11, -9, -5, 0, 1, 6, 17, 20, 22 ]);