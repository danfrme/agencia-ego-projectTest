import React from 'react';
import logo from './images/logos/logo.png';
import gray from './images/gray/gray.png';
import PrincipalMenu from './PrincipalMenu';
import { NavLink } from 'react-router-dom';
import './styles/headerStyle.css'

export default function Header() {

    const handdleMenu = () => {
        const menu = document.querySelector('.principal-menu-wrapper');
        const background = document.querySelector('.menu-background');
        const body = document.querySelector('body');
 
        body.classList.add('menu-displayed');
        background.classList.add('blackout');
        menu.classList.add('showMenu');
    }

    return (
        <header className='Rectangle'>
            <a href='http://www.agenciaego.com.ar/' target='_blank'><img className='Logo' src={logo} alt='website logo'/></a>
            <ul className='nav-bar'>
                <NavLink className='nav-link' to='/' exact activeStyle={{color:'red'}} >
                    <li className='model'>Modelos</li>
                </NavLink>
                <li className='ficha'>Ficha de modelo</li>
            </ul>
            <div className='Men' onClick={handdleMenu}>
                <p>Menu</p>
                <img className='Gray' src={gray} alt='website menu' />
            </div>
            <PrincipalMenu />
        </header>
    )
}
