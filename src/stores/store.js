import { configureStore } from '@reduxjs/toolkit';
import favReducer from '../features/favourites/favSlice';

export default configureStore ({
    reducer: {
        favorites: favReducer
    }
});
