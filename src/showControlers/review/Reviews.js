import React from "react";
import Ratting from "../about/Ratting";

function review() {
    let rating =[1,2,3,4,5];
    let randomNum;  
  let ratingBars =  rating.map((r, index)=>{
    randomNum = Math.floor(Math.random()*5)
   return (
      <div className="rt-bar" key={index}><div
          className="rt-bar-yellow" 
          style={{flex:randomNum/6}}
          >
         </div></div>
      ); 
         
      
    })
    
   return (
      <div className="reviews-container">
         <div className="reviews-title">
            <p>Reviews</p>

         </div>
         <Ratting />
         <div className="sumry-title">
            <p>Audience rating Summary</p>
         </div>
         <div className="audience-rt-sumry">
            <div>
               <div>1</div>
               <div>2</div>
               <div>3</div>
               <div>4</div>
               <div>5</div>
            </div>
            <div className="ratting-bars-cont">
                {ratingBars}
            </div>
            <div className="rt-num">
               <p>1.{randomNum+1 }/5</p>
            </div>
         </div>
      </div>


   );
}

export default review;