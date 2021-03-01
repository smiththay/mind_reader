# Objective
- To go from state to state (1 to 6) with buttons that function to render views. Create a random array of symbols that are assigned to integers where all factors of nine from 1-99 have the same symbol assigned to them. 
 
 # variables and objects
 1. init()
 2. set default state
 3. render()
 4. respond ie. event listeners (click handlers)

//similar to a like button on facebook


 - one default page that can be rendered into 6 states
 - one button that can function as a start button then renders to a back button. When on last page, back button goes to default page.
 - one button that functions as a next button ( 2-4), then becomes a reveal button on (5). 
 - Header will have text that change between states
 - descriptions will change between states

 # start

 // possibly use a switch statement
# init 

Create array of symbols
create array of numbers related to nine
// to get random number from array 
    - var item = items[Math.floor(Math.random() * items.length)];
    for(let 1 = 0; i = arr.length; i++)
        if (arr[i] is factor of 9)
        let i be = to specific symbol
        else
        assign random number to random symbol
        
create event listeners for 
    button 1: (click, render next state)
    button 2 :(click render previoous state)

create function to go to next state
state++
create function to go to previous state
state--

function render state
 switch(state){
     case "state 1" "default": 
        header = "I can read your mind"
        description = null
        button1 = go = render state 2
        button2 = null

     case "state 2":
        header= "Pick a number from 01-99"
        description = "when you have your number click  next"
        button1 = back = render state 1
        button2 = next = render state 3

     case "state 3":
        header= "Add both digits together to get a new number"
        description = "Ex: 14 is 1 + 4 =5 /click next to proceed"
        button1 = back = render state 2
        button2 = next = render state 4
    
     case "state 4":
        header= "Subtract your new number from the original number"
        description = "Ex: 14 - 5=9/ click next to proceed"
        button1 = back = render state 3
        button2 = next = render state 5

     case "state 5":
        header= display function that random assigns function to symbol where all factors of 9 have the same number
        description = "Find your new number/ Note the symbol besides the number"
        button1 = back = render state 4
        button2 = reveal = render state 6

     case "state 6":
        header= "Symbol related to factor of 9
        description = "Your symbol is:' ' "
        button1 = back = render to default 
        button2 = null

     default:
        render "state 1"
 }