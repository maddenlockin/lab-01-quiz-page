// import functions and grab DOM elements
import { checkForYes } from './utils.js';

const button = document.getElementById('button');
const resultsDiv = document.getElementById('results-div');
console.log('results div', resultsDiv);

// initialize state

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    console.log('x');

    alert('Corals Quiz... are you ready?');

    const wantsQuiz = confirm('ready to be quizzed?');
    console.log('wants quiz', wantsQuiz);

    if (wantsQuiz === false) {
        return;
    }

    const firstName = prompt('What is your name?');
    console.log('first name', firstName);

    const answer1 = prompt('Can corals catch fish?');

    let score = 0;

    if (checkForYes(answer1)) {
        score = score + 1;
    }

    const answer2 = prompt('Do baby coral, planulae, form new colonies away from their parent colony? ');

    if (checkForYes(answer2)) {
        score = score + 1;
    }
    const answer3 = prompt('Are there 2 categorical anatomic variations for corals?');

    if (checkForYes(answer3)) {
        score = score + 1;
    }

    resultsDiv.textContent = `Hey ${firstName}! You got ${score} out of 3!`;
});