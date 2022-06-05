// import uni from '../assets/img/uni.jpg'
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
    // Finish up markup
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

{/* <section class="modal">
  <div class="popup-container">
    <div id="view-uni">
      <img src=${uni} alt="" />
    </div>
    <div class="uni-desc">
      <h2> University Of California </h2>  
      <p>	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga illo exercitationem eaque perspiciatis sint voluptatum deleniti sunt ducimus iusto corporis blanditiis nobis ut placeat, nulla aliquid beatae veritatis, dolores doloremque consequuntur rerum et maxime. Corrupti officiis maiores, facilis in deserunt doloremque architecto quaerat placeat recusandae illum aliquam nobis id perferendis</p>
      <div class="description cancel">
        <button type="button">Close</button>
      </div>
    </div>
  </div>
</section> */}


export { markupCountries, renderUniversitiesPopup, closeModal };