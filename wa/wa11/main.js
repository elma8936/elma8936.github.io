const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgArray =['pic1.jpeg', 'pic2.jpeg', 'pic3.jpeg', 'pic4.jpeg', 'pic5.jpeg'];

/* Declaring the alternative text for each image file */

var altDict ={
    'pic1.jpeg' : "bluebonnet",
    'pic2.jpeg': "pecan tree",
    'pic3.jpeg': "flatirons", 
    'pic4.jpeg': "river",
    'pic5.jpeg' : "lake",
}

/* Looping through images */

for(img of imgArray){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', img);
    newImage.setAttribute('alt', altDict[img]);
    thumbBar.appendChild(newImage);
    
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt; 
    })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if(btn.getAttribute("class") === "dark"){
        btn.setAttribute("class", "light"); 
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute("class", "dark"); 
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})
