$("document").ready(function () {

    // ==============================================================
    // MAJOR TASK: BUTTON CLICK FOR RULES
    // ==============================================================

// Rules are hidden on start up
$("#p-background").show();

    $("#hide").click(function () {
        $("#p-background").hide();
    });
    $("#show").click(function () {
        $("#p-background").show();
    });



    // ==============================================================
    // MAJOR TASK: Set variables 
    // ==============================================================

    var wins = 0;
    var losses = 0;
    var previous = 0; //change to counter later
    var targetNumber;

    // put images of crystals into an array
    var images = [
        "assets/images/gem1.jpg",
        "assets/images/gem2.png",
        "assets/images/gem3.png",
        "assets/images/gem4.png"
    ]


    // // ==============================================================
    // // MAJOR TASK: START AND RESET CONDITIONS
    // // ==============================================================
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



    // user clicks crystal and numbers add together CLICKING THE CRYSTALS
    $(document).on('click', ".crystal", function () {


        var userNum = parseInt($(this).attr('data-randomNumber'));

        previous += userNum

        $("#score-num").html(previous);



        // // ==============================================================
        // // MAJOR TASK: LOGIC CONDITIONS
        // // ==============================================================

        // // LOSING SCENARIO
        // // ================
        if (previous > targetNumber) {
            console.log("You lost!");
            alert("You lose! Your final total score was: " + previous);
            // increase losses by 1
            losses++;
            // update HTML element
            $("#losses").html("Losses: " + losses);
            // reset score
            previous = 0;
            // reset game
            startGame();

            // //WINING SCENARIO
            // //=================
        } else if (previous === targetNumber) {
            console.log("You win!!");
            alert("You win!");
            //increase wins by 1
            wins++;
            // update HTML element
            $("#wins").html("Wins " + wins);
            // reset score  
            previous = 0;
            // reset game
            startGame();
        }


    });



    // // =========================================================
    // // CALL GAME TO START WHEN PAGE LOADS
    // // =========================================================

    startGame();


});