import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import movieReducer from './movieReducer';

const reducer = combineReducers({
    movieState:movieReducer,
    favoriteState:favoritesReducer
});

export default reducer;