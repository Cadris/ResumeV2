VanillaTilt.init(document.querySelectorAll(".card2"),{
    max: 15,
    speed: 400,
    glare: true,       // if it should have a "glare" effect
    "max-glare": 0.5      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
});

VanillaTilt.init(document.querySelectorAll(".image-banner"),{
    max: 15,
    speed: 400,
    glare: true,       
    "max-glare": 0.5   
});

VanillaTilt.init(document.querySelectorAll(".card3"),{
    max: 15,
    speed: 400,
    glare: true,       
    "max-glare": 0.5   
});

VANTA.BIRDS({
    el: "#vanta-element",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 500.00,
    minWidth: 500.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color1: 0xe4776
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColour(idName){
    var setIdName = "#"+idName;
    $(setIdName).css("color", getRandomColor());    
}
