//Create button to start game
window.onload = function () {
    $("#startButton").click(stopwatch.start);
    $("#timer").hide();
    $("#questionsDiv").hide();
    $("#endMessage").hide();
};
//Create initial variables (time, clockIsRunning boolean, gameStarted boolean)

var intervalId;
var clockIsRunning = false;
var gameStarted = false;
var stopwatch = {
    time: 10,
    start: function() {
        console.log("Start button clicked!");
        intervalId = setInterval(stopwatch.count, 1*1000);
        clockIsRunning = true;
        gameStarted = true;
        $("#startButton").hide();
        $("#timer").show();

        if(gameStarted === true) {
            $("#questionsDiv").show();
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