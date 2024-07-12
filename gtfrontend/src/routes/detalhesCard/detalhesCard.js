import React from 'react';
import { useParams } from 'react-router-dom';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './detalhesCard.css';
import Cabecario from '../../components/cabecario/cabecario';
import carWashes from '../../data/carWashData';

const DetalhesCard = () => {
    const { id } = useParams();
    const carWash = carWashes.find(wash => wash.id === parseInt(id));

    if (!carWash) {
        return <p>Car Wash não encontrado.</p>;
    }

    return (
        <>
            <Cabecario />
            <div className="detalhes-container">
                <h2 className="titulocard">{carWash.name}</h2>
                <img src={carWash.image} alt={carWash.name} className="detalhes-image" />
                <div className="detalhes-content">
                    <h3 className="sobre">Por quê escolher a {carWash.name}?</h3>
                    <p className="textoSobre">Aqui na Detail Studio Car usamos o método
                        de pré lavagem, o qual através do uso de snow
                        foam e ação química de produtos específicos e
                        amigáveis, realizam uma pré lavagem na lataria,
                        evitando assim que partículas maiores de
                        sujeiras risquem a pintura.
                    </p>
                    <div className="detalhes-buttons">
                        <button className="detalhes-button-reserva">Reservar Horário</button>
                        <button className="detalhes-button-duvida">Dúvidas</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default DetalhesCard;