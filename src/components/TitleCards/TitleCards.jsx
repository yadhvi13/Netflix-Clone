// import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

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



  return (
    <div className='titl-cards'>
      <h2>{title ? title: "Popular on Netflix"}</h2>
      <div className="card-list">
        {cards_data.map((card, index)=>{
            return <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
