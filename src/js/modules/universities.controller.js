import { unisList, countriesList, countriesCount } from './universities.data';

const markupCountries = (countriesList) => {
  let markup = '';
  
  countriesList.forEach((country, index) => {
    if(countriesCount[country.name]) {
      markup += `<div class="university" id="country_${index}">
                  <img src=${country.img} alt="university">
                  <h2>${country.name}</h2>
                  <p>${countriesCount[country.name]} Universities</p>
                </div>`;
    }
  });
  return markup;
}

const markupUniversities = (universities) => {
  let markup = '';

  universities.forEach((university) => {
    markup += `<a href="${university['universities-href']}" target="_blank" class="uni-card">${university.university}</a>`;
  });
  return markup;
};

const renderUniversitiesPopup = (e) => {
  const countryIndex = parseInt(e.target.parentElement.id.split('_')[1]);
  const country = countriesList[countryIndex];
  const universities = unisList.filter((university) => university.country.toLowerCase() === country.name.toLowerCase());

  const universityModal = document.createElement('section');
  universityModal.classList.add('modal');

  universityModal.innerHTML = `<div class="popup-container">
                                  <h1>The Schools in ${country.fullName || country.name} <br> that we represent are listed below:</h1>
                                  <div class="uni-cards-container">
                                    ${markupUniversities(universities)}
                                  </div>

                                </div>`
  document.querySelector('header').classList.add('header-active')
  document.querySelector('body').style.overflow = 'hidden'
  document.body.appendChild(universityModal)
};

const closeModal = () => {
  const modal = document.querySelector('.modal');
  if (modal) {
    document.querySelector('body').removeChild(modal)
    document.querySelector('body').style.overflow = 'auto'
  }
};

export { markupCountries, renderUniversitiesPopup, closeModal };