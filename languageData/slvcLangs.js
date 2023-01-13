'use strict';
export { displaySlavicLangs, showSerb, showUkr };

import { template } from './romLangs.js';

const slvOpen = document.querySelector('.slv-open');
const showUkr = document.querySelector('.showUkr');
const showSerb = document.querySelector('.showSerb');
const ukrModal = document.querySelector('.ukrainian-modal');
const serbModal = document.querySelector('.serbian-modal');

const ukranianFacts = {
  lang: 'Ukrainian',
  numSpeakers: 40,
  countries: 'Ukraine',
  popularity: '26th',
};

const russianFacts = {
  lang: 'Russian',
  numSpeakers: 258,
  countries:
    'Russia, Ukraine, Kyrgystan, Kasakhstan, Belarus, Azerbaijan, Estonia, Georgia, Latvia, Lithuania, Moldova, Tajikistan, Turkmenistan and Uzbekistan',
  popularity: '8th',
};

const polishFacts = {
  lang: 'Polish',
  numSpeakers: 51,
  countries: 'Poland',
  popularity: '24th',
};

const serbianFacts = {
  lang: 'Serbian',
  numSpeakers: 9,
  countries: 'Serbia',
  popularity: '5th',
};

const chechFacts = {
  lang: 'Chech',
  numSpeakers: 10.7,
  countries: 'Czech Republic',
  popularity: '86th',
};

const hideUkr = function () {
  ukrModal.classList.add('hidden');
};

const displaySlavicLangs = function () {
  slvOpen.classList.remove('hidden');
  showUkr.addEventListener('click', () => {
    const clicked = true;
    if (clicked) {
      ukrModal.classList.remove('hidden');
      ukrModal.textContent = `${ukranianFacts.lang} is spoken by ${ukranianFacts.numSpeakers} million speakers. ${template} ${ukranianFacts.countries}. It is a ${ukranianFacts.popularity} most spoken language in the world!`;
    }
  });
  showSerb.addEventListener('click', () => {
    const clicked = true;
    if (clicked) {
      hideUkr();
      serbModal.classList.remove('hidden');
      serbModal.textContent = `${serbianFacts.lang} is spoken by ${serbianFacts.numSpeakers} million speakers. ${template} ${serbianFacts.countries}. It is a ${serbianFacts.popularity} most spoken language in the world!`;
    }
  });
};
