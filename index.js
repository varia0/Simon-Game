$(document).keydown(startGame);

let level = 0,
    randomNumber,
    i = 0;
let gamePattern = [];

let buttons = $(".btn");
let title = $("#level-title");

let blueSound = new Audio("sounds/blue.mp3");
let greenSound = new Audio("sounds/green.mp3");
let redSound = new Audio("sounds/red.mp3");
let yellowSound = new Audio("sounds/yellow.mp3");
let wrongSound = new Audio("sounds/wrong.mp3");

function startGame() {
    $(document).unbind("keydown");
    nextSequence();
    buttons.click({ randomNumber: randomNumber }, handleClick);
}

function nextSequence() {
    i = 0;
    level++;
    title.text("Level " + level);
    randomNumber = Math.floor(Math.random() * 4 + 1);
    gamePattern.push(randomNumber);
    switch (randomNumber) {
        case 1:
            setTimeout(function () {
                greenSound.play();
                $("#green").addClass("pressed");
                setTimeout(function () {
                    $("#green").removeClass("pressed");
                }, 200);
            }, 1000);
            break;
        case 2:
            setTimeout(function () {
                redSound.play();
                $("#red").addClass("pressed");
                setTimeout(function () {
                    $("#red").removeClass("pressed");
                }, 200);
            }, 1000);
            break;
        case 3:
            setTimeout(function () {
                yellowSound.play();
                $("#yellow").addClass("pressed");
                setTimeout(function () {
                    $("#yellow").removeClass("pressed");
                }, 200);
            }, 1000);
            break;
        case 4:
            setTimeout(function () {
                blueSound.play();
                $("#blue").addClass("pressed");
                setTimeout(function () {
                    $("#blue").removeClass("pressed");
                }, 200);
            }, 1000);
            break;
    }
    console.log(randomNumber);
}

function handleClick() {
    let buttonPressed = $(this),
        colorPressed = $(this).attr("id");
    switch (colorPressed) {
        case "green":
            greenSound.play();
            break;
        case "red":
            redSound.play();
            break;
        case "yellow":
            yellowSound.play();
            break;
        case "blue":
            blueSound.play();
            break;
    }
    switch (gamePattern[i]) {
        case 1:
            buttonPressed.addClass("pressed");
            setTimeout(function () {
                buttonPressed.removeClass("pressed");
            }, 200);
            if (colorPressed === "green") {
                i++;
                if (i === level) nextSequence();
            } else lose();
            break;
        case 2:
            buttonPressed.addClass("pressed");
            setTimeout(function () {
                buttonPressed.removeClass("pressed");
            }, 200);
            if (colorPressed === "red") {
                i++;
                if (i === level) nextSequence();
            } else lose();
            break;
        case 3:
            buttonPressed.addClass("pressed");
            setTimeout(function () {
                buttonPressed.removeClass("pressed");
            }, 200);
            if (colorPressed === "yellow") {
                i++;
                if (i === level) nextSequence();
            } else lose();
            break;
        case 4:
            buttonPressed.addClass("pressed");
            setTimeout(function () {
                buttonPressed.removeClass("pressed");
            }, 200);
            if (colorPressed === "blue") {
                i++;
                if (i === level) nextSequence();
            } else lose();
    }
}

function lose() {
    title.text("Game Over, Press Any Key To Restart");
    wrongSound.play();
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
    buttons.unbind("click");
    $(document).keydown(startGame);
    level = 0;
    gamePattern = [];
}
