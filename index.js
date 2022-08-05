// sound making

function makeSound(keyValue){
    switch (keyValue) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            break;
    }
};

// Decting the key clicked
var btn = $(".drum");
for(var i = 0; i< btn.length; i++){
    btn.eq(i).click(function(){
        var buttonInnerHTML = this.innerText;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)
    });
}

$(document).keypress(function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Button animation 

function buttonAnimation(currentKey){
    var activeButton = $("."+currentKey);

    activeButton.addClass("pressed");
    setTimeout(() => {
        activeButton.removeClass("pressed")
    }, 100);
}

