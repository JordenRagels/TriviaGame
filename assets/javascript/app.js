

// Make an object for values
var ninetySeconds = 90;
var questionsArray = [
    { question: "How old was Snow White?", choices: [20, 14, 16], correctAnswer: 14 },
    { question: "Which Princess has dimples?", choices: ["Cinderella", "Jasmine", "Tiana"], correctAnswer: "Tiana" },
    { question: "Which Princesses are left handed?", choices: ["Mulan & Tiana", "Pocahontas & Aurora", "Merida & Mulan"], correctAnswer: "Mulan & Tiana" },
    { question: "Which is the quietest Princess?", choices: ["Cinderella", "Snow White", "Aurora"], correctAnswer: "Aurora" },
    { question: "Which Princess was the only one with brothers?", choices: ["Ariel", "Belle", "Merida"], correctAnswer: "Merida" },
    { question: "Which Princess was Walt's favorite?", choices: ["Cinderella", "Snow White", "Aurora"], correctAnswer: "Cinderella" },
    { question: "Pocahontas was the only Princess based off of a real person?", choices: ["True", "False"], correctAnswer: "True" },
    { question: "Which accent does Aurora have?", choices: ["Dutch", "English", "French"], correctAnswer: "English" },
    { question: "Which was the last Disney Princess made with Walt?", choices: ["Snow White", "Aurora", "Cinderella"], correctAnswer: "Aurora" },
    { question: "How many engineers and artists did it take to make Merida's hair?", choices: [4, 6, 10], correctAnswer: 6 }
]

// Start button 
//Timer 
function tenMinutes() {
    ninetySeconds--;
    $("#timer").html(ninetySeconds);
    console.log("10 mins!");
    if (ninetySeconds === 0) {
        gameComplete();
    }
}

$("#startButton").click(function () {
    setInterval(tenMinutes, 1000);
    startGame();
})



// put the questions on the screen 

function startGame() {
    console.log("it works");
    for (var i = 0; i < questionsArray.length; i++) {
        console.log(questionsArray[i].question);
        $('.card-title' + i).append('<h5>' + questionsArray[i].question + '</h5>');
        for (var j = 0; j < questionsArray[i].choices.length; j++) {
            console.log(questionsArray[i].choices[j]);
           // $('.card-text' + i).append("<p>" + questionsArray[i].choices[j] + "</p>");
           let radioButton = `<input type=radio name=question-${i} value= ${questionsArray[i].choices[j]}> ${questionsArray[i].choices[j]}</input>`  
           $('.card-text' + i).append(`<div> ${radioButton} </div>`);
      
 
     }
        
    }
}

function gameComplete() {
    console.log("it worked");
    setInterval(stop);
}

// onclick function for the choices



// Stop the quiz when the timer reaches 0


// Evaluate the choices to the right answer
