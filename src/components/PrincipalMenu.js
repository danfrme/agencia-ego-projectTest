import React from 'react';
import './styles/PrincipalMenu.css';
import closeFill from './images/closeFill/fill-1@3x.png'
import { NavLink } from 'react-router-dom';

export default function PrincipalMenu() {

    const CloseMenu = () => {
        const menu = document.querySelector('.principal-menu-wrapper');
        const body = document.querySelector('body');
        const background = document.querySelector('.menu-background');

        background.classList.remove('blackout');
        body.classList.remove('menu-displayed');
        menu.classList.remove('showMenu');
    }

    const handdleClick = (e) => {
        window.addEventListener('click', function(e){   
            if (document.querySelector('.principal-menu-wrapper').contains(e.target)){
                CloseMenu()
            } 
          });
    }

    return (
        <div onClick={handdleClick} className='principal-menu-wrapper'>
            <div className='close' >
                Cerrar
                <img className='Fill-1' src={closeFill} alt='close principal menu' />
            </div>
            <ul className='first-menu'>
                <NavLink className='nav-link' to='/' exact><li >Modelos</li></NavLink>
                <li >Servicios y Accesorios</li>
                <li >Financiación</li>
                <li >Reviews y Comunidad</li>
            </ul>
            <ul className='second-menu'>
                <li >Toyota Mobility Service</li>
                <li >Toyota Gazoo Racing</li>
                <li >Toyota Híbridos</li>
            </ul>
            <ul className='third-menu'>
                <li >Concesionarios</li>
                <li >Test Drive</li>
                <li >Contacto</li>
            </ul>
            <ul className='fourth-menu'>
                <li >Actividades</li>
                <li >Servicios al Cliente</li>
                <li >Ventas Especiales</li>
                <li >Innovación</li>
                <li >Prensa</li>
                <li >Acerca de...</li>
            </ul>
        </div>
    )
}
