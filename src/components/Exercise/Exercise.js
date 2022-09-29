import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const {name, details, age, time, img} = props.exercise;
    const {addList} = props;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <div className='cart-content'>
                <h4>{name}</h4>
                <p className='detail'>{details}</p>
                <p>For Age: <span>{age}</span></p>
                <p>Time required: <span>{time}</span> s</p>
                <button onClick={() => addList(props.exercise)}>Add to list</button>
            </div>
        </div>
    );
};

export default Exercise;