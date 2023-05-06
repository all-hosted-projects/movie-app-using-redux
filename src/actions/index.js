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


//action creators
/*'action creators' use 'action types' so that not to hard code the value in action creators */
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies:movies    //or movies only for shorthand
    }
}