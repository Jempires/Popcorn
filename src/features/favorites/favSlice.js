import { createSlice } from '@reduxjs/toolkit';
import { localAppStorage } from '../../globals/globals';

// Retrieving favorited movies from local storage
function getFavoritesList() {

    // Store data retrieved from local storage in variable
    let favoritesList = localStorage.getItem(localAppStorage);

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
}


// Reducer to manage the state (e.g., add, remove, update)







