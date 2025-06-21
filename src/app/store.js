
import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
import themeSlice from '../features/Theme/themeSlice';
import filterReducer from '../features/filter/filterSlice'
import extensionReducer from '../features/extension/extensionSlice'



export const store = configureStore({
    reducer: {
        theme: themeSlice, // Add the theme slice reducer
        filter: filterReducer,
        extension: extensionReducer, // Add the extension slice reducer
    }
})