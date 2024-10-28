/* eslint-disable max-len */
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

//const answer = prompt('Please, give me a number between 1 and 10: ');
//console.log(`Your number is: ${answer}`);

const easywords = ["fapfle", "fanfna", "fafz"];

const mediumwords = ["alaplap", "fékbetét", "marci"];

const hardwords = ["hármashatárhegy", "autószerelő", "számítógép"];


let word = ''
let hp = 0



function choose() {
    const answer = prompt('Welcome to Hangman! Please select a lvl: easy/medium/hard ')
    if (answer === "easy") {
        word = easywords[Math.floor(Math.random() * easywords.length)];
        hp = 6

    }
    else if (answer === "medium") {
        word = mediumwords[Math.floor(Math.random() * mediumwords.length)];
        hp = 5
    }
    else if (answer === "hard") {
        word = hardwords[Math.floor(Math.random() * hardwords.length)];
        hp = 4
    }

    let wordArray = Array(word.length).fill('_')
    let badArray = []
    console.log(`Your word is: ${wordArray}`)
    console.log(`Your hp is: ${hp}`)

    while (wordArray.includes('_') && hp > 0) {
        const guess = prompt('Guess any letter of the alphabet! ').toLowerCase()
        if (wordArray.includes(guess)) {
            console.log('Repetition! Please guess again')
            // continue;
        }

        if (word.includes(guess)) {
            for (let i = 0; i < word.length; i++) {
                if (guess === word[i]) {

                    if (i === 0) {
                        wordArray[i] = guess.toUpperCase();
                    } else {
                        wordArray[i] = guess;
                    }
                }
            }
        } else {

            if (badArray.includes(guess)) {
                console.log('Repetition! Please guess again! ')
                console.log(`${badArray}`)
            } else {
                badArray.push(guess)
                console.log(`Bad guess! ${badArray}`)
                hp += -1
                console.log(`Your HP is: ${hp}`)
            }
        }
        if (hp === 0) {
            console.log('OMG YOU LOST XD')
        } else if (!wordArray.includes('_')) {
            console.log('Congrats you won in life')
        }

        console.log(wordArray)
    }
}

choose()