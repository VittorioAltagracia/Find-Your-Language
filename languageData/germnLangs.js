'use strict';

//germanic content
const germOpen = document.querySelector('.germanic-open');
const germModals = document.querySelector('.germanic-langs');
//germanic modals
const gerModal = document.querySelector('.german-modal');

// germanic buttons
const showGe = document.querySelector('.showGe');

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
async function loadData() {
  const response = await fetch(
    'https://zzcweidajbddjoyoebeh.supabase.co/rest/v1/general_info',
    {
      headers: {
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6Y3dlaWRhamJkZGpveW9lYmVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUyMjY0MDMsImV4cCI6MTk5MDgwMjQwM30.3JlrhMmw-BoXOxxdrYGaXGRVOMlwC60FJI8TVLvb4dU',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6Y3dlaWRhamJkZGpveW9lYmVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUyMjY0MDMsImV4cCI6MTk5MDgwMjQwM30.3JlrhMmw-BoXOxxdrYGaXGRVOMlwC60FJI8TVLvb4dU',
      },
    }
  );
  const data = await response.json();
  console.log(data);
  populateModals(data);
}

function populateModals(myArr) {
  const testArr = myArr.map(
    info =>
      `<p class="germanic-test">
        ${info.info}
        </p>`
  );

  const updatedArr = testArr.join('');
  germModals.insertAdjacentHTML('afterbegin', updatedArr);
}

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
      loadData();
    }
  },
  { once: true }
);

function removeCreatedElement() {
  const el = document.querySelector('.germanic-test');
  if (el) el.remove();
}
