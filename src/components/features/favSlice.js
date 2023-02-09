import { createSlice } from '@reduxjs/toolkit';
import { FAVORITES_STORAGE } from '../../globals/globals';

// Retrieving favorited movies from local storage
function getFavoritesList() {

    // Store data retrieved from local storage in variable
    let favoritesList = localStorage.getItem(FAVORITES_STORAGE);
    // Checking for favorited movies if any
    if(favoritesList === null) {
        // if not favorites, set list to empty array 
        favoritesList = [];
    }else{
        // JSON.parse to convert storage data string into object
        favoritesList = JSON.parse(favoritesList);
    }
    return favoritesList;
}

// Setting initial state for retrieiving stored favorites list
const initialState = {
    favItems: getFavoritesList()
};

// Check if a movie is already in the favorites list 
function retrieveIndex(favItem, array){
    return array.findIndex(arrayItem => arrayItem?.id === favItem.id);
}

// Reducer to manage the state (e.g., add, remove, update)
export const favSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            const newFavoritesItem = [...state.favItems, action.payload];
            localStorage.setItem(FAVORITES_STORAGE, JSON.stringify(newFavoritesItem));
            state.favItems = newFavoritesItem;
        },
        deleteFromFavorites: (state, action) => {
            // Makes copy of array instead of directly deleting:
            const storedItems = [...state.favItems];
            storedItems.splice(retrieveIndex(action.payload, state.favItems), 1);
            localStorage.setItem(FAVORITES_STORAGE, JSON.stringify(storedItems));
            // make a copy and stores in array
            state.favItems = storedItems;
        }
    },
}
);

export const { addToFavorites, deleteFromFavorites } = favSlice.actions
export default favSlice.reducer;
