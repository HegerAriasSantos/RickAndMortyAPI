const GeneratorCards = obj => {
  const card = document.createElement("article");
  card.classList.add('card')

  card.innerHTML = ` 
  <div class="img_container">
    <img src="${obj.image}" alt="image of ${obj.name}">
  </div>
  <div class="description">
    <div class="div div1">
      <h2>${obj.name.toLowerCase()}</h2>
      <div><span class="${obj.status.toLowerCase()}"></span> <span>${obj.status} - ${obj.species}</span></div>
      <p>${obj.gender}</p>
    </div>
    <div class="div div3">
    <span>Origin:</span>
    <p>${obj.origin.name}</p>
    </div>
    <div class="div div2">
      <span >Last kwnon location:</span>
      <p> ${obj.location.name} </p>
    </div>
    <div class="div div4">
      <span>was created in:</span>
      <p>${obj.created}</p>
    </div>
  </div>
  `;
  return card;
}
