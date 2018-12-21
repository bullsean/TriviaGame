//Create button to start game
window.onload = function () {
    $("#startButton").click(stopwatch.start);
    $("#timer").hide();
    $("#questionsDiv").hide();
    $("#endMessage").hide();
};
//Create initial variables (time, clockIsRunning boolean, gameStarted boolean)

var question = [
    {prompt: "How do you say 'hello' in Italiano?",
    option1: "heyo",
    option2: "salud",
    option3: "ciao",
    answer: "ciao"
    },
    {prompt: "What colors are included in the Italian flag?",
    option1: "green, blue, brown",
    option2: "red, yellow, blue",
    option3: "green, white, red",
    answer: "green, white, red"
    },
    {prompt: "What is the fashion capital of Italy?",
    option1: "Rome",
    option2: "Venice",
    option3: "Milan",
    answer: "Milan"
    },
    {prompt: "What major Italian car brand recently made its way to America?",
    option1: "Subaru",
    option2: "Fiat",
    option3: "Clio",
    answer: "Fiat"
    },
    {prompt: "What's the best Italian baby girl name?",
    option1: "Giorgia",
    option2: "Cinzia",
    option3: "Noemi",
    answer: "Giorgia"
    }
]
var intervalId;
var clockIsRunning = false;
var gameStarted = false;
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;
var stopwatch = {
    time: 30,
    start: function() {
        console.log("Start button clicked!");
        intervalId = setInterval(stopwatch.count, 1*1000);
        clockIsRunning = true;
        gameStarted = true;
        $("#startButton").hide();
        $("#timer").show();
        $("#questionsDiv").show();

        for (var i = 0; i<question.length; i++) {
            var questionAnswered = false;
            $("#questionText").text(question[i].prompt);
            $("#choice1").text(question[i].option1);
            $("#choice2").text(question[i].option2);
            $("#choice3").text(question[i].option3);
            stopwatch.radioCheck();
            //call function that checks whether radio button checked
            
            
        }

    },

    radioCheck: function() {
        console.log("Radio button being checked");
        for (var i=0;i<document.questionSpace.multipleChoice.length;i++){
            if (document.questionSpace.multipleChoice[i].checked==true){
            correctCount++;
            break //exist for loop, as target acquired.
            }
            }
    },

    count: function() {
        stopwatch.time--;
        var currentTime = stopwatch.timeConverter(stopwatch.time);
        $("#timer").text(currentTime);
        console.log(stopwatch.time)

        if(stopwatch.time === 0) {
            $("#questionsDiv").hide();
            $("#timer").hide();
            $("#endMessage").show();
            stopwatch.stop();
        }
    },

    stop: function() {
        clearInterval(intervalId);
        clockIsRunning = false;
        console.log("Timer has stopped!")
    },

    timeConverter: function(time) {

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(time / 60);
        var seconds = time - (minutes * 60);
    
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
    
        if (minutes === 0) {
          minutes = "00";
        }
    
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
    
        return minutes + ":" + seconds;
      }

}
//On start button click, all questions are unhidden, start button is hidden
//When start button is hit, countdown timer starts
//When countdown timer stops, all questions hide, score is calculated
//Create questions using radio from Bootstrap
//Create logic to tell if answer selected is correct or incorrect
//Use an object to display questions and answer options(array)
//Create javascript to answer the questions