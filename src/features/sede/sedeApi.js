import { instance,BASE_URL } from "../../app/api"
import {setSedeResponse } from "./sedeSlice";


export const fetchAllSedes=()=>(dispatch)=>{
    instance
    .get(`${BASE_URL}getSedes`)
    .then((response)=>{
        dispatch(setSedeResponse(response.data));
    }
    )
    .catch((error)=>console.log(error));

    
}