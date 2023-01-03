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
} from '/script.js';

const spanishFacts = {
  lang: 'Spanish',
  numSpeakers: 500,
  countries: 'Bolivia, Spain, Mexico',
  popularity: '2nd',
};

const frenchFacts = {
  lang: 'French',
  numSpeakers: 210,
  countries: 'Canada, France',
  popularity: '9th',
};

const italianFacts = {
  lang: 'Italian',
  numSpeakers: 90,
  countries: 'Italy, Switzerland, South Tyrol',
  popularity: '20th',
};

const portugueseFacts = {
  lang: 'Portuguese',
  numSpeakers: 300,
  countries: 'Brazil, Portugal, Cabo Verde',
  popularity: '5th',
};

const romanianFacts = {
  lang: 'Romanian',
  numSpeakers: 70,
  countries: 'Romania, Moldova',
  popularity: '25th',
};

const template = 'Here is the list of countries where this language is spoken';

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

// logic for Manipulating Modal windows

const displaySpanish = function () {
  showSp.addEventListener('mouseover', function () {
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
  showFr.addEventListener('mouseover', function () {
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
  showIt.addEventListener('mouseover', function () {
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
  showPt.addEventListener('mouseover', function () {
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
  showRm.addEventListener('mouseover', function () {
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
