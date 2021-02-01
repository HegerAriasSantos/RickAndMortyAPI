const cardsContent = document.getElementById('cards-content');
const API = 'https://rickandmortyapi.com/api/character/';
const apiPage = '?page=:page';
// https://rickandmortyapi.com/api/character/?page=2

const getDataRickAndMorty = async (page) => {
  try {
      const { results } = await fetchData(`${API}${apiPage.replace(':page', `${page}`)}`)
      console.log(results)
      results.map(character => {
        const card = cardGenerator(character);
        cardsContent.appendChild(card);
      });
  } catch (error) {
    console.error(error);
  }
}

(async()=> {
  const data = await fetchData(API)
  const pages = data.info.pages;

  for (let i = 1; i <= pages ; i++) {
    getDataRickAndMorty(i);
  }
})();