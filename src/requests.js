const API_KEY="5a216771946f309ad99eae0d3155b28d";
const requests={
    fetchActionMovies: `/discover/movie?api_key=5a216771946f309ad99eae0d3155b28d&with_genres=28`,
    fetchTopRated: `/discover/movie?api_key=5a216771946f309ad99eae0d3155b28d&language=en-US`,
    fetchRomanceMovies: `/discover/movie?api_key=5a216771946f309ad99eae0d3155b28d&with_genres=10749`,
    fetchComedyMovies: `/discover/movie?api_key=5a216771946f309ad99eae0d3155b28d&with_genres=35`,
    fetchHorroMovies: `/discover/movie?api_key=5a216771946f309ad99eae0d3155b28d&with_genres=27`,
    fetchDocumentaries:`/discover/movie?api_key=5a216771946f309ad99eae0d3155b28d&with_genres=99`,
    fetch: `/trending/all/week?api_key=5a216771946f309ad99eae0d3155b28d`,
    fetchNetflixOriginals:`/discover/tv?api_key=5a216771946f309ad99eae0d3155b28d&with_networks=213`
}
export default requests;


