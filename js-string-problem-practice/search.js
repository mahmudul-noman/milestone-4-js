const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomay bolte parini';

const searchString = 'pakhi';
const doesExit = lyrics.includes(searchString);
console.log(doesExit);


// console.log(lyrics.indexOf('Tumina')); /**This line show the output: -1 */
// console.log(lyrics.indexOf('Tumi')); /** This line show the output; 0 */


// Search Using loop with indexof
if (lyrics.indexOf('bosonto') !== -1) {
    console.log ('This word find into this line');
}
else {
    console.log ('Cannot Find.');
}



// startsWith()
console.log (lyrics.startsWith('Tumi'));

// endsWith()
const fileName = 'project.js';
console.log (fileName.endsWith('.js'));