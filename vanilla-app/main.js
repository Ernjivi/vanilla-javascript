// 'https://rickandmortyapi.com/api/character/'
let container = document.querySelector('#app');
let button = document.querySelector('#addCharacters');
let appData = {};


const fetchData = async (url) => {
  try{
    const r = await fetch(url);
    return await r.json();
	} catch(e) {
    console.error(e);
	}
}

const render = (data) => {
  data.results.map(item => {
    let character = document.createElement('div');
    character.innerHTML = `
    <h1>${item.name}</h1>
    <p><img src="${item.image}" alt="Picture of ${item.name}"/></p>
    `;
    container.appendChild(character);
  });
}

const addCharacters = async () => {
  let data = await fetchData(
    appData.next || 'https://rickandmortyapi.com/api/character/');
  appData = {...data.info}
  render(data)
}

const init = async () => {
  addCharacters()
}

init();
button.addEventListener('click', addCharacters);
