console.log("I'm here");
// Classes are for styling in CSS
// "data attributes" are for JS
// data attributes always start with 'data-'


// 1 Make some code run when I click button
const triggerElement = document.querySelector("[data-trigger]");
const lyricsElement = document.querySelector("[data-lyrics]");
const outputTrigger = document.querySelector("[data-output-one]");
const outputLyrics = document.querySelector("[data-output-two]");
const triggerImage = document.querySelector("[data-output-one] img")
const fortunes = [
  {
    text: "You laugh now, wait till you get home",
    url: "images/adult-beard-cellphone-935993.jpg"
  },
  {
    text: "Fortune not found: About, Retry, Ignore?",
    url: "images/border-do-not-enter-door-2564.jpg"
  },
  {
    text: "About time I got out of that cookie.",
    url: "images/arrow-control-dark-845265.jpg"
  },
  {
    text: "Your resemblance to a muppet will prevent the world from taking you seriously",
    url: "images/detail-dolls-flowers-84505.jpg"
  },
  {
    text: "You will be hungry again in one hour",
    url: "images/beef-bread-bun-161675.jpg"
  }
];

const lyrics = [
  {
    text: "Dirty looks from your mother. Never seen you in a dress that color...",
    url: "images/angry-argument-breakup-984954.jpg"
  },
  {
    text: "Back off! I'll take you on. Headstrong, I'll take on anyone...",
    url: "images/adult-athlete-black-and-white-163403.jpg"
  },
  {
    text: "Tell me what you wanna do to me. Conversation a'int nothing new to me...",
    url: "images/africa-angry-animal-1106452.jpg"
  },
  {
    text: "I should be crying but I just can't let it show...",
    url: "images/black-and-white-body-crying-1414788.jpg"
  },
  {
    text: "I drive these brothers crazy. I do it on the daily...",
    url: "images/adult-beautiful-beauty-247298.jpg"
  }
]

let lyricsIndex = Math.floor(Math.random()*lyrics.length), triggerIndex = Math.floor(Math.random()*fortunes.length);


const allEvents = [
  {
    "selector": triggerElement,
    "output": outputTrigger,
    "array": fortunes,
    "index": triggerIndex
  },
  {
    "selector": lyricsElement,
    "output": outputLyrics,
    "array": lyrics,
    "index": lyricsIndex
  }
]


// function hello() {
//   console.log("Hello, addEventListener!");
// }

// addEventListener accepts mainly two arguments (technically it can accept a third)
// A. String that identifies the kind of event to listen for
// B. A callback function

function addAllEvents(arrEvents) {
    arrEvents.forEach(event => event.selector.addEventListener("click", () => {
      event.output.textContent = event.array[event.index].text;
      event.output.appendChild(document.createElement("img")).setAttribute("src", event.array[event.index].url);
      event.index = Math.floor(Math.random()*event.array.length);
    }));
}

addAllEvents(allEvents);
// lyricsElement.addEventListener("click", () => {
//   outputLyrics.textContent = lyrics[lyricsIndex];
//   lyricsIndex = Math.floor(Math.random()*lyrics.length);
// });
//
// triggerElement.addEventListener("click", () => {
//   outputTrigger.textContent = fortunes[triggerIndex].text;
//   outputTrigger.appendChild(document.createElement("img")).setAttribute("src", fortunes[triggerIndex].url);
//   // triggerImage.setAttribute("src", fortunes[triggerIndex].url);
//   triggerIndex = Math.floor(Math.random()*fortunes.length);
// });


// 2. Write some text to the page on button click (moved to top)


// 3. Pull text from an array of text to write to the page.
