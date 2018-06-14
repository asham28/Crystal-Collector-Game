// GLOBAL VARIABLES
// ==========================================================================================================================================================================
var targetNumber;

var wins = 0;
var losses = 0;
var score = 0; //change to counter later

var audio = new Audio("./assets/coin.mp3");




// FUNCTIONS AND CONDITIONAL STATEMENTS
// ==========================================================================================================================================================================
$("document").ready(function () {



    // BUTTON CLICK FOR RULES
    // ==============================================================

    // Rules are hidden on start up
    $("#rules").hide();

    $("#hide").click(function () {
        $("#rules").hide();
    });
    $("#show").click(function () {
        $("#rules").show();
    });

    // MAJOR TASK: Set variables 
    // ==============================================================

    // put images of crystals into an array
    var images = [
        "assets/images/gem1.jpg",
        "assets/images/gem2.png",
        "assets/images/gem3.png",
        "assets/images/gem4.png"
    ]

    // MAJOR TASK: START AND RESET CONDITIONS
    // ==============================================================
    var startGame = function () {

        targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
        $("#targetNum").html(targetNumber);

        console.log("Target : " + targetNumber)

        $(".crystals").empty();

        // // First, create the random number between 1-12 for each crystal
        for (var i = 0; i < 4; i++) {
            var randomNumber = Math.floor(Math.random() * (12 - 1) + 1);
            console.log(randomNumber);

            var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-randomNumber": randomNumber,
            });

            // append image of crystal to each div 
            crystal.css({
                "background-image": "url('" + images[i] + "')",
                "background-size": "cover"
            });

            $(".crystals").append(crystal);

        }
    }


    // User Clicks Crystal and Random Number Writes to Score 
    // ==============================================================
    $(document).on('click', ".crystal", function () {

        audio.currentTime = 0;
        audio.play();
        var userNum = parseInt($(this).attr('data-randomNumber'));

        score += userNum

        $("#score-num").html(score);

        // LOSING SCENARIO
        // =========================================
        if (score > targetNumber) {
            console.log("You lost!");
            alert("You lose! Your final total score was: " + score);

            // increase losses by 1
            losses++;
            // update HTML element
            $("#losses").html(losses);
            // reset score
            score = 0;
            // reset game
            startGame();

            // WINING SCENARIO
            // =====================================
        } else if (score === targetNumber) {
            console.log("You win!!");
            alert("You win!");

            //increase wins by 1
            wins++;
            // update HTML element
            $("#wins").html(wins);
            // reset score  
            score = 0;
            // reset game
            startGame();
        }
    });



    // CALL GAME TO START WHEN PAGE LOADS
    // ==============================================================
    startGame();

});