import { createSlice } from '@reduxjs/toolkit';
export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        status: 'all',
    }, 

    reducers: {
        setFilterStatus: (state, action) => {
            state.status = action.payload;
        }
    }
})
export const { setFilterStatus } = filterSlice.actions;
export default filterSlice.reducer;