

const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);

// Options for the story
let option1 = `You find a mysterious old map hidden in a dusty book. Do you follow its directions?`;
let option22 = `After days of following this map, you find yourself at a crossroads where the map ends. Will you go left or right?`;
let option24 = `Left is the most common choice amongst adventurers when they are stuck in a bind. This one leads you to a field filled with the most beautiful flowers you have ever seen, inspiring you to go home to your family and create a life as beautiful as the field you saw that day.`;
let option2 = `You follow the right path, and it continues for miles, and miles... and miles... you notice that you have passed that tree 3... maybe 4 times. You feel your blood rush and instincts pull at you. Do you fight or embrace it?`;
let option25 = `You let the instincts wash over you, as you look up, you see a full moon in the distance, learning the heritage that has been kept from you. Losing yourself to the bloodlust as anger that accompanies the fur and teeth of a werewolf.`;
let option26 = `You fight the urge to hunt with every fiber of your being. As you look up, you see a full moon in the distance, learning the heritage that has been kept from you. Losing yourself to the bloodlust as anger that accompanies the fur and teeth of a werewolf.`;
let option4 = `Just touching the book causes a magical portal to appear before you. It pulls on your skin as it sucks you into its depths. What will you do? Fight/embrace?`;
let option27 = `Too bad, ${username}. You don't choose adventure; adventure chooses you!`;
let option28 = `Are you ready? yes/no `;
let option15 = `You embrace the portal's pull and are transported to a magical realm.`
// Prompts
const prompt1 = `left or right?`;
const prompt2 = `yes or no?`;
const prompt3 = `embrace or fight?`;

// Responses
const response1 = `left`;
const response2 = `right`;
const response3 = `yes`;
const response4 = `no`;
const response5 = `embrace`;
const response6 = `fight`;

console.log(`and ${username}, you are about to go on an adventure!`);
console.log(option28);
let answerReady = prompt(prompt2);

if (answerReady.toLowerCase() === response4) {
    console.log(`Too bad, ${username}. Adventure chooses you!`);
}

// Continue with the adventure regardless of the initial choice
console.log(`Great ${username}, let's get to it!`);
answerReady = prompt(option1);

if (answerReady.toLowerCase() === response3) {
    console.log(option22);
    answerReady = prompt(prompt1);
    if (answerReady.toLowerCase() === response1) {
        console.log(option24);
    } else if (answerReady.toLowerCase() === response2) {
        console.log(option2);
        answerReady = prompt(prompt3);
        if (answerReady.toLowerCase() === response5) {
            console.log(option25);
        } else {
            console.log(option26);
        }
    }
} else if (answerReady.toLowerCase() === response4) {
    console.log(option4);
    answerReady = prompt(prompt3);
    if (answerReady.toLowerCase() === response5) {
        console.log(option15);
    } else if (answerReady.toLowerCase() === response6) {
        console.log(`You fight the portal's pull, but it’s too strong. You’re sucked in and transported to a different world.`);
    }
} else {
    console.log(`You see Helgor, the Famous Dragon who only eats people who make poor decisions. And he is on his way to you for his next meal!`);
}
