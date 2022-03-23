
import './App.css';
import Row from "./Row"
import requests from "./requests"
import Banner from "./Banner"
import Nav from "./Nav"

function App() {
  return (

    <div className="App">
      <Nav/>
      <Banner fetchURL={requests.fetchNetflixOriginals}/>
      <Row 
       title = "NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}
       isLarge={true}/>
       <Row title = "Trending" fetchURL={requests.fetch}/>
      <Row title = "Action Movies" fetchURL={requests.fetchActionMovies} style={{paddingLeft: "20px"}}/>
      <Row title = "Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title = "Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title = "Horror Movies" fetchURL={requests.fetchHorroMovies}/>
      <Row title = "Documentaries" fetchURL={requests.fetchDocumentaries}/>
      <Row title = "Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      
    </div>
  );
}

export default App;
