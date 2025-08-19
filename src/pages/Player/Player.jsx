import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  // fetching video data through url and using id as key
  const {id} = useParams();

  //functionality for back arrow icon
  const navigate = useNavigate();

  // initialise the API data
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    "published_at": "",
    typeof: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmFjNDgyMGJjMDE2MTY0MzQxYTRjZTA3MDNmNTgxYSIsIm5iZiI6MTc1NTU5MDQwNC4xNjMsInN1YiI6IjY4YTQyZjA0M2EzMDg4MDQ2YjZkZWQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wQIwLB8m0lo8GRGJeMYPjl1oDFwhkiYaDlSUgPwfAEE'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

  },[])
  return (
    <div className='player'>
      {/* functionality of onclick on back arrow */}
      <img src={back_arrow_icon} alt="" onClick={()=> {navigate(-2)}}/>

      {/* for displaying the video */}
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='trailor' frameBorder='0' allowFullScreen></iframe>

      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
