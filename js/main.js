//variables to get IDs in HTML
const header = document.getElementById('header');
const btnNext = document.getElementById('nextButton');
const description = document.getElementById('description');
const btnReturn = document.getElementById('returnButton');

//Event Listeners for buttons

btnNext.addEventListener('click', nextState);
btnReturn.addEventListener('click', lastState)
//variable for state, random, character
let state = 0
let random = "";
let char = ["!","@","#","$","%","^","&","*","~","?","`","+"];


//function to generate a random number

//function to increase state = state + 1
function nextState(){
    state++
    newState();
   
    
}
//function decrease state = state -1
function lastState(){
    state--
    newState();
}


function newState(){

    switch (state){
        case 0:
            header.innerHTML = "I Can Read Your Mind";
            btnNext.innerHTML= "Start";
            description.innerHTML= " ";
            btnReturn;
            break;

        case 1:
            header.innerHTML= "Pick A Number From 01-99";
            btnNext.innerHTML= "Next";
            description.innerHTML= "When You have Your Number Click Next";
            btnReturn;
            break;

        case 2:
            header.innerHTML= "Add Both Digits Together To Get A New Number";
            btnNext.innerHTML= "Next"; 
            description.innerHTML= " Ex. 14 is 1 + 4 = 5 click next to proceed";
            btnReturn;
            break;

        case 3:
            header.innerHTML= "Subtract Your New Number From The Original Number";
            btnNext.innerHTML= "Next"; 
            description.innerHTML= "Ex: 14-5=9 click next to proceed";
            btnReturn;
            break;

        case 4:
            //header//function for random array
            header.innerHTML= " "
            btnNext.innerHTML= "Reveal"; 
            description.innerHTML= "Find Your New Number Note the symbol besides the number";
            btnReturn;
            break;

        case 5:
            //header="" //factor of 9 symbol
            header.innerHTML= " "
            btnNext;
            description.innerHTML= "your symbol is:";
            btnReturn;
            break;
    }
}
newState();
