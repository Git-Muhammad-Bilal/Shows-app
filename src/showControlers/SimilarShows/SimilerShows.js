import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchData } from "../../fetchData/fetchdata";

function SimilerShows() {

   const [show, setShow] = useState('')
   const [allShows, setAllShows] = useState([])

   let { id } = useParams()

   useEffect(() => {
      const fd = async () => {
         const data = await fetchData()
         const fs = await fetchData(parseFloat(id))
         setAllShows(data)
         setShow(fs)
      }
      fd()
   }, [])

   let renderSimilShows = allShows?.filter((s, index) => {

      if (s?.genres[0] === show?.genres[0] &&
         s?.genres[1] === show?.genres[1] &&
         s?.genres[2] === show?.genres[2]
         

      ) {
         return true
      }
   }).map((s, index) => {
      return (
         <React.Fragment key={index}>

            <div className="s-show-det-cont">
               <div className="similer-show-img-cont">
                  <img src={s?.image?.medium} alt="faild" />
               </div>
               <div className="similer-show-description">
                  <div className="similer-show-name">
                     <p>{s?.name}</p>
                  </div>
                  <div className="sm-show-description">
                     <p>{s?.summary?.slice(0, 200).toString() + '...'}
                     </p>
                  </div>
                  <span className="sm-show-source"> source...2010-09-26</span>
               </div>
            </div>

         </React.Fragment>
      )
   })

   return (
      <div className="similer-shows-container">
         <div className="s-show-title">
            <p>Similer Shows</p>
         </div>
         {renderSimilShows}
      </div>

   );
}

export default SimilerShows;