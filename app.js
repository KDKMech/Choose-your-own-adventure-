// README::: I generated this adventure using 'if/else if/else' statements.
// I did all code by hand with the exception of the AI "microsoft copilot"
// helping me create some ideas when it comes to a fantasy story. 








const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);



//options for me to organize the code moving forward. This is also brainstorming for me as I build more of the story, some may not get used but I was just brainstorming

let option1 = `You find a mysterious old map hidden in a dusty book. Do you follow its directions?`;
let option2 =`You follow the right path, and it continues for miles, and miles... and miles... you notice that you have passed that tree 3... maybe 4 times. you feel your blood rush and instincts pull at you. do ou fight or embrace it?  `;
let option3 = `You stumble upon a hidden village of elves. Do you choose to interact with them?`;
let option4 = ` just touching the book causes a magical portal appears before you. It pulls on your skin as it sucks you into its depths. what will you do? fight/embrace?`;
let option5 = `You come across a forbidden spell book. Do you decide to read it?`;
let option6 = `You find an enchanted sword embedded in a stone. Do you try to pull it out?`;
let option7 = `A talking tree offers you a quest. Do you accept?`;
let option8 = `You encounter a band of thieves planning a heist. Do you join them?`;
let option9 = `An ancient, magical artifact is said to be hidden in a cave. Do you seek it out?`;
let option10 = `A mysterious figure offers to teach you forbidden magic. Do you agree?`;
let option11 = `You find yourself in a labyrinth. Do you navigate it?`;
let option12 = `A wise old wizard asks for your help in a dangerous mission. Do you help him?`;
let option13 = `You discover a hidden underwater city. Do you explore it?`;
let option14 = `A mystical creature offers to guide you on your journey. Do you trust it?`;
let option15 = `You find a potion that claims to grant immortality. Do you drink it?`;
let option16 = `A haunted mansion appears on the horizon. Do you dare to enter?`;
let option17 = `A powerful sorcerer challenges you to a duel. Do you accept?`;
let option18 = `You come across a cursed item that could bring great power. Do you take it?`;
let option19 = `A hidden passageway in the castle leads to an unknown realm. Do you enter?`;
let option20 = `A genie offers you three wishes. Do you make a wish?`;
let option21 = `A ghostly ship appears out of the mist. Do you board it?`;
let option22 = `After days of following this map, you find yourself at a crossroads where the map ends. Will you go left or right?`
let option23 = `Great ${username} let's get to it!`
let option24 = `Left is the most common choice amongst adventurers when they are stuck in a bind. This one leads you to a field filled with the most beautiful flowers you have ever seen, inspiring you to go home to your family and create a life as beautiful as the field you saw that day.`
let option25 = `you let the instincts wash over you, as you look up, you see a full moon in the distace, learning the heritage that has been kept from you. Losing your self to the bloodlust as anger that accompanies the fur and teeth of a warewolf.`
let option26 = `you fight the urge to hunt with every fiber of your being. As you look up, you see a full moon in the distace, learning the heritage that has been kept from you. Losing your self to the bloodlust as anger that accompanies the fur and teeth of a warewolf. `
let option27 = `Too bad, ${username}. You don't choose adventure; adventure chooses you!`

//this allows me to keep cleen code with the functions

//prompts
let prompt1 = `left or right?  `
let prompt2 = `yes or no?  `
let prompt3 = `embrace or fight?  `

//responses
let response1 = `left`
let response2 = `right`
let response3 = `yes`
let response4 = `no`
let response5 = `embrace`
let response6 = `fight`

console.log(`and ${username} you are about to go on an adventure! `)

 let answerReady = prompt(`Are you ready? yes/no `); //this is for anything the user inputs


if (answerReady.toLowerCase() === response3) {
    console.log(option23);
    answerReady = prompt(option1);
    if (answerReady.toLowerCase() === response3) {
        console.log(option22);
        answerReady = prompt(prompt1);//complete path
        if (answerReady.toLowerCase() === response1) {
            console.log(option24); //complete path
        } else if (answerReady.toLowerCase() === response2) {
            console.log(option2);//complete path
                 answerReady = prompt(prompt3)
                 if (answerReady.toLowerCase() === response5)
                    console.log(option25)//complete path.
                else {
                    console.log(option26)//complete path.
                }
    } else if (answerReady.toLowerCase() === response4) {
        console.log(option4)
        answerReady = prompt(prompt3);
        if (answerReady.toLowerCase() === response5) {
            console.log()
        } } else {
        console.log(`Please choose yes or no.`);
    }
} else if (answerReady.toLowerCase() === `no`) {
    console.log(``);
} else {
    console.log(`You see Helgor, the Famous Dragon who only eats people who make poor decisions. And he is on his way to you for his next meal!`);
    answerReady = prompt(`What will you do? Fight/Run/Something else since you can't follow simple instructions?`);
}
} 