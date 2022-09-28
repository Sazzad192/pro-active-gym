import React from 'react';
import './Calculation.css';

const Calculation = () => {
    return (
        <div>
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
                <button>15 s</button>
                <button>30 s</button>
                <button>45 s</button>
                <button>60 s</button>
            </div>

            <div>
                
            </div>
                
        </div>
    );
};

export default Calculation;