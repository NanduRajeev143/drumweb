var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/jiafei1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/jiafei2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/jiafei3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/jiafei4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/jiafei5.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/jiafei6.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/jiafei7.mp3");
            kick.play();
            break;
        default:
            console.log("Invalid key pressed");
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
       activeButton.classList.remove("pressed"); 
    }, 100);
}
