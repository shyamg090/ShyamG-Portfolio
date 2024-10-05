import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './themeSlice';

const appstore = configureStore({
    reducer : {
        theme : themeSlice
    }
})

export default appstore;