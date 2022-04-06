import uni from './assets/img/uni.jpg'

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
	document.querySelector('.university-lists').innerHTML = universities
}

export default renderUniversities
