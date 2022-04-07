import uni from './assets/img/uni.jpg'

const popups = `
<section class="modal">
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
</section>
<section class="modal">
  <div class="popup-container">
    <div id="view-uni">
      <img src=${uni} alt="" />
    </div>
    <div>
      <h2 class="uni-desc"> University Of California </h2>  
      <p>	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga illo exercitationem eaque perspiciatis sint voluptatum deleniti sunt ducimus iusto corporis blanditiis nobis ut placeat, nulla aliquid beatae veritatis, dolores doloremque consequuntur rerum et maxime. Corrupti officiis maiores, facilis in deserunt doloremque architecto quaerat placeat recusandae illum aliquam nobis id perferendis</p>
      <div class="description cancel">
        <button type="button">Close</button>
      </div>
    </div>
  </div>
</section>
<section class="modal">
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
</section>
<section class="modal">
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
</section>
<section class="modal">
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
</section>
<section class="modal">
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
</section>
<section class="modal">
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
</section>
<section class="modal">
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
</section>
           `

const universityPopup = () => {
	document.querySelector('.university-popup').innerHTML = popups

}
export default universityPopup
