import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, gift }) => {
    return (
        <div>
            <h3>MySelf</h3>
            <p><small>House: {house}</small></p>
            <section>
                <Special house={house} gift={gift}></Special>
            </section>
        </div>
    );
};

export default Myself;