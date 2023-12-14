const card = document.querySelectorAll(".card");
const btn = document.querySelector(".button");
let phoneNumerTxt = document.querySelector('#phoneNumberTxt'); 
let submitBtn = document.querySelector(".submit");

card.forEach(card => {
    card.addEventListener("click", flipCard);
});

btn.addEventListener("click", shuffleCards);

submitBtn.addEventListener("click", submit)

let flippedCards = 0;
let firstCard;
let secondCard;

function flipCard(){
    if(phoneNumerTxt.textContent.length === 16){
        submit();
        return;
    }
    if(flippedCards === 0){
        firstCard = this;
        flippedCards += 1;
        firstCard.classList.toggle("flipCard");
    }
    else{
        secondCard = this;
        secondCard.classList.toggle("flipCard");
        if(firstCard.getElementsByClassName("back")[0].textContent === secondCard.getElementsByClassName("back")[0].textContent){
            if(phoneNumberTxt.textContent.length === 3 ||  phoneNumberTxt.textContent.length === 9){
                phoneNumberTxt.textContent += " - ";
              }
            phoneNumerTxt.textContent += firstCard.getElementsByClassName("back")[0].textContent;
            console.log("match!");
            setTimeout(() => {
                firstCard.classList.toggle("flipCard");
                secondCard.classList.toggle("flipCard");
            }, 1000);
            // setTimeout(() => {
            //     shuffleCards();
            // }, 1700);
        }
        else{
            console.log("not a mactch");
            setTimeout(() => {
                firstCard.classList.toggle("flipCard");
                secondCard.classList.toggle("flipCard");
            }, 1000);
        }
        flippedCards = 0;
    }
}

function shuffleCards(){
    console.log("Shuffle");
    let arr = [];
    let i = 0;
    while(arr.length < 10 ){
        let num = random(0, 9);
        while(arr.includes(num))
        {
            num = random(0, 9);
        }
        arr[i] = num;
        i++;
    }
    let arr2 = [];
    let j = 0;
    while(arr2.length < 10 ){
        let num = random(0, 9);
        while(arr2.includes(num))
        {
            num = random(0, 9);
        }
        arr2[j] = num;
        j++;
    }
    let arr3 = arr.concat(arr2);
    //ADD: for each card??
    let count = 0;
    card.forEach(card => {
        card.getElementsByClassName("back")[0].textContent = arr3[count];
        count ++;
    });
    phoneNumerTxt.textContent = "";
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

shuffleCards();



