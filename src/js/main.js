const card_container = document.getElementById('card-container');
const API = 'https://rickandmortyapi.com/api/character/'
const page = '?page=:pages'


const GetApiRickAndMorty = async(pages)=>{
  try {
    const { results } = await fetchData(`${API}${page.replace(':pages', `${pages}`)}`)
    results.map ( character => {
      const card = GeneratorCards(character)
      card_container.appendChild(card);
    })
  } catch (error) {
    console.error(error)
  }
}

(async() =>{
  const data = await fetchData(API);
  const MaxPages = data.info.pages;

  for (let i = 1; i <= MaxPages ; i++) {
    GetApiRickAndMorty(i);
  }
})();