'use strict';
export { displaySlavicLangs, showSerb, showUkr, showCloseButton, hideElements };

import { closeBtn, showCloseButton } from '../script.js';
import { template } from './romLangs.js';

const slvOpen = document.querySelector('.slv-open');
// selecting buttons
const showUkr = document.querySelector('.showUkr');
const showRu = document.querySelector('.showRu');
const showPol = document.querySelector('.showPol');
const showSerb = document.querySelector('.showSerb');
const showCz = document.querySelector('.showCz');

// selecting modal windows

const ukrModal = document.querySelector('.ukrainian-modal');
const ruModal = document.querySelector('.russian-modal');
const polModal = document.querySelector('.polish-modal');
const serbModal = document.querySelector('.serbian-modal');
const czModal = document.querySelector('.czech-modal');

const hideElements = {
  closeThemAll: function () {
    closeBtn.addEventListener('click', function () {
      ukrModal.classList.add('hidden');
      ruModal.classList.add('hidden');
      polModal.classList.add('hidden');
      serbModal.classList.add('hidden');
      czModal.classList.add('hidden');
    });
  },

  dontShowSlavicContent: function () {
    slvOpen.classList.add('hidden');
  },
};

const ukranianFacts = {
  lang: 'Ukrainian',
  numSpeakers: 40,
  countries: 'Ukraine',
  popularity: '26th',

  displayUkr: function () {
    ukrModal.textContent = `${this.lang} is spoken by ${this.numSpeakers} million speakers. ${template} ${this.countries}. It is a ${this.popularity} most spoken language in the world!`;
  },

  hideOthers: function () {
    serbModal.classList.add('hidden');
    ruModal.classList.add('hidden');
    polModal.classList.add('hidden');
    czModal.classList.add('hidden');
  },
};

const russianFacts = {
  lang: 'Russian',
  numSpeakers: 258,
  countries:
    'Russia, Ukraine, Kyrgystan, Kasakhstan, Belarus, Azerbaijan, Estonia, Georgia, Latvia, Lithuania, Moldova, Tajikistan, Turkmenistan and Uzbekistan',
  popularity: '8th',

  displayRu: function () {
    ruModal.textContent = `${this.lang} is spoken by ${this.numSpeakers} million speakers. ${template} ${this.countries}. It is a ${this.popularity} most spoken language in the world!`;
  },

  hideOthers: function () {
    serbModal.classList.add('hidden');
    ukrModal.classList.add('hidden');
    polModal.classList.add('hidden');
    czModal.classList.add('hidden');
  },
};

const polishFacts = {
  lang: 'Polish',
  numSpeakers: 51,
  countries: 'Poland',
  popularity: '24th',

  displayPol: function () {
    polModal.textContent = `${this.lang} is spoken by ${this.numSpeakers} million speakers. ${template} ${this.countries}. It is a ${this.popularity} most spoken language in the world!`;
  },

  hideOthers: function () {
    serbModal.classList.add('hidden');
    ruModal.classList.add('hidden');
    ukrModal.classList.add('hidden');
    czModal.classList.add('hidden');
  },
};

const serbianFacts = {
  lang: 'Serbian',
  numSpeakers: 9,
  countries: 'Serbia',
  popularity: '5th',
  displaySerb: function () {
    serbModal.textContent = `${this.lang} is spoken by ${this.numSpeakers} million speakers. ${template} ${this.countries}. It is a ${this.popularity} most spoken language in the world!`;
  },

  hideOthers: function () {
    ukrModal.classList.add('hidden');
    ruModal.classList.add('hidden');
    polModal.classList.add('hidden');
    czModal.classList.add('hidden');
  },
};

const czechFacts = {
  lang: 'Czech',
  numSpeakers: 10.7,
  countries: 'Czech Republic',
  popularity: '86th',
  displayCz: function () {
    czModal.textContent = `${this.lang} is spoken by ${this.numSpeakers} million speakers. ${template} ${this.countries}. It is a ${this.popularity} most spoken language in the world!`;
  },

  hideOthers: function () {
    serbModal.classList.add('hidden');
    ruModal.classList.add('hidden');
    polModal.classList.add('hidden');
    ukrModal.classList.add('hidden');
  },
};

const displaySlavicLangs = function () {
  slvOpen.classList.remove('hidden');

  showUkr.addEventListener('click', () => {
    const clicked = true;
    if (clicked) {
      ukranianFacts.hideOthers();
      showCloseButton();
      ukrModal.classList.remove('hidden');
      ukranianFacts.displayUkr();
    }
  });

  showRu.addEventListener('click', () => {
    const clicked = true;
    if (clicked) {
      russianFacts.hideOthers();
      showCloseButton();
      ruModal.classList.remove('hidden');
      russianFacts.displayRu();
    }
  });

  showPol.addEventListener('click', () => {
    const clicked = true;
    if (clicked) {
      polishFacts.hideOthers();
      showCloseButton();
      polModal.classList.remove('hidden');
      polishFacts.displayPol();
    }
  });

  showSerb.addEventListener('click', () => {
    const clicked = true;
    if (clicked) {
      serbianFacts.hideOthers();
      showCloseButton();
      serbModal.classList.remove('hidden');
      serbianFacts.displaySerb();
    }
  });

  showCz.addEventListener('click', () => {
    const clicked = true;
    if (clicked) {
      czechFacts.hideOthers();
      showCloseButton();
      czModal.classList.remove('hidden');
      czechFacts.displayCz();
    }
  });
  hideElements.closeThemAll();
};
