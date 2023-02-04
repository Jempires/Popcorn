import { createSlice } from '@reduxjs/toolkit';
import { localAppStorage } from '../../globals/globals';

function getFavoritesList() {

    let favoritesList = localStorage.retrieveItem(localAppStorage);

    
}