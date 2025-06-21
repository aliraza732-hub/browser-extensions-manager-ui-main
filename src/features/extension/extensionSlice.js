import { createSlice} from '@reduxjs/toolkit'
import data from '../../../data.json'

const initialState = {
  items: data.map((item) => ({
    ...item,
    active: item.isActive, // ✅ convert isActive to active
  })),
};

const extensionSlice = createSlice({
    name: 'extension',
    initialState,
    reducers: {
        toggleExtensionStatus: (state, action) => {
            const ext = state.items.find((item) => item.name === action.payload);
            console.log(ext)
            if (ext) {
                ext.active = !ext.active;
            }
        },
        removeExtension: (state, action) => {
            state.items = state.items.filter((item) => item.name !== action.payload);
        }
    }
});

export const { toggleExtensionStatus, removeExtension } = extensionSlice.actions;
export default extensionSlice.reducer;