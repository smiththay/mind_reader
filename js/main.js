//variables to get IDs in HTML
const header = document.getElementById('header');
const btnNext = document.getElementById('nextButton');
const description = document.getElementById('description');
const btnReturn = document.getElementById('returnButton');

let state = 1
let symbols = []


console.log(header)
//event listeners for the 'next button' and 'return button'
btnNext.addEventListener('click', nextState);
btnReturn.addEventListener('click', previousState);

//function to render to next state
function nextState(){
 state++
}

//function to render to previous state
function previousState(){
  state--

}

//function to generate random 


//switch statements to create 6 states
function (changeState){
    switch(state){
        case 1:
            header = header.innerHTML = "I Can Read Your Mind";
            btnNext="Start"
            description=""
            btnReturn=
            break;

        case 2:
            header= header.innerHTML= "Pick A Number From 01-99"
            btnNext=
            description=
            btnReturn=
            break;

        case 3:
            header= header.innerHTML= "Add Both Digits Together To Get A New Number"
            btnNext=
            description=
            btnReturn=
            break;

        case 4:
            header= header.innerHTML= "Subtract Your New Number From The Original Number"
            btnNext=
            description=
            btnReturn=
            break;

        case 5:
            header= //funtion for random array
            btnNext=
            description=
            btnReturn=
            break;

        case 6:
            header= //factor of 9 symbol
            btnNext=
            description=
            btnReturn=
            break;
    }
}