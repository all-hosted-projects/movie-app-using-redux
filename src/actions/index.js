// {
//     type:'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }
// {
//     type:'DECREASE_COUNT'
// }

//action types
/* action types are the variable names */
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_TO_FAVOURITE='ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE='REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';


//action creators
/*'action creators' use 'action types' so that not to hard code the value in action creators */
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies:movies    //or movies only for shorthand
    }
}

export function addFavourite(movie){
    return{
        type:ADD_TO_FAVOURITE,
        movie:movie    
    }
}

export function removeFromFavourite(movie){
    return{
        type:REMOVE_FROM_FAVOURITE,
        movie:movie    
    }
}

export function setShowFavourite(isFav){
    return{
        type:SET_SHOW_FAVOURITES,
        isFav:isFav    
    }
}



