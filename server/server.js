/* Import path and fs */
const path = require('path');
const fs = require('fs');
/* Create array of chirp objects */
var chirp = [
    {   username:  "Marg",
        message:    "Excellence is a quality that I aspire to achieve"},
    {
        Username:   "Mary",
        message:    "A bird in the hand saves nine"},
    {   
        username:   "James",
        message:    "Life is too important to waste"},
    {
        username:   "Tony",
        message:    "Live each day as if it is your last"},
    {
        username:   "John",
        message:    "Think only on those things that are beneficial to your advancement"},
];

/* Write array to a file */
const chirps = chirp.map(JSON.stringify).reduce((prev, next) => `${prev}\n${next}`);
fs.writeFile('./chirps.json', 'chirp.username, chirp.message', (err) => {
    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {
        console.log("File Written Successfully");
        console.log(chirps.json);
        console.log(fs.readFileSync("chirps.json", "utf8"));
}
})
