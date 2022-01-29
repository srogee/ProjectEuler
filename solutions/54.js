const fs = require('fs');
const path = require('path');
const { Utils } = require("../common");
const _ = require('lodash');

function getCardValue(vard) {
    return card[0];
}

function getCardSuit(card) {
    return card[1];
}

function getCardRank(card) {
    switch(getCardType(card)) {
        case '2': return 1;
        case '3': return 2;
        case '4': return 3;
        case '5': return 4;
        case '6': return 5;
        case '7': return 6;
        case '8': return 7;
        case '9': return 8;
        case 'T': return 9;
        case 'J': return 10;
        case 'Q': return 11;
        case 'K': return 12;
        case 'A': return 13;
        default: throw `Bad card ${card}`;
    }
}

function areCardsConsecutive(hand) {

}

function getHandRank(hand) {
    const allValues = Utils.removeDuplicatesFromArray(hand.map(card => getCardValue(card)));
    const allSuits = Utils.removeDuplicatesFromArray(hand.map(card => getCardSuit(card)));
    const sortedValues = 
    
    if (allSuits.length === 1) {
        if (Utils.areArraysEqualIgnoringOrder(allValues, ['T', 'J', 'Q', 'K', 'A'])) {
            return 10; // Royal flush
        } else if ()
    }
    if ()
    else {
        return 1; // High card
    }
}

function getWinner(hand1, hand2) {
    console.log(hand1);
    return 1;
}

const hands = fs.readFileSync(path.join(__dirname, 'p054_poker.txt'), { encoding: 'utf-8' }).split(/[\r\n]+/g);
let sum = 0;
for (const line of hands) {
    const cards = line.split(' ');
    if (cards.length === 10) {
        const winner = getWinner([cards[0], cards[1], cards[2], cards[3], cards[4]], [cards[5], cards[6], cards[7], cards[8], cards[9]]);
        if (winner === 1) {
            sum++;
        }
    }
}

console.log(`Player 1 won ${sum} hands`);