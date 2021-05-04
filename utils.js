export function checkForYes(userInput) {
    const firstLetter = userInput[0].toLowerCase();

    return firstLetter === 'y';
}
//this function takes in a string and returns a boolean