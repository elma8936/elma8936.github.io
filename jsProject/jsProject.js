//diplay vs visibil

//cardOne.style.display  = none;
//cardOne.style.visbility = "hidden";

//query Slectors to make buttons 
const card = document.querySelectorAll(".back");
const dontTouch = document.querySelector(".dontTouch");

const btn = document.querySelector(".button");
let phoneNumerTxt = document.querySelector('#phoneNumberTxt'); 
let submitBtn = document.querySelector(".submit")

//initalize values
let flippedCards = 0;
let firstCard;
let secondCard;

//event listeners
card.forEach(card => {
    card.addEventListener("click", flipCard);
  });

btn.addEventListener("click", shuffleCards);

submitBtn.addEventListener("click", submit)

//functions 
function shuffleCards(){
    console.log("reset");
    phoneNumerTxt.textContent = "";
}

function flipCard(e){
  if(phoneNumberTxt.textContent.length === 16){
    submit();
    return;
  }

  if(flippedCards === 0){
    firstCard = e.target;
    flippedCards += 1;
    firstCard.style.zIndex = "-9000";
  }
  else{
    secondCard = e.target;
    secondCard.style.zIndex = "-9000";
    if((firstCard.getAttribute("cardNumber") === (secondCard.getAttribute("cardNumber")))){
      if(phoneNumberTxt.textContent.length === 3 ||  phoneNumberTxt.textContent.length === 9){
        phoneNumberTxt.textContent += " - ";
      }
      phoneNumberTxt.textContent += firstCard.getAttribute("cardNumber");
      console.log("match!");
    }
    else{
      console.log("not a match");
    }
    //cant click
    //dontTouch.style.display = "none";
    //document.getElementsByClassName("dontTouch").style.display = "inline";
    setTimeout(() => {
      firstCard.style.zIndex = "9000";
      secondCard.style.zIndex = "9000";
    }, 1000);
    flippedCards = 0;
      //can click
    //dontTouch.style.display = "inline";
    //document.getElementsByClassName("dontTouch").style.display = "none";
  }
}

function submit(){
  alert('Thank you for submitting your number: ' + phoneNumerTxt.textContent);
  console.log("Phone Number Submitted: " + phoneNumerTxt.textContent);
  shuffleCards();
}


function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

//shuffle cards

// let arr = [];
//   let i = 0;
//   while(arr.length < 10 ){
//     let num = random(0, 9);
//     while(arr.includes(num))
//     {
//       num = random(0, 9);
//     }
//     arr[i] = num;
//     i++;
//   }

//   console.log(arr);

//   let arr2 = [];
//   let j = 0;
//   while(arr2.length < 10 ){
//     let num = random(0, 9);
//     while(arr2.includes(num))
//     {
//       num = random(0, 9);
//     }
//     arr2[j] = num;
//     j++;
//   }

//   let arr3 = arr.concat(arr2);

//   console.log(arr3);
//   console.log(arr3.length);

//   let index;
//   card.forEach(card => {
//     card.setAttribute(cardNumber) = arr3[index];
//     card.textContent = arr3[index];
//     index +=1;
//   });



