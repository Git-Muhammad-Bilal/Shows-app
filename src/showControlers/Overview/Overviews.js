import React, { useState, useEffect } from "react";
import MainCast from "./MainCast";
import { useParams } from 'react-router-dom';
import { fetchCast, fetchData } from "../../fetchData/fetchdata";


function Overviews() {
   const [show, setShow] = useState('')
   const [cast, setCast] = useState('')

   let { id } = useParams();
 
   useEffect(() => {
      const fd = async () => {
         const data = await fetchData(parseFloat(id))
         const showCast = await fetchCast(parseFloat(id))
         setShow(data)
         setCast(showCast)
      }
      fd()
   }, [id])


   return (
      <div className="overview-container">
         <div className="show-img-title-containr">
            <p>{show.name}</p>
            <div className="overview-show-img-container">
               <img src={show?.image?.medium} alt="not found" />
            </div>
            <div className="main-cast-title-cont">
               <p className="main-cast-title">Main cast</p>
            </div>
         </div>
         <div className="show-overview">
            <p>{show.summary}</p>
         </div>
         {cast && <MainCast cast={cast.slice(0, 7)} />}
      </div>


   );
}

export default Overviews;