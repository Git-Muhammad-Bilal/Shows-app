import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchSeasons } from "../../fetchData/fetchdata";


function Seasons() {
   const [seasons, setSeasons] = useState([])

   let { id } = useParams()
   useEffect(() => {
      const fd = async () => {
         const showSeasons = await fetchSeasons(parseFloat(id))
         setSeasons(showSeasons)
      }
      fd()
   }, [])


   let renderSeasons = seasons?.map((seas, index) => {

      return (
         <React.Fragment key={index}>
            <div className="season-description" key={index}>
               <div className="sasn-num">
                  <p>Seasons {index + 1}</p>
               </div>
               <p>{seas?.summary || '....'}</p>
               <span>{`Started ${seas.premiereDate} Ended - ${seas.endDate} `}</span>
            </div>
            <div className="season-img-cont">
               <img src={seas?.image?.medium} alt="faild" />
            </div>
         </React.Fragment>
      )
   })

   return (
      <div className="seasons-container">
         {renderSeasons}
      </div>
   );
}

export default Seasons;