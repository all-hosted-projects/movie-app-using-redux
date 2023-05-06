
import '../App.css';
import Navbar from './Navbar';
import {data} from '../data';
import MovieCard from './MovieCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourite</div>
        </div>
      </div>
      <div className="list">
        {data.map((movie,index)=>(
          <MovieCard movie={movie} key={`movie-${index}`}/>
        ))}
      </div>
    </div>
  );
}

export default App;
