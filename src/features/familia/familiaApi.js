import { instance,BASE_URL } from "../../app/api"
import { toggleLoading } from "../loading/loadingSlice";
import { setFamilias,isLoading } from "./familiaSlice";


export const fetchAllFamilias=()=>(dispatch)=>{
    dispatch(toggleLoading());
    instance
    .get(`${BASE_URL}getFamiliasAndClasesAndSubclases?codCliente=DNI00000001&codLocal=1`)
    .then((response)=>{
     
        if(response.data.est===1){
            dispatch(setFamilias(response.data.data.familias));
            dispatch(toggleLoading());
        }else{
            console.log(response.data.mens)
        }
       
    }
    )
    .catch((error)=>console.log(error));

    
}