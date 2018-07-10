import PokemonsData from './db.json';


const initData = () => {
  const local = JSON.parse(localStorage.getItem('pokemons'))
  if( local ) {
    return local
  }
  else{
    return PokemonsData.pokemons.map(pokemon => ({...pokemon, catched: false, time: null}))
  }
}

var data  = initData()

const saveStorage = () => {
  localStorage.setItem('pokemons', JSON.stringify(data) )
}


export default {
  add: (item) => data.push(item),
  destroy: (item) =>
    data = data.filter( (i) => item.id !== i.id ),
  findBy: (query) => {
    if(!query) {
      return data;
    } else {
      console.log(data);
      return data.filter( (item) => {
      let result = false;
        for(let prop in query) {
          result = item[prop] === query[prop]
          if(result) break;
        }
        return result;
      });
    }
  },

  onCatched: (pokemon) => {
    data = data.map(item => {
      if(item.id === pokemon.id) {
        return {
          ...item,
          catched: true,
          time: new Date().toLocaleTimeString(),
        }
      } else {
        return item
      }

    });
    saveStorage()
    return data.filter((item) => item.id === pokemon.id);
  },



}
