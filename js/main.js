//variables to get IDs in HTML
const header = document.getElementById('header');
const btnNext = document.getElementById('nextButton');
const description = document.getElementById('description');
const btnReturn = document.getElementById('returnButton');

//Event Listeners for buttons
btnNext.addEventListener('click', nextState);
btnReturn.addEventListener('click', initState)


//state is 0 to be initialized as the first state
let state = 0
// symbol for number nine is empty later to be changed with the random symbol function 
let nineSymbol = " ";


function randomSymbols() {
    //array of characters
    let character = ["!","@","#","$","%","&","*","~","?","+"];
    //
    let numAndSym = " ";
    
    nineSymbol = character[Math.floor(Math.random() * 10)];
  
    //iterates 100 times from 0 to 99
    for (let i = 0; i <= 99; i++) {
        if (i % 9 === 0) {
            //if i is a factor of 9 run this
            numAndSym += i + ": " + nineSymbol + "<br>";
        }
        else {
            // if i is not a factor of 9 put a random symbol at i
            numAndSym += i + ": " + character[Math.floor(Math.random() * 10)] + "<br>";
            }
        }
        return numAndSym;
    }

//function to increase state = state + 1
function nextState(){
    state++;
    newState();
   
}
//function return to state 0
function initState(){
     state=0
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
            description.innerHTML= " Ex. 14 is 1 + 4 = 5 <br> Click Next To Proceed";
            btnReturn;
            break;

        case 3:
            header.innerHTML= "Subtract Your New Number From The Original Number";
            btnNext.innerHTML= "Next"; 
            description.innerHTML= "Ex: 14 - 5 = 9 <br> Click Next To Proceed";
            btnReturn;
            break;

        case 4:
            //header//function for random array
            header.innerHTML = randomSymbols();
            btnNext.innerHTML= "Reveal"; 
            description.innerHTML= "Find Your New Number <br> Note the symbol besides the number";
            btnReturn;
            break;

        case 5:
            //header is factor of 9 symbol
            header.innerHTML= "<h3>your symbol is:<h3> <br>" + nineSymbol;
            description.innerHTML= " ";
            btnReturn;
            break;
    }
}
newState();


