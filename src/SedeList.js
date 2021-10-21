import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSedes } from './features/sede/sedeApi';

const SedeList = () => {
const dispatch = useDispatch();
const {sedesResponse} = useSelector(state => state.sede);
 
 useEffect(() => {
    dispatch(fetchAllSedes());
}, [dispatch])


    return (
        <div>
            {
                sedesResponse==null?<h1>loading</h1>:<h1>cargó</h1> 

            }
        </div>
    )
}

export default SedeList
