const cards = document.querySelectorAll(".card");
const btn = document.querySelector(".button");

console.log(cards);

let cardOne;
let cardTwo;
let noClick = false;

let phoneNum = [];

function flipCard(e){
  let clickedCard = e.target;
  if(clickedCard !== cardOne && !noClick){
    clickedCard.classList.add("flip");
    if(!cardOne){
      return cardOne = clickedCard;
    }
    cardTwo = clickedCard;
    click = true;
  }

  let cardOneImg = cardOne.querySelector("img").src;
  let cardTwoImg = cardTwo.querySelector("img").src;
  areMatch(cardOneImg, cardTwoImg);


}

//two cards mathing 
function areMatch(img1, img2){
  console.log(img1, img2);
  if(img1 === img2){ 
    //makes them flip back over
    //cardOne.removeEventListener("click", flipCard);
    //cardTwo.removeEventListener("click", flipCard);

    if(img1 === "img0.png")
    {
      phoneNum.push(0);
    }
    if(img1 === "img1.png")
    {
      phoneNum.push(1);
    }
    if(img1 === "img2.png"){
      phoneNum.push(2);
    }
    if(img1 === "img3.png")
    {
      phoneNum.push(3);
    }
    if(img1 === "img4.png")
    {
      phoneNum.push(4);
    }
    if(img1 === "img5.png"){
      phoneNum.push(5);
    }
    if(img1 === "img6.png"){
      phoneNum.push(6);
    }
    if(img1 === "img7.png")
    {
      phoneNum.push(7);
    }
    if(img1 === "img8.png"){
      phoneNum.push(8);
    }
    if(img1 === "img9.png"){
      phoneNum.push(9);
    }
    cardOne = "";
    cardTwo = "";
    return noClick = true;
  }
  console.log("Cards do not match");

  setTimeout(() => {
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    cardOne = "";
    cardTwo = "";
    noClick = true;
  }, 1200);
}

//shuffle by name of image and shuffle an array 
function shuffleCard(){
  cardOne ="";
  cardTwo = "";
  noClick = false;
  cards.forEach(card => {
    card.classList.remove("flip");
    card.addEventListener("click",flipCard);
  });
}

shuffleCard();


// event listener to each card
cards.forEach(card => {
  card.addEventListener("click",flipCard);
});

btn.addEventListener("click", shuffleCard);


//check if phone number is done
/*if(phoneNum.length() === 9){
  console.log("Phone Number complete");
}
*/

//print number


// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

// const width = (canvas.width = window.innerWidth);
// const height = (canvas.height = window.innerHeight);

// class Ball {
//     constructor(x, y, color, size) {
//       this.x = x;
//       this.y = y;
//       this.color = color;
//       this.size = size;
//     }

//     draw() {
//         ctx.beginPath();
//         ctx.fillStyle = this.color;
//         ctx.rect(this.x, this.y, this.size, this.size);
//         ctx.fill();
//     }
    
// }

// const testBall = new Ball(50, 50, "green", 50);

//   const balls =[];
//   let x = 300;

//   while(balls.length < 10){
//     let ball = new Ball(x, 675, "blue", 50);
//     x += 100;
//     balls.push(ball);
//   }

//   for(let i = 0; i < balls.length; i++)
//   {
//     balls[i].draw();
//   }

//   testBall.draw();

// const newBtn = document.querySelector('#box1').addEventListener('click',print);
// const questionTxt = document.querySelector('#box1');

// function print() {
//    console.log("works");
//    questionTxt.textContent = "HELLO";
// }

//title with instructions 
//10 boxes 
//boxes move up across screen
//hover over box to reveal roman numerals - drop down box
// fill in boxes 
// button that locks in answers
// checks each box -> converts to numbers
// not your number? restart 


// add pop up box https://www.w3schools.com/howto/howto_css_modals.asp 