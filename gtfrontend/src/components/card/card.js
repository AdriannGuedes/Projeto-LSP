import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ carWash }) => {
    return (
        <Link to={`/detalhesCard/${carWash.id}`} className="card-link">
            <div className="card">
                <img src={carWash.image} alt={carWash.name} className="card-image" />
                <div className="card-details">
                    <h2 className="card-name">{carWash.name}</h2>
                    <p className="card-address">{carWash.address}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;