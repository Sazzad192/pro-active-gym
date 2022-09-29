import React, { useEffect, useState } from 'react';
import './Gym.css';
import logo from '../../picture/logo.jpg';
import Exercise from '../Exercise/Exercise';
import Calculation from '../Calculation/Calculation';
import { getStored } from '../Calculation/LocalStorage/storage';

const Gym = () => {
    const [exercise, setExercise] = useState([]);
    const [exerciseTime, setExerciseTime] = useState([]);

    useEffect(() =>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])

    useEffect(()=>{
        const storedTime = getStored();
        console.log(storedTime)
    },[])

    const addList = (exercise) =>{
        const newTime =[...exerciseTime, exercise];
        setExerciseTime(newTime);
    }

    return (
        <div className='container'>
            <div className='cart-container'>

                <header>
                    <img src={logo} alt="" />
                    <h1>Pro-Active-Gym</h1>
                </header>

                <h3>Select today's exercise</h3>
                <div className='all-cart'>
                    {
                        exercise.map(exercise => <Exercise 
                            key={exercise.id}
                            exercise ={exercise}
                            addList = {addList}></Exercise>)
                    }
                </div>
            </div>
            <div className='calculation-container'>

                <Calculation exerciseTime = {exerciseTime}></Calculation>
            </div>
        </div>
    );
};

export default Gym;