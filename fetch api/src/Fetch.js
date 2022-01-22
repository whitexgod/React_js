
const getApi = () => {
    fetch('https://api.themoviedb.org/3/movie/550?api_key=0000000000000000000000000000000xxxxxxxxxxxxx')
    .then(response => response.json())
    .then(data => console.log(data));
    }

export default getApi;

//u can also use npm axios and cherio