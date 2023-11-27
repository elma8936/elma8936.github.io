const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerBtn = document.querySelector('#js-tweet').addEventListener('click', getImage);

const questionTxt = document.querySelector('#js-quote-text');
let answerTxt = document.querySelector('#js-answer-text');


const endpoint = 'https://catfact.ninja/fact';

async function getQuote() {

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        
        displayQuote(json['fact']);
        console.log(json);
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(question) {
    questionTxt.textContent = question;
}


getQuote();

const endpoint2 = 'https://dog.ceo/api/breeds/image/random';

async function getImage() {

    try {
        const response = await fetch(endpoint2);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        
        console.log(json);
        displayImage(json['message']);
        
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new image');
    }
}

function displayImage(image)
{
    answerTxt.textContent = image;

}

//getImage();


   