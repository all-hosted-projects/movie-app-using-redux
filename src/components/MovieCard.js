import React from 'react'

export default function MovieCard(props) {
    const{movie}=props;
    
    return (

    <div className='movie-card'>
        <div className="left">
            <img src={movie.Poster} alt="movie-poster" />
        </div>
        <div className="right">
            <div className="title">{movie.Title}</div>
            <div className="plot">{movie.Plot}</div>
            <div className="footer">
                <div className="rating">{movie.imbdRating}</div>
                <button className='favourite-btn'>Favourite</button>
            </div>
        </div>
    </div>
  )
}
