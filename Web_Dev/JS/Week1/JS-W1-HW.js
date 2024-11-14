// Arrays of sentence fragments

const adjList = ["Whimsical", "Cockamimie", "Devious", "Nefarious", "Wibbly Wobbly"];
const nounList = ["Anglerfish", "Cat", "Bingle Bongle", "Goober", "Creature"];
const powerList = ["stupidity", "insanity", "hindsight", "being normal", "Time Travel"];
const missionList = ["explode", "eat a pear", "make a few strange noises", "go crazy", "be silly"];

// Create a function to generate a random superhero name and description
function generateHero() {
    const adj = adjList[Math.floor(Math.random() * adjList.length)];
    const noun = nounList[Math.floor(Math.random() * nounList.length)];
    const power = powerList[Math.floor(Math.random() * powerList.length)];
    const mission = missionList[Math.floor(Math.random() * missionList.length)];
    // Save the super hero name and description as variables
    const name = `${adj} ${noun}`;
    const desc = `Uses the power of ${power} to ${mission}.`;
    //Display the super hero name and description inside the DOM
    document.getElementById("hero-name").textContent = name;
    document.getElementById("hero-description").textContent = desc;
}   
    
// Add event listener to the button
document.getElementById("generate-button").addEventListener("click", generateHero);
