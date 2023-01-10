/* import axios from 'axios'

const todosJuegos = async () => {
    const peticion = await axios.get('https://www.freetogame.com/api/games')
    console.log(peticion.data.results)
}

export {
    todosJuegos
} */

import axios from "axios";

const todosJuegos = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': 'SECRET',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

axios.request(todosJuegos).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export default todosJuegos
