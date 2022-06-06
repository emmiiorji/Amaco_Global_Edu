import { markupCountries, renderUniversitiesPopup } from './universities.controller.js';
import { countriesList } from './universities.data.js';

const renderUniversities = () => {
	document.querySelectorAll('.university-lists').forEach(suggestedCountry => {
		suggestedCountry.innerHTML = markupCountries(countriesList);
	})

  document.querySelectorAll('.university').forEach((countryDisplay) => {
    countryDisplay.addEventListener('click', renderUniversitiesPopup)
  });
}

export default renderUniversities