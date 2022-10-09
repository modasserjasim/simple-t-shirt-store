import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('Matir Ring');

const Grandpa = () => {
    const [house, setHouse] = useState(0);
    const gift = 'Diamond Ring'
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h1>Grandpa</h1>
                <section className='flex'>
                    <Father house={house} gift={gift}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;