'use strict';
import {
  displayFrench,
  displayItalian,
  displaySpanish,
  displayPortuguese,
  displayRomanian,
  dontShowRomanceContent,
} from './languageData/romLangs.js';

import {
  displaySlavicLangs,
  showSerb,
  showUkr,
  hideElements,
} from './languageData/slvcLangs.js';

export {
  spanishModal,
  romOpen,
  frenchModal,
  italianModal,
  portugueseModal,
  romanianModal,
  showFr,
  showSp,
  showIt,
  showPt,
  showRm,
  closeBtn,
  showCloseButton,
};

const start = document.querySelector('.game');
const noInput = document.querySelector('.message');
const inputField = document.querySelector('.yourNumber');
const alreadyCan = document.querySelector('.already');
const whichOne = document.querySelector('.check');
const bottom = document.querySelector('.bottom');
// !!! selecting modals and buttons !!!

// Spanish
const spanishModal = document.querySelector('.spanish-modal');
// const overlay = document.querySelector('.overlay');
const romOpen = document.querySelector('.rom-open');
const showSp = document.querySelector('.showSp');
// French
const frenchModal = document.querySelector('.french-modal');
const showFr = document.querySelector('.showFr');
// Italian
const italianModal = document.querySelector('.italian-modal');
const showIt = document.querySelector('.showIt');
// Portuguese
const portugueseModal = document.querySelector('.portuguese-modal');
const showPt = document.querySelector('.showPt');
// Romanian
const romanianModal = document.querySelector('.romanian-modal');
const showRm = document.querySelector('.showRm');

// Closing button selection
const closeBtn = document.querySelector('.close');

//---- selecting the four squares ----
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let forth = document.querySelector('.forth');

let playing = false;

const responses = {
  positiveAnswer: `Here are your options:`,
  anotherOption: `Try a different number. There are still plenty of options left.`,
};

// COLOR AND STYLE MANIPULATION

const langColors = {
  romance: '#ffa500',
  germanic: '#8cbef1',
  asian: '#c15c5c',
  slavic: '#000',
  indoIr: '#dcd73a',
  austronesian: '#3adcbc',
};

function changeColorBigButtons() {
  start.style.backgroundColor = langColors.romance;
  whichOne.style.backgroundColor = langColors.romance;
}

function squaresBackToBlack() {
  first.style.backgroundColor = '#000';
  second.style.backgroundColor = '#000';
  third.style.backgroundColor = '#000';
  forth.style.backgroundColor = '#000';
}

function showColdBlue() {
  document.querySelector(
    'body'
  ).style.backgroundColor = `${langColors.germanic}`;
  squaresBackToBlack();
  blackText();
}

function showOrange() {
  document.querySelector('body').style.background = `${langColors.romance}`;
  whiteText();
  squaresBackToBlack();
}

function showRed() {
  document.querySelector('body').style.backgroundColor = `${langColors.asian}`;
  blackText();
  squaresBackToBlack();
}

function showYellow() {
  document.querySelector('body').style.backgroundColor = `${langColors.indoIr}`;
  blackText();
  squaresBackToBlack();
}

function showCyan() {
  document.querySelector(
    'body'
  ).style.backgroundColor = `${langColors.austronesian}`;
  blackText();
  squaresBackToBlack();
}

function BlackNWhite() {
  // unique styling for slavic languages
  whiteText();
  document.querySelector('body').style.backgroundColor = `${langColors.slavic}`;
  first.style.backgroundColor = '#fff';
  second.style.backgroundColor = '#fff';
  third.style.backgroundColor = '#fff';
  forth.style.backgroundColor = '#fff';
}

// TEXT COLORS!
function blackText() {
  document.querySelector('body').style.color = '#000';
}

function whiteText() {
  document.querySelector('body').style.color = '#fff';
}

// MAIN FUNCTIONALITY STARTS HERE!
function displayMessage(message) {
  noInput.textContent = message;
  noInput.classList.remove('hidden');
}

const showCloseButton = function () {
  closeBtn.classList.remove('hidden');
};

start.addEventListener('click', function () {
  playing = true;
  const response = confirm(`Are you ready to start playing?`);
  if (response) {
    document.querySelector('body').style.backgroundColor = '#bc9fbc';
    inputField.style.backgroundColor = '#f69898';
    inputField.style.width = '15%';
    inputField.style.marginBottom = '10px';
    inputField.style.border = '3px solid rgb(0, 0, 0)';

    displayMessage(`You are all set. Input a number from 1 to 6.`);
  } else {
    displayMessage(`Come back when you are ready.`);
  }
});

whichOne.addEventListener('click', function () {
  if (playing) {
    const usersNum = Number(inputField.value);

    // Negative scenarios
    if (!usersNum || usersNum <= 0 || usersNum > 6) {
      displayMessage('You need to input a number from 1 to 6 🔢');
    }

    if (usersNum > 0 && usersNum <= 6) {
      noInput.classList.add('hidden');
    }

    // !Logic in terms of numbers starts here!
    if (usersNum === 3) {
      const answer = confirm(
        `Don't you dare to say that being fluent in those languages is easy! Romance languages?`
      );

      if (answer) {
        romOpen.classList.remove('hidden');
        showOrange();
        hideElements.dontShowSlavicContent();
        displayMessage(`${responses.positiveAnswer}`);
        changeColorBigButtons();
        displaySpanish();
        displayFrench();
        displayItalian();
        displayPortuguese();
        displayRomanian();
      } else {
        displayMessage(`${responses.anotherOption}`);
      }
    }

    if (usersNum === 2) {
      const answer = confirm(
        `Hard mode - but may not be as challenging as everything that comes after it - How about learning a Germanic language?`
      );

      answer
        ? (displayMessage(`${responses.positiveAnswer}`),
          dontShowRomanceContent(),
          hideElements.dontShowSlavicContent(),
          showColdBlue())
        : displayMessage(`${responses.anotherOption}`);
    }

    if (usersNum === 4) {
      const answer = confirm(`How about learning a Slavic language?`);

      answer
        ? (displayMessage(`${responses.positiveAnswer}`),
          BlackNWhite(),
          dontShowRomanceContent(),
          displaySlavicLangs())
        : displayMessage(`${responses.anotherOption}`);
    }

    if (usersNum === 5) {
      const answer = confirm(
        `Fancy a challenge? How about learning an Asian language?`
      );

      answer
        ? (displayMessage(`${responses.positiveAnswer}`),
          dontShowRomanceContent(),
          hideElements.dontShowSlavicContent(),
          showRed())
        : displayMessage(`${responses.anotherOption}`);
    }

    if (usersNum === 6) {
      const answer = confirm(`How about learning an Indo-Iranian language?`);

      answer
        ? (displayMessage(`${responses.positiveAnswer}`),
          dontShowRomanceContent(),
          hideElements.dontShowSlavicContent(),
          showYellow())
        : displayMessage(`${responses.anotherOption}`);
    }

    if (usersNum === 1) {
      const answer = confirm(
        `Would you like to find out more about Austronesian languages?`
      );

      answer
        ? (displayMessage(`${responses.positiveAnswer}`),
          dontShowRomanceContent(),
          hideElements.dontShowSlavicContent(),
          showCyan())
        : displayMessage(`${responses.anotherOption}`);
    }
  }
});

// COME BACK TO THIS WHEN YOU LEARN MORE
// first.style.width = '25px';
// first.style.height = '25px';
// second.style.width = '25px';
// second.style.height = '25px';
// third.style.width = '25px';
// third.style.height = '25px';
// forth.style.width = '25px';
// forth.style.height = '25px';
