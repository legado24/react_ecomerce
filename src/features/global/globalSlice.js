import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   showCarList:false,
   showMenuMovil:false
  };


export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
       toggleShowCar: (state)=> {state.showCarList=!state.showCarList},
       toggleShowMenuMovil: (state)=> {state.showMenuMovil=!state.showMenuMovil}
          
    },
    
  });
  export const {toggleShowCar,toggleShowMenuMovil} = globalSlice.actions;

  export default globalSlice.reducer;