import React from 'react';
import './Calculation.css';

const Calculation = (props) => {
    const {exerciseTime} =props;

    let totalTime = 0;
    for(const time of exerciseTime){
        totalTime = totalTime + parseInt(time.time);
    }

    
    function btnBreak(peram){
        const text = document.getElementById(peram);
        const second = text.innerText;
        localStorage.setItem('breakTime', second);
        return second;
    }
    

    return (
        <div className='position'>
            <header>
                <h3>Name: K.M. SAZZADUL ISLAM</h3>
                <p>Dhaka, Bangadesh</p>
            </header>

            <div className='sub-details'>
                <h3>75 <span className='small'>KG</span></h3>
                <h3>6.5 <span className='small'>fit</span></h3>
                <h3>26 <span className='small'>yrs</span></h3>
            </div>

            <h3>Add A Break</h3>

            <div className='sub-details'>
                <p id='btn-break' onClick={()=>btnBreak('btn-break')}>15</p>
                <p id='btn-break2' onClick={()=>btnBreak('btn-break2')}>30</p>
                <p id='btn-break3' onClick={()=>btnBreak('btn-break3')}>45</p>
                <p id='btn-break4' onClick={()=>btnBreak('btn-break4')}>60</p>
            </div>

            <h3>Exercise Details</h3>

            <div className='time'> <h4>Exercise time</h4> <h4>{totalTime} sec</h4> </div>
            <div className='time'> <h4>Break time</h4> <h4>{second} sec</h4> </div>

            <button className='btn-acivity'>Activity Completed</button>
                
        </div>
    );
};

export default Calculation;