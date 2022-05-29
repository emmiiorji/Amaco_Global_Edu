import uni from '../assets/img/uni.jpg'
import { unisList, countriesList } from './universitiesData';

const markupCountries = (countriesList) => {
  let markup = '';
  const initCount = {}
  
  // Count the number of universities listed for each country
  const countriesCount = unisList.reduce((previous, current) => {
    if(previous[current.country] === undefined) {
      previous[current.country] = 1;
    } else {
      previous[current.country] += 1
    }
    return previous
  }, initCount);

  countriesList.forEach((country) => {
    markup += `<div class="university">
                <img src=${country.img} alt="university">
                <h2>${country.name}</h2>
                <p>${countriesCount[country.name]} Universities</p>
              </div>`
  });
  return markup;
}

const universities = `
         <div class="university">
            <img src=${uni} alt="university">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem, ipsum.</p>
					</div>
        
          <div class="university">
            <img src=${uni} alt="university">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem, ipsum.</p>
          </div>
      
          <div class="university">
            <img src=${uni} alt="university">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem, ipsum.</p>
          </div>
 
        
          <div class="university">
           <img src=${uni} alt="university">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem, ipsum.</p>
          </div>
  
     
          <div class="university">
           <img src=${uni} alt="university">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem, ipsum.</p>
          </div>
    
    
          <div class="university">
            <img src=${uni} alt="university">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem, ipsum.</p>
          </div>
      
       
          <div class="university">
            <img src=${uni} alt="university">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem, ipsum.</p>
          </div>
   
    
          <div class="university">
            <img src=${uni} alt="university">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem, ipsum.</p>
          </div>
       
`
const renderUniversities = () => {
	document.querySelectorAll('.university-lists').forEach(uni => {
		uni.innerHTML = universities
	})
}

export default renderUniversities
