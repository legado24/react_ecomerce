import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   sedesResponse:null
  };


export const sedeSlice = createSlice({
    name: 'sede',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setSedeResponse: (state,action)=>{
            state.sedesResponse=action.payload;
        }
          
    },
    
  });
  export const {setSedeResponse} = sedeSlice.actions;

  export default sedeSlice.reducer;