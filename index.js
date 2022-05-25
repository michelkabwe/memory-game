
import {cardList} from './cards.js'

console.log(cardList)

cardList.sort(() => 0.5 - Math.random()); //sorts the cards from cardLists randomly
 
const grid = document.querySelector('.gameGrid')
const attempstHolder = document.querySelector('.attemptsHolder');
const foundHolder = document.querySelector('.foundHolder');
const cardsInGame = 10;

let attempts = 0; 
let foundCards = 0;
foundHolder.textContent = foundCards;
attempstHolder.textContent = attempts;


let chosenCards = [];     //Empty array that will contain chosen cards
let chosenCardsIds = [];  //Also the chosenCards ids tothe chosen card

function initiateBoard(){ //Function to create the board, card, loops through cardList object...
    console.log( 'iniateee')
        cardList.forEach((element,i) => { 
        let card = document.createElement('img');
        card.setAttribute('src','images/placeholder.png'); 
        console.log(card)
        card.setAttribute('id',i);  //set id as id and i (index to loop over)
        card.addEventListener('click', flipCard) //adds a cick event on each card item + flipcard function 
        grid.appendChild(card); // card appended to grid (.gameGrid) html element
        console.log(element)
    })
    
}
initiateBoard(); //run this the function..
    function flipCard(){  // the actul function to flip each card
        console.log( 'flip card')
        if(chosenCards.length != 2) { //disables click while two cards are already up..
        let cardId = this.getAttribute('id'); //variabel of the card ID that has been clicked
        if(this.getAttribute('src') != 'images/blank.png'){//if source is not blank push to chosencards + chosendCarddID ''cardid''
            chosenCards.push(cardList[cardId].name); //to know the chosen card
            chosenCardsIds.push(cardId); //
            this.setAttribute('src', cardList[cardId].images)// flip the card ,by replacing the source  cardlist cardid + image
            if(chosenCards.length == 2){ //check for a matchMedia, if have there's two items that matches eahother..
            setTimeout(checkForMatch, 700);
            }
        }
    } 
}

function checkForMatch(){
    console.log( 'check for match')
    attempts++;
    let cards = document.querySelectorAll('img');
    let firstCard = chosenCardsIds[0]; //check 1st card amgong the ideas
    let secondCard = chosenCardsIds[1];
    if(chosenCards[0] == chosenCards[1]){ // checks if id's they're equal
        foundCards++;  //match  and increment
        cards[firstCard].classList.add('square');

        cards[secondCard].setAttribute('src','images/blank.png') // -- // -- second card
    }else{
        //else if there no match set it back to the placeholder...
        cards[firstCard].setAttribute('src','images/placeholder.png')
        cards[secondCard].setAttribute('src','images/placeholder.png')

    }
    chosenCards = [];  // when flipping again clear the chosen cards + ids
    chosenCardsIds = [];
    attempstHolder.textContent = attempts;
    foundHolder.textContent = foundCards;
    if(foundCards == cardsInGame){
        alert('well done!')
    }
}


const number = [1,2,3,4,5,6];

const sum = number.reduce ((x,e) => {
    return x + e
},0)
console.log(sum)