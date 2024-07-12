import React from 'react';
import Card from './card';
import carWashes from '../../data/carWashData';

const CarWashList = () => {

    return (
        <div className="carwash-list-container">
            <div className="search-container">
                <input type="text" placeholder="Buscar lavagens" />
            </div>
            <div className="card-list">
                {carWashes.map((carWash) => (
                    <Card key={carWash.id} carWash={carWash} />
                ))}
            </div>
        </div>
    );
};

export default CarWashList;