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
    answer: "c"
    },
    {prompt: "What colors are included in the Italian flag?",
    option1: "green, blue, brown",
    option2: "red, yellow, blue",
    option3: "green, white, red",
    answer: "c"
    },
    {prompt: "What is the fashion capital of Italy?",
    option1: "Rome",
    option2: "Venice",
    option3: "Milan",
    answer: "c"
    },
    {prompt: "What major Italian car brand recently made its way to America?",
    option1: "Subaru",
    option2: "Fiat",
    option3: "Clio",
    answer: "b"
    },
    {prompt: "What's the best Italian baby girl name?",
    option1: "Giorgia",
    option2: "Cinzia",
    option3: "Noemi",
    answer: "a"
    }
]
var intervalId;
var clockIsRunning = false;
var gameStarted = false;
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;
var stopwatch = {
    time: 10,
    start: function() {
        console.log("Start button clicked!");
        intervalId = setInterval(stopwatch.count, 1*1000);
        clockIsRunning = true;
        gameStarted = true;
        $("#startButton").hide();
        $("#timer").show();
        $("dynamicQuestionsDiv").show();

        //when start button clicked, show dynamicQuestionsDiv
        //dynamically create questions - for loop through the question object to print the objects onto the page in their own divs
        for (var i = 0; i<question.length; i++) {
            console.log(question[i].prompt)

            var newDiv = $('<div>');
            var newQuestion = $('<div>'+ question[i].prompt +'</div>');
            var optionOne = $('<div><input class="form-check-input" id="choice1" type="radio" value="a" name="group'+i+'">'+ question[i].option1 +'<div>');
            var optionTwo = $('<div><input class="form-check-input" id="choice2" type="radio" value="b" name="group'+i+'">'+ question[i].option2 +'<div>');
            var optionThree = $('<div><input class="form-check-input" id="choice3" type="radio" value="c" name="group'+i+'">'+ question[i].option3 +'<div>');

            $("#dynamicQuestionsDiv").append(newDiv, newQuestion, optionOne, optionTwo, optionThree);
        };
        

        // for (var i = 0; i<question.length; i++) {
        //     // var response = document.questionSpace.multipleChoice[i].checked;
        //     $("#questionText").text(question[i].prompt);
        //     $("#choice1").text(question[i].option1);
        //     $("#choice2").text(question[i].option2);
        //     $("#choice3").text(question[i].option3);
        //     // if (response==true){
        //     //     correctCount++;}
        //     stopwatch.radioCheck();
        //     //call function that checks whether radio button checked
            
            
        // }

    },

    radioCheck: function() {
        for (var i = 0; i<question.length; i++) {
            console.log($(`input[name=group${i}]:checked`))
            var $input = $(`input[name=group${i}]:checked`);
            var value = $input.attr("value");
            // console.log(value)
            if (value === question[i].answer) {
                console.log("RIGHT!")
                correctCount++;
            } else {
                console.log("WRONG!")
                incorrectCount++;
        }
        };
    },

    count: function() {
        stopwatch.time--;
        var currentTime = stopwatch.timeConverter(stopwatch.time);
        $("#timer").text(currentTime);
        console.log(stopwatch.time)

        if(stopwatch.time === 0) {
            stopwatch.radioCheck();
            $("#dynamicQuestionsDiv").hide();
            $("#timer").hide();
            $("#endMessage").show();
            $("#correctScore").text(correctCount);
            $("#incorrectScore").text(incorrectCount);
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