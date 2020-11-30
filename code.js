$(document).ready(function () {

    // declare variables outside of functions and set to 0
    var playerScore = 0;
    var computerScore = 0;

    // run the game function when the image is clicked
    $("img").click(game);
    $("img").click(winningMessage);
    // reset a new game when the new game button is clicked
    $("button").click(newGame);

    function game (event) {
        // event handlers
        event.preventDefault();
        // get players selection
        var playerSelection = $(this).data("option");

        // get a random number from 0-4 for the computers selection
        var computerSelection = Math.floor((Math.random() * 5));
        // use that random number to pick the computers choice
        if (computerSelection === 0) {
            computerSelection = "rock";
        } else if (computerSelection === 1) {
            computerSelection = "paper";
        } else if (computerSelection === 2) {
            computerSelection = "scissors";
        } else if (computerSelection === 3) {
            computerSelection = "lizard";
        } else {
            computerSelection = "spock";
        }
        // output the computers selection
        $("#selection").text("The computer chose: " + computerSelection);

        // draw outcomes
        if (playerSelection === "rock" && computerSelection === "rock") {
            $("#draw").text("Its a tie! Try again.");
        }
        else if (playerSelection === "paper" && computerSelection === "paper") {
            $("#draw").text("Its a tie! Try again.");
        }
        else if (playerSelection === "scissors" && computerSelection === "scissors") {
            $("#draw").text("Its a tie! Try again.");
        }
        else if (playerSelection === "lizard" && computerSelection === "lizard") {
            $("#draw").text("Its a tie! Try again.");
        }
        else if (playerSelection === "spock" && computerSelection === "spock") {
            $("#draw").text("Its a tie! Try again.");
        }
        // player win outcomes
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore += 1;
        }
        else if (playerSelection === "rock" && computerSelection === "lizard") {
            playerScore += 1;
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore += 1;
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore += 1;
        }
        else if (playerSelection === "scissors" && computerSelection === "lizard") {
            playerScore += 1;
        }
        else if (playerSelection === "lizard" && computerSelection === "paper") {
            playerScore += 1;
        }
        else if (playerSelection === "lizard" && computerSelection === "spock") {
            playerScore += 1;
        }
        else if (playerSelection === "spock" && computerSelection === "rock") {
            playerScore += 1;
        }
        else if (playerSelection === "spock" && computerSelection === "scissors") {
            playerScore += 1;
        }
        // computer win outcomes
        else if (computerSelection === "rock" && playerSelection === "scissors") {
            computerScore += 1;
        }
        else if (computerSelection === "rock" && playerSelection === "lizard") {
            computerScore += 1;
        }
        else if (computerSelection === "paper" && playerSelection === "rock") {
            computerScore += 1;
        }
        else if (computerSelection === "scissors" && playerSelection === "paper") {
            computerScore += 1;
        }
        else if (computerSelection === "scissors" && playerSelection === "lizard") {
            computerScore += 1;
        }
        else if (computerSelection === "lizard" && playerSelection === "paper") {
            computerScore += 1;
        }
        else if (computerSelection === "lizard" && playerSelection === "spock") {
            computerScore += 1;
        }
        else if (computerSelection === "spock" && playerSelection === "rock") {
            computerScore += 1;
        }
        else if (computerSelection === "spock" && playerSelection === "scissors") {
            computerScore += 1;
        }
        // output player and computer scores
        $("#playerScore").text(playerScore);
        $("#computerScore").text(computerScore);
    }

    function winningMessage () {
        // make it so when the score goes over 2 the game restarts
        if (playerScore > 2 || computerScore > 2) {
            newGame();
        }
        // output winner messages when scores get to 2 - best 2 out of 3
        else if (playerScore === 2) {
            $("#playerWin").text("You won!");
        }
        else if (computerScore === 2) {
            $("#computerWin").text("The computer won!")
        }
    }

    // function that creates a new game by emptying the scores, messages, and selections
    function newGame () {
        // reset the scores to 0
        playerScore = 0;
        computerScore = 0;

        // empty the scores
        $("#computerScore").empty();
        $("#playerScore").empty();

        // empty the winner messages
        $("#playerWin").text("");
        $("#computerWin").text("");

        // empty the computer selection output
        $("#selection").text("");
    }
});