import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';

// import { Now_Playing_Movie, options } from '../utils/constant';
// import { getNowPlayingMovies } from '../redux/movieSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import  usePopularMovies  from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';

export default function Browse() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const user = useSelector((store)=> store.app.user);
  const toggle = useSelector((store)=> store.movie.toggle);
  
  //this custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies()
  useUpcomingMovies();
 

  useEffect(()=>{
    if(!user){
      navigate("/");
    }
  },[]);
  
 
  return (

    <div>
          {/* <Header/>
          <div>
            {
              toggle ? <SearchMovie/> : (
                <>
                 <MainContainer/>
                 <MovieContainer/>
                </>
              )
            }
           
          </div> */}
          <Header />
            <div>
                {
                    toggle ? <SearchMovie /> : (
                        <>
                            <MainContainer />
                            <MovieContainer />
                        </>

                    )
                }

            </div>
    </div>
  )
}
