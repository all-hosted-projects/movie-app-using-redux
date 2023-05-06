import "../App.css";
import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";
import { Component } from "react";

class App extends Component {
  componentDidMount(){
    const {store}=this.props;

    store.subscribe(()=>{
      console.log('updated');
      this.forceUpdate(); //generally do not use this function
    })
    //make api call
    //dispctch action
    store.dispatch({
      type:'ADD_MOVIES',
      movies:data
    })

    console.log('state',this.props.store.getState());
  }

  render(){
    const  movies  = this.props.store.getState();
    console.log('render');
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourite</div>
          </div>
        </div>
        <div className="list">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={`movie-${index}`} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
