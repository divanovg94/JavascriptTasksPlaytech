function myFunction(array) {
    let students = array;
    const highScoreStundets = [];
    students.map(function(value){
       
    
        if(value.score >= 5.5){
            highScoreStundets.push(value);
        }

    });
    console.log(highScoreStundets);
  }




  myFunction([
	{ name: "Ivan", score: 5 },
	{ name: "Dimitar", score: 5.5 },
	{ name: "Kristian", score: 4 },
	{ name: "Valentin", score: 6 },
	{ name: "Veselin", score: 3 },
	{ name: "Genadi", score: 5 },
	{ name: "Yavor", score: 3 },
	{ name: "Marin", score: 5.5 },
	{ name: "Kalin", score: 3 },
	{ name: "Yavor", score: 6 }
]);