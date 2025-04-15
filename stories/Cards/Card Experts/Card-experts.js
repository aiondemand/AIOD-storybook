import './card-experts.css';

export const createCardExperts = () => {
  const cardExperts = document.createElement('div');
  cardExperts.className = ['card-experts'].join(' ');

  
  cardExperts.innerHTML = `  
      <div class="card-experts-container d-flex gap-4">
         <div class="card-experts-image">
            <img src="../assets/img/card-image.jpeg" alt="">
         </div>
         <div class="card-experts-content">
            <h3 class="h4 card-experts-name">Expert name</h3>
            <p class="card-experts-category">UX/UI design</p>
            <p class="card-experts-description">He is a specialist in artificial intelligence, focusing on combating misinformation and promoting ethical practices in AI. </p>
            <a href="ai-experts-detail.php" title="" class="btn btn-default" target="_blank">Know more <i class="icon-arrow"></i></a>
         </div>
      </div>
     `

  return cardExperts;
};



