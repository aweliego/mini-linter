let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');

//If unnecessaryWords does not include the current word, you can return that word to the betterWords array:
const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

/* Other Method:
const betterWords = storyWords.filter(word => word !== 'extremely' && word !== 'literally' && word !== 'actually');*/

//How many times each overused word appears:
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of storyWords) {
  if (word === 'really') {
    reallyCount++;
  } else if (word === 'very') {
    veryCount++;
  } else if (word === 'basically') {
    basicallyCount++;
  }
}

//Lets the user know what's the TOTAL number of overused words:
let overusedWordsTotal = 0; //Alt -- let overusedWordsTotal = [];

for (let i = 0; i < overusedWords.length; i++) {
  for (let j = 0; j < betterWords.length; j++) {
    if (overusedWords[i] === betterWords[j]) {
      overusedWordsTotal += 1; //Alt -- overusedWordsTotal.push(overusedWords[i]);
    }
  }
}

//console.log(overusedWordsTotal); // Alt -- console.log(overusedWordsTotal.length);

/* Other Method to count total of overused words:
let countOverusedWords = storyWords.filter(x => overusedWords.includes(x)).length;*/


//Calculates how many sentences are in the paragraph by iterating over the array and adding 1 to a sentence counter variable for each word that has '.' or '!' as its final character:
let sentences = 0;

storyWords.forEach(word => {
  if (word.endsWith('.') || word.endsWith('!')) {
    sentences++;
  }
});

/*Other Method/syntax:
for (let i = 0; i < storyWords.length; i++) {
  if (word.endsWith('.') || word.endsWith('!')) {
    sentences++;
  }
}*/


/*Solution from Codecademy:
storyWords.forEach (word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences++;
  }
})*/



const logCount = (count1, count2, count3, count4, count5, count6) => {
  console.log(`This is the number of words in this paragraph: ${count1}`);
  console.log(`This is the number of sentences in this paragraph: ${count2}`);
  console.log(`There are ${count3} overused words in this paragraph: ${count4} times the word 'really', ${count5} times the word 'very' and ${count6} times the word 'basically'.`);
};

logCount(storyWords.length, sentences, overusedWordsTotal, reallyCount, veryCount, basicallyCount);

console.log(betterWords.join(' '));
