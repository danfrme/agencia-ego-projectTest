import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/CarShowStyle.css';
import Camry from './images/uploads/camry.png';
import Corolla from './images/uploads/corolla.png';
import CHR4 from './images/uploads/cruiser.png';
import Etios from './images/uploads/etios.png';
import Hilux from './images/uploads/hilux.png';
import innova from './images/uploads/innova.png';
import Hiace from './images/uploads/prado.png';
import Prius from './images/uploads/prius-1.png';
import RAV4 from './images/uploads/rav-4.png';
import SW4 from './images/uploads/sw-4.png';
import Hilux2 from './images/uploads/toyota-86.png';
import Yaris from './images/uploads/yaris.png';
import vermodelo from './images/vermodelo/negro-fill.png';

export default function CarShow(props) {

    const formatToCurrency = (amount) => {
        return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
    }

    const getPicture = (name) => {
        switch(name) {
         case 'Camry':  
            return Camry
         case 'Corolla': 
            return Corolla
         case 'C-HR': 
            return CHR4
         case'Etios':  
            return Etios
         case'innova': 
            return innova
         case'Hilux':  
            return Hilux
         case'Hiace':  
            return Hiace
         case 'RAV4':  
            return RAV4
         case'SW4': 
            return SW4
         case'Hilux GR-Sport': 
            return Hilux2
         case'Yaris':  
            return Yaris
         case 'Prius':
            return Prius
         default:
             return Prius
        }
    }

    return (
        <NavLink className='link-description' to={`/${props.index}/`} exact>
        <div className='auto-miniatura'>
            <div className='car-title'>{props.car_name}</div>
            <p>{props.car_year} | {`$ ${formatToCurrency(props.car_price)}`}</p>
            <img src={getPicture(props.car_name)} alt='auto' />
            <img className='Negro-Fill Negro-fill-hide' src={vermodelo} alt='ver modelo' />
        </div>
        </NavLink>
    )
}
