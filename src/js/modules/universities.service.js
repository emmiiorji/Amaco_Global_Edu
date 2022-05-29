import { markupCountries, renderUniversitiesPopup } from './universities.controller.js';
import { countriesList } from './universities.data.js';

const renderUniversities = () => {
	document.querySelectorAll('.university-lists').forEach(suggestedCountry => {
		suggestedCountry.innerHTML = markupCountries(countriesList);
	})
}

export default renderUniversities