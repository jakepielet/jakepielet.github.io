const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array)
{
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

let storyText = "It was 56 fahrenheit outside, so :insertx: decided to go outside for once. When they got to :inserty:, they T-posed to assert dominance, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: was carrying a 400-pound pickle, it was just an average day.";

let insertX = ["James Pielet", "Michael Jordan", "Eldrick Tiger Woods"];
let insertY = ["Golf Course", "The Club", "The Resturant"];
let insertZ = ["Walked the Dog", "Became incoharent", "Jumped into the clouds"];

function result()
{
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

    if(customName.value !== '') 
    {
        const name = customName.value;
        newStory = newStory.replaceAll("Bob", name);
    }
    if(document.getElementById("uk").checked) 
    {
        const weight = `${Math.round(300*0.0714286)} stone`;
        const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
        newStory = newStory.replaceAll("56 fahrenheit", temperature);
        newStory = newStory.replaceAll("400-pound", weight);
    }
    story.textContent = newStory;
    story.style.visibility = 'visible';
}

randomize.addEventListener("click", result);