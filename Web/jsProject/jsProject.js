const card = document.querySelectorAll(".back");
const dontTouch = document.querySelector(".dontTouch");

const btn = document.querySelector(".button");
let phoneNumerTxt = document.querySelector('#phoneNumberTxt'); 
let submitBtn = document.querySelector(".submit");

// const cardFlip = document.getElementsByClassName("card");

// cardFlip.addEventListener("click", test);

// function test(){
//   cardFlip.classList.toggle("flipCard");
//}

let flippedCards = 0;
let firstCard;
let secondCard;

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

    if(firstCard.getAttribute("cardNumber") === (secondCard.getAttribute("cardNumber"))){
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
    //document.getElementsByClassName("dontTouch").style.display = "block";
    setTimeout(() => {
      firstCard.style.zIndex = "9000";
      //this.classList.toggle("flipCard");
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

//   let index;
//   card.forEach(card => {
//     card.setAttribute("cardNumber",arr3[index]);
//     console.log(card.getAttribute("cardNumber"));
//     card.textContent = arr3[index];
//     index +=1;
//   });

  


// secondCard.setAttribute("cardNumber", firstCard.getAttribute("cardNumber"));
// console.log(secondCard.getElementsByClassName("front")); 


//when reset -> front of cards -> change text content 

