import React from 'react';
import {Link} from 'react-router-dom';

function FavShow(){
  return(
  <div className="fav-show">
   <Link  to="/shows"><h2 className='fav-show-title'>FavShow</h2></Link>

  </div>
    );
}

export default FavShow;