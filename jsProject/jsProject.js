//diplay vs visibil

//cardOne.style.display  = none;
//cardOne.style.visbility = "hidden";
const card = document.querySelectorAll(".back");
const cardFront = document.querySelectorAll(".front");

const btn = document.querySelector(".button");

let phoneNumerTxt = document.querySelector('#phoneNumberTxt'); 

let cardOne = "";

card.forEach(card => {
    card.addEventListener("click", flipCard);
  });

cardFront.forEach(card => {
    card.addEventListener("click", returnCard);
  });


btn.addEventListener("click", shuffleCards);

function shuffleCards(){
    console.log("shuffle");
    phoneNumerTxt.textContent = "";
}

function flipCard(e){
    cardOne = e.target;
    console.log("works");
    cardOne.style.display = "none";
    phoneNumberTxt.textContent += "1";
}

function returnCard(e){
    cardTwo = e.target;
    cardTwo.textContent ="#";
    phoneNumberTxt.textContent += "2";
}






