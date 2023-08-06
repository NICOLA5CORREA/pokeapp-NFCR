import { createSlice } from '@reduxjs/toolkit';

export const trainerSlice = createSlice({
    name: 'trainer',
    initialState: '',
    reducers: {
        setTrainerG: (state, actions) => actions.payload
    }
})

export const { setTrainerG } = trainerSlice.actions;

export default trainerSlice.reducer;