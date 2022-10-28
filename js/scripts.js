console.log("Witaj sprawdzający.");
alert('Validator checked');

let click = document.querySelector(".click");
console.log(click);
let hiddenTextWhite = document.querySelector(".hiddenTextWhite");
console.log(hiddenTextWhite);

click.addEventListener("click", () =>{
    hiddenTextWhite.classList.toggle("hiddenTextBlack");
})

let motivClick = document.querySelector(".motivClick");
console.log(motivClick);

const myImage = new Image (490,712);

myImage.src = 'images/motivation.jpg';

motivClick.addEventListener("click", () => {
    document.body.appendChild(myImage,);
})