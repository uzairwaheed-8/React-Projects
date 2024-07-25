/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import img from '../assets/blob 5.png';
import img_2 from '../assets/blob6.png';
import "@fontsource/karla"; // Defaults to weight 400
import "@fontsource/karla/400.css"; // Specify weight
import "@fontsource/karla/400-italic.css"; // Specify weight and style
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Home = () => {
    const navigate = useNavigate();
    
    const handleClick = () =>{
        navigate('/Qs') 
    }
    return (
        <div className="home">
        <span><img  className="img_1" src={img}/></span>
        <div className='box'>
        <h1 style={{fontSize : "xx-large"}}>Quizzical</h1>
        <p style={{fontSize : "xx-large"}}>Quizzical is a quiz app that lets you take quizzes. </p>
        <button className='btn_1' onClick={handleClick}>Start Quiz</button>
        </div>
        </div>
    );
}
export default Home;