// import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// importing Link which was div before

const TitleCards = ({title, category}) => {


//   const cardsRef = useRef();

// //use effect method
// const handleWheel= (event)=> {
//     event.preventDefault();
//     cardsRef.current.scrollLeft += event.deltaY;
// };

// useEffect(()=>{
//   const currentRef = cardsRef.current;
//   cardsRef.addEventListener('wheel', handleWheel);

//   return () => {
//     currentRef.removeEventListener('wheel', handleWheel);
//   };
// }, []);


const [apiData, setApiData] = useState([]);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmFjNDgyMGJjMDE2MTY0MzQxYTRjZTA3MDNmNTgxYSIsIm5iZiI6MTc1NTU5MDQwNC4xNjMsInN1YiI6IjY4YTQyZjA0M2EzMDg4MDQ2YjZkZWQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wQIwLB8m0lo8GRGJeMYPjl1oDFwhkiYaDlSUgPwfAEE'
  }
};

useEffect(()=> {
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
})



  return (
    <div className='titl-cards'>
      <h2>{title ? title: "Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card, index)=>{
          // getting path from card
            return <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
