'use strict';

const ItFlag = document.querySelector('.ItFlag');
const meetUplink = document.querySelector('.meetUp-link');

ItFlag.addEventListener('mouseover', function () {
  meetUplink.classList.toggle('hidden');
});

export {
  spanishFacts,
  template,
  frenchFacts,
  italianFacts,
  portugueseFacts,
  romanianFacts,
  hideSp,
  hideIt,
  hidePt,
  hideRm,
  displayFrench,
  displayItalian,
  displaySpanish,
  displayPortuguese,
  displayRomanian,
  dontShowRomanceContent,
};
import {
  spanishModal,
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
  closeThemAll,
  romOpen,
} from '/script.js';

const spanishFacts = {
  lang: 'Spanish',
  numSpeakers: 534,
  countries:
    'Argentina, Bolivia, Chile, Colombia, Costa Rica, Cuba, Dominican Republic, Ecuador, El Salvador, Equatorial Guinea, Guatemala, Honduras, Mexico, Nicaragua, Panama, Paraguay, Peru, Spain, Uruguay, Venezuela, Puerto Rico, United States, Beliz',
  popularity: '2nd',
};

const frenchFacts = {
  lang: 'French',
  numSpeakers: 280,
  countries:
    'Canada, France, Belgium, Benin, Burkina Faso, Burundi, Cameroon, Canada, Chad, the Ivory Coast, the Democratic Republic of the Congo, Djibouti, Equatorial Guinea, Haiti, Luxembourg, Madagascar, Mali, Monaco, Niger, Rwanda, Senegal, Seychelles, Switzerland, Togo and Vanuatu',
  popularity: '5th',
};

const italianFacts = {
  lang: 'Italian',
  numSpeakers: 66,
  countries: `Italy, Switzerland, San Marino, Vatican City, 'Istria County in Croatia' and 'Slovene Istria in Slovenia'`,
  popularity: '20th',
};

const portugueseFacts = {
  lang: 'Portuguese',
  numSpeakers: 258,
  countries:
    'Brazil, Mozambique, Angola, Portugal, Guinea-Bissau, East Timor, Equatorial Guinea, Macau, Cape Verde, and São Tomé and Príncipe',
  popularity: '9th',
};

const romanianFacts = {
  lang: 'Romanian',
  numSpeakers: '25 - 29',
  countries: 'Romania, Republic of Moldova, Ukraine, Serbia, Bulgaria, Hungary',
  popularity: '25th',
};

const template = 'Here is the list of countries where this language is spoken:';

// hiding modals
function hideSp() {
  spanishModal.classList.add('hidden');
}

function hideFr() {
  frenchModal.classList.add('hidden');
}

function hideIt() {
  italianModal.classList.add('hidden');
}

function hidePt() {
  portugueseModal.classList.add('hidden');
}

function hideRm() {
  romanianModal.classList.add('hidden');
}

const dontShowRomanceContent = function () {
  romOpen.classList.add('hidden');
};

// logic for Manipulating Modal windows

const displaySpanish = function () {
  showSp.addEventListener('click', function () {
    spanishModal.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
    closeThemAll();
    hideFr();
    hideIt();
    hidePt();
    hideRm();
    spanishModal.textContent = `${spanishFacts.lang} is spoken by ${spanishFacts.numSpeakers} million speakers. ${template}
       ${spanishFacts.countries}. It is a ${spanishFacts.popularity} most spoken language in the world!`;
  });
};

const displayFrench = function () {
  showFr.addEventListener('click', function () {
    frenchModal.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
    closeThemAll();
    hideSp();
    hideIt();
    hidePt();
    hideRm();
    frenchModal.textContent = `${frenchFacts.lang} is spoken by ${frenchFacts.numSpeakers} million speakers. ${template}
       ${frenchFacts.countries}. It is a ${frenchFacts.popularity} most spoken language in the world!`;
  });
};

const displayItalian = function () {
  showIt.addEventListener('click', function () {
    italianModal.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
    closeThemAll();
    hideSp();
    hideFr();
    hidePt();
    hideRm();
    italianModal.textContent = `${italianFacts.lang} is spoken by ${italianFacts.numSpeakers} million speakers. ${template}
      ${italianFacts.countries}. It is a ${italianFacts.popularity} most spoken language in the world!`;
  });
};
const displayPortuguese = function () {
  showPt.addEventListener('click', function () {
    portugueseModal.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
    closeThemAll();
    hideSp();
    hideFr();
    hideIt();
    hideRm();
    portugueseModal.textContent = `${portugueseFacts.lang} is spoken by ${portugueseFacts.numSpeakers} million speakers. ${template}
      ${portugueseFacts.countries}. It is a ${portugueseFacts.popularity} most spoken language in the world!`;
  });
};

const displayRomanian = function () {
  showRm.addEventListener('click', function () {
    romanianModal.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
    closeThemAll();
    hideSp();
    hideFr();
    hideIt();
    hidePt();
    romanianModal.textContent = `${romanianFacts.lang} is spoken by ${romanianFacts.numSpeakers} million speakers. ${template}
      ${romanianFacts.countries}. It is a ${romanianFacts.popularity} most spoken language in the world!`;
  });
};
