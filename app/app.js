// Select the textarea element on the webpage.
const textAreaEl = document.querySelector(".textarea");

// Select all elements with class "stat__number" on the webpage.
const statElements = document.querySelectorAll(".stat__number");

// Select the element with class "footer__data" on the webpage.
const dateData = document.querySelector(".footer__data");

// Function to check for errors (e.g., negative character count) and update a stat element's class.
const errorCheck = (stat, characterCount) => {
  if (characterCount < 0) {
    stat.classList.add("error");
  } else {
    stat.classList.remove("error");
  }
};

// Function to count and update a stat element with the number of words in the textarea.
const wordCounter = (stat, word) => {
  stat.textContent = word.length;
};

// Function to count and update a stat element with the number of characters in the textarea.
const characterCounter = (stat, character) => {
  stat.textContent = character.length;
};

// Function to count remaining characters for Facebook and update a stat element.
const facebookCounter = (stat, character) => {
  const facebookMaxCharacter = 63206;
  const remainingFacebookCharacters = facebookMaxCharacter - character.length;

  // Check for errors and update the stat element.
  errorCheck(stat, remainingFacebookCharacters);
  stat.textContent = remainingFacebookCharacters;
};

// Function to count remaining characters for Twitter and update a stat element.
const twitterCounter = (stat, character) => {
  const twitterMaxCharacter = 280;
  const remainingTwitterCharacters = twitterMaxCharacter - character.length;

  // Check for errors and update the stat element.
  errorCheck(stat, remainingTwitterCharacters);
  stat.textContent = remainingTwitterCharacters;
};

// Add an event listener to the textarea for input changes.
textAreaEl.addEventListener("input", () => {
  // Get the text input from the textarea.
  const userTextInput = textAreaEl.value;

  // Split the input text into an array of words.
  const userTextWords = userTextInput.split(" ");

  // Iterate through stat elements and update them based on their class names.
  statElements.forEach((statEl) => {
    if (statEl.className.includes("words")) {
      wordCounter(statEl, userTextWords);
    } else if (statEl.className.includes("characters")) {
      characterCounter(statEl, userTextInput);
    } else if (statEl.className.includes("facebook")) {
      facebookCounter(statEl, userTextInput);
    } else {
      twitterCounter(statEl, userTextInput);
    }
  });
});

// Function to get the current date and time and set it in the "dateData" element.
const getCurrentDate = () => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Create a formatted date string.
  const currentDate = `${day}-${month}-${year}, ${hours}-${minutes}`;

  return currentDate;
};

// Update the "dateData" element with the last checked date and time.
dateData.textContent = `Last checked: ${getCurrentDate()}`;
