import "../App.css";
import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";
import { Component } from "react";
import { addMovies, setShowFavourite } from "../actions";

class App extends Component {
  componentDidMount(){
    const {store}=this.props;

    store.subscribe(()=>{
      console.log('updated');
      this.forceUpdate(); //generally do not use this function
    })
    //make api call
    //dispctch action
    store.dispatch(addMovies(data))

    console.log('state',this.props.store.getState()); 
  }

  isMovieFavourite=(movie)=>{
    const {movies} =this.props.store.getState();

    const index=movies.favourites.indexOf(movie); //check if movie available then return index no
    
    if(index!==-1){
      return true;
    }
    return false;
  }

  onChangeTab=(isFav)=>{
    this.props.store.dispatch(setShowFavourite(isFav))
  }

  render(){
    const {movies}=this.props.store.getState();     //{movies:{}, search:{}}
    const  {list, favourites, showFavourites}  = movies;
    console.log('render',this.props.store.getState());

    const displayMovies=showFavourites?favourites:list; //if showFavourite is true then show favourites list, if faslse then show list array of all movies
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' :'' }`} onClick={()=>this.onChangeTab(true)}>Favourite</div>
          </div>
        </div>
        <div className="list">
          {displayMovies.map((movie, index) => (
            <MovieCard 
              movie={movie} 
              key={`movie-${index}`} 
              dispatch={this.props.store.dispatch}
              isFavourite={this.isMovieFavourite(movie)}

              />
          ))}
        </div>
        {displayMovies.length===0?<div className="no-movies">No movies to display</div>:null}
      </div>
    );
  }
}

export default App;
