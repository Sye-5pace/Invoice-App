import { createSlice , configureStore } from '@reduxjs/toolkit';


const themeSlice = createSlice({
    name: 'theme',
    initialState: { currentTheme: localStorage.getItem('theme') || 'light' },
    reducers:{ 
        toggleTheme: state => {
            state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme',state.currentTheme)
        }
    }
});

const { reducer, actions } = themeSlice;

const store = configureStore({
    reducer: {
        theme: reducer
    }
})

export const { toggleTheme } = actions;
export default store; 