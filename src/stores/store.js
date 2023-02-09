import { configureStore } from '@reduxjs/toolkit';
import favReducer from '../features/favorites/favSlice';

export const store = configureStore ({
    reducer: {
        favorites: favReducer
    }
});
