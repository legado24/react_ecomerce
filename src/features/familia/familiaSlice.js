
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   familias:[]
   };


export const familiaSlice = createSlice({
    name: 'familia',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        isLoading:(state,action)=>state.loading=action.payload,
        setFamilias: (state,action)=>{
            state.familias=action.payload;
         }
          
    },
    
  });
  export const {setFamilias,isLoading} = familiaSlice.actions;

  export default familiaSlice.reducer;