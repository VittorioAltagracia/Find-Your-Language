'use strict';

//germanic content
const germOpen = document.querySelector('.germanic-open');
const germModals = document.querySelector('.germanic-langs');
//germanic modals
const gerModal = document.querySelector('.german-modal');
// const dutModal = document.querySelector('.dutch-modal');
// const norModal = document.querySelector('.norwegian-modal');
// const iceModal = document.querySelector('.icelandic-modal');
// const swdModal = document.querySelector('.swedish-modal');

// germanic buttons
const showGe = document.querySelector('.showGe');
// const showDu = document.querySelector('.showDu');
// const showNor = document.querySelector('.showNor');
// const showIce = document.querySelector('.showIce');
// const showSwe = document.querySelector('.showSwe');

// overlay
// const overlay = document.querySelector('.overlay');

export { germOpen };

const viktorsArr = [
  {
    id: 1,
    lang: 'Test1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi possimus repellendus tenetur commodi ab earum, nemo ipsam nam unde nobis architecto excepturi deserunt, exercitationem, ullam minus error beatae dolorem?',
    numSpeakers: 51,
    countries: 'Poland',
    popularity: '24th',
  },

  {
    id: 2,
    lang: 'Test2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi possimus repellendus tenetur commodi ab earum, nemo ipsam nam unde nobis architecto excepturi deserunt, exercitationem, ullam minus error beatae dolorem?',
    numSpeakers: 9,
    countries: 'Serbia',
    popularity: '5th',
  },
  {
    id: 3,
    lang: 'Test2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi possimus repellendus tenetur commodi ab earum, nemo ipsam nam unde nobis architecto excepturi deserunt, exercitationem, ullam minus error beatae dolorem?',
    numSpeakers: 9,
    countries: 'Serbia',
    popularity: '5th',
  },
  {
    id: 3,
    lang: 'Test2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi possimus repellendus tenetur commodi ab earum, nemo ipsam nam unde nobis architecto excepturi deserunt, exercitationem, ullam minus error beatae dolorem?',
    numSpeakers: 9,
    countries: 'Serbia',
    popularity: '5th',
  },
  {
    id: 3,
    lang: 'Test2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi possimus repellendus tenetur commodi ab earum, nemo ipsam nam unde nobis architecto excepturi deserunt, exercitationem, ullam minus error beatae dolorem?',
    numSpeakers: 9,
    countries: 'Serbia',
    popularity: '5th',
  },
];

germModals.innerHTML = '';

// populateModals(viktorsArr);

function populateModals(myArr) {
  const testArr = myArr.map(
    info =>
      `<p class="germanic-test">
        ${info.lang}, ${info.numSpeakers}, ${info.countries}, ${info.popularity}
        </p>`
  );

  const updatedArr = testArr.join('');
  germModals.insertAdjacentHTML('afterbegin', updatedArr);
}

// germOpen.classList.remove('hidden');

function unHide() {
  if (germModals.classList.contains('hidden')) {
    germModals.classList.remove('hidden');
  }
}

showGe.addEventListener(
  'click',
  () => {
    const clicked = true;
    if (clicked) {
      unHide();
      // const viktorsData = viktorsArr.filter(info => info.id === 1);
      populateModals(viktorsArr);
    }
  },
  { once: true }
);

function removeCreatedElement() {
  const el = document.querySelector('.germanic-test');
  if (el) el.remove();
}
