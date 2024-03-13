import React, { useEffect, useState } from "react";
import {
   
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import AllShows from '../allshows/AllShows'
import Controlers from "../showControlers/controlslections/Controlers";
import ShowBrief from "../showControlers/controlslections/ShowBrief";
import Reviews from "../showControlers/review/Reviews";
import Overview from "../showControlers/Overview/Overviews";
import Cast from "../showControlers/cast/Cast";
import Seasons from "../showControlers/seasons/Seasons";
import SimilerShows from "../showControlers/SimilarShows/SimilerShows";
import SearchBar from "../header/searchbar/Searchbar";
import FavShow from "../header/favshow/Favshow";
import About from "../showControlers/about/About";
function ShowRoutes() {
  
     return (
        <Router >

            
            <header className="App-header">
                <Route path='/*' exact>
                <SearchBar />
                <FavShow />
                </Route>
            </header>
            <Switch >

                <Route path='/' exact>
                    <AllShows />
                </Route>
                <Route path='/shows' >
                    <AllShows />
                </Route>
            
                <Route path ="/show/:id/:id">
                    <div className="showBrf-n-contrler-container">
                        <ShowBrief />
                        <Controlers />
                    </div>
                 
                    <div className="shows-details-sections">

                    <Route path='/show/reviews/:id'>
                        <Reviews />
                    </Route>
                    <Route path='/show/cast/:id'>
                        <Cast/>
                    </Route>
                    <Route path='/show/seasons/:id'>
                        <Seasons />
                    </Route>
                    <Route path='/show/overview/:id' component= {Overview}/>
                        

                    <Route path='/show/similerShows/:id'>
                        <SimilerShows />
                    </Route>

                    <Route path={'/show/:id/:id'}>
                    <About/>
                    </Route>

                 </div>
                </Route>
            </Switch>




        </Router>

    );

}

export default ShowRoutes;