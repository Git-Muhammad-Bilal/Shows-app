import axios from "axios";

export async function fetchData(id) {
 const getData = await axios.get(`${'https://api.tvmaze.com/'}${id?'shows/'+id:'shows'}`);
    return getData.data
        
}
export async function fetchCast(id) {
 const getCast = await axios.get(`${'https://api.tvmaze.com/shows/'}${id}/cast`);

    return getCast.data
        
}

export async function fetchSeasons(id){
    const getSeason = await axios.get(`${'https://api.tvmaze.com/shows/'}${id}/seasons`);

    return getSeason.data
}
export async function fetchSearchedShows(name){
    const getSeason = await axios.get(`${'https://api.tvmaze.com/shows?q='}${name}`);

    return getSeason.data
}
