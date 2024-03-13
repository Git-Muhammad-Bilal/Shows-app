import React, {useEffect, useState} from "react";
import MainCast from "../Overview/MainCast";
import {useParams} from 'react-router-dom'
import {fetchCast} from '../../fetchData/fetchdata'

function Cast(){
   const [cast, setCast] = useState('')
   let { id } = useParams()

   useEffect(() => {
      console.log('cast');
      const fd = async () => {
         const showCast = await fetchCast(parseFloat(id))
         setCast(showCast)
      }
      fd()
   }, [])

   return(
      <div className="cast-container">
        {cast &&  <MainCast cast = {cast}/>} 
      
     </div>
   );
}

export default Cast;