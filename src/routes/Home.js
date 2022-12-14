import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  //async, await 방식
  const getMovies = async() => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  //async, await 방식 더 짧게 쓰는 법
  /* 
  const getMovies = async() => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')).json();
    setMovies(json.data.movies);
    setLoading(false);
  }; 
  */

  useEffect(() => {
    //async, await 방식
      getMovies();

    /* //.then방식 (요즘은 async, await 방식을 쓴다) 
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.data.movies)
      setLoading(false);
    }); 
    */
  } ,[]);
  return (
  <div>
    {loading ? <h1>Loading...</h1> : 
      <div>
        {movies.map(movie => (
          <Movie 
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres} /> /* key는 map 안에서 컴포넌트를 렌더링할 때 사용함 */
        ))}
      </div>}
  </div>
  );
}

export default Home;