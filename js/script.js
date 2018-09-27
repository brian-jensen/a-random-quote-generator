/* jshint esversion: 6 */

const loadQuote = document.querySelector('#loadQuote');
let timer;

/**
 * @type {array} quotes - An array of quote objects.
 * @typedef {Object}
 * @property {string} quote - A string containing the text of the quote that will be displayed on the page.
 * @property {string} source - A string containing the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb” or "Anonymous".
 * @property {string} [citation] - optional - A string identifying where the quote comes from, like a speech, publication or a movie.
 * @property {number} [year] - optional - A number identifying the year of the quote.
 * @property {string} category - A string containing the category the quote belongs in. For example: "Inspirational", "Computer Science", or "Programming".
 * @property {string} background - A string containing the background color of the quote when displayed on the page.
 */
const quotes = [
  {
    quote: "In '51 I had a running compiler and nobody would touch it, because, they carefully told me, computers could only do arithmetic, they could not write programs.",
    source: "Grace Hopper",
    citation: "The New York Times",
    year: 1986,
    category: "Programming",
    background: "#107896"
  },
  {
    quote: "Computers are magnificent tools for the realization of our dreams, but no machine can replace the human spark of spirit, compassion, love, and understanding.",
    source: "Louis V. Gerstner, Jr",
    category: "Computer Science",
    background: "#093145"
  },
  {
    quote: "Each new program that is built is an experiment. It poses a question to nature, and its behavior offers clues to an answer.",
    source: "Allen Newell",
    citation: "Computer Science as Empirical Inquiry",
    year: 1975,
    category: "Programming",
    background: "#829356"
  },
  {
    quote: "The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform.",
    source: "Ada Lovelace",
    category: "Computer Science",
    background: "#c2571a"
  },
  {
    quote: "Controlling complexity is the essence of computer programming.",
    source: "Brian Kernigan",
    category: "Programming",
    background: "#9a2617"
  },
  {
    quote: "Should array indices start at 0 or 1?  My compromise of 0.5 was rejected without, I thought, proper consideration.",
    source: "Stan Kelly-Bootle",
    category: "Programming Humor",
    background: "#551a8b"
  },
  {
    quote: "I’ve finally learned what 'upward compatible' means. It means we get to keep all our old mistakes.",
    source: "Dennie van Tassel",
    category: "Programming Humor",
    background: "#8b1a89"
  },
  {
    quote: "Perhaps the most important principle for the good algorithm designer is to refuse to be content.",
    source: "Alfred V. Aho",
    category: "Programming",
    background: "#8b551a"
  },
  {
    quote: "We can think of life as a self-replicating information-processing system whose information (software) determines both its behavior and the blueprints for its hardware.",
    source: "Max Tegmark",
    citation: "Life 3.0: Being Human in the Age of A.I.",
    category: "Computer Science",
    background: "#222"
  },
  {
    quote: "The day we fret about the future is the day we leave our childhood behind.",
    source: "Patrick Rothfuss",
    citation: "Name of the Wind",
    year: 2007,
    category: "Literary Quote",
    background: "#03A678"
  },
  {
    quote: "The desire for knowledge shapes a man.",
    source: "Patrick Rothfuss",
    citation: "The Wise Man's Fear",
    year: 2011,
    category: "Literary Quote",
    background: "#002a2a"
  },
  {
    quote: "Somebody has to start. Somebody has to step forward and do what is right, because it is right.",
    source: "Brandon Sanderson",
    citation: "The Way of Kings",
    year: 2010,
    category: "Literary Quote",
    background: "#d25299"
  },
  {
    quote: "This world, it is a tempest sometimes. But remember, the sun always rises again.",
    source: "Brandon Sanderson",
    citation: "The Way of Kings",
    year: 2010,
    category: "Literary Quote",
    background: "#5e50b5"
  },
  {
    quote: "The oak fought the wind and was broken, the willow bent when it must and survived.",
    source: "Robert Jordan",
    citation: "The Fires of Heaven",
    year: 1993,
    category: "Literary Quote",
    background: "#2a002a"
  },
  {
    quote: "With the new day comes new strength and new thoughts.",
    source: "Eleanor Roosevelt",
    category: "Inspirational",
    background: "#aa2e00"
  },
  {
    quote: "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",
    source: "Maya Angelou",
    category: "Inspirational",
    background: "#aa5535"
  },
  {
    quote: "The things you do for yourself are gone when you are gone, but the things you do for others remain as your legacy.",
    source: "Kalu Ndukwe Kalu",
    category: "Inspirational",
    background: "#5c0819"
  },
  {
    quote: "You have power over your mind - not outside events. Realize this, and you will find strength.",
    source: "Marcus Aurelius",
    category: "Inspirational",
    background: "#803224"
  },
  {
    quote: "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.",
    source: "Gautama Buddha",
    category: "Inspirational",
    background: "#2a2400"
  },
  {
    quote: "We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are.",
    source: "J.K. Rowling",
    citation: "Harry Potter and the Order of the Phoenix",
    year: 2003,
    category: "Literary Quote",
    background: "#36bacc"
  },
];

/**
* Pulls random quote from quotes array 
* @param {array} array - Receives an array of objects. 
* @returns {Object} A single random object from the array.
*/
const getRandomQuote = array => {
  const randomQuote = array[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
};


/** @function Injects random quote object into HTML DOM */
const printQuote = () => {
  // Gets random quote from quotes array.
  const newQuote = getRandomQuote(quotes);
  const quote = document.querySelector('.quote');
  const source = document.querySelector('.source');
  const body = document.querySelector('body');
  const categorySpan = document.createElement("span");

  body.style.backgroundColor = newQuote.background;
  loadQuote.style.backgroundColor = newQuote.background;
  quote.textContent = newQuote.quote;
  source.textContent = newQuote.source;

  // Checks object for optional property "citation" and appends it to HTML DOM if found.
  if (newQuote.hasOwnProperty('citation')) {
    const citationSpan = document.createElement("span");
    citationSpan.className = "citation";
    source.appendChild(citationSpan).textContent = newQuote.citation;
  }
  // Checks object for optional property "year" and appends it to HTML DOM if found.
  if (newQuote.hasOwnProperty('year')) {
    const yearSpan = document.createElement("span");
    yearSpan.className = "year";
    source.appendChild(yearSpan).textContent = newQuote.year;
  }

  categorySpan.className = "category";
  source.appendChild(categorySpan).textContent = newQuote.category;

};

/**
* @function Sets repeating 15 second timer to call printQuote() function.
* @returns {number} timer as a global number variable.
*/
const setTimer = () => {
  timer = setInterval(printQuote, 15000);
  return timer;
};

// Starts the 15 second timer
setTimer();

/* 
 * Sets click event handler on the "Show another quote" button.
 * Sets the timer variable to 0.
 * Calls printQuote() function to inject new random quote into the HTML DOM.
 * Starts new 15 second timer. 
*/
loadQuote.addEventListener("click", () => {
  clearInterval(timer);
  printQuote();
  setTimer();
});
