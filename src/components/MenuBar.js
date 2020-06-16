import React from 'react';
import fill from './images/fill/fill-1@3x.png';
import './styles/menuBarStyle.css';

export default function MenuBar(props) {

    let is_order_clicked = false;
    let is_filter_clicked= false;

    const handdleMenu = (e) => {
        if (e.target.className === 'Ordenar-por') {
            const menu = document.querySelector('.Nada-De-menor-a-mayo');
            if (!is_order_clicked){
                menu.classList.add('show');
            } else {
                menu.classList.remove('show');
            }
            is_order_clicked = !is_order_clicked;

        } else if (e.target.className === 'Filtrar-por') {
            const menu_fill = document.querySelector('.menu-options-container');
            if (!is_filter_clicked){
                menu_fill.classList.add('menu-options-displayed');
            } else {
             menu_fill.classList.remove('menu-options-displayed');
            }
            is_filter_clicked = !is_filter_clicked;
        }
    }

    return (
        <div onClick={handdleMenu}  className='menu-bar'>
            <div className='Filtrar-por'>
                Filtrar por
                <img className='Fill-1 filtrar' src={fill} alt='menu options filtrar' />
            </div>
            <div className='menu-options-container'>
                <ul className='menu-options'>
                    <li className='Todos' onClick={props.update}>Todos</li>
                    <li className='Autos' onClick={props.Filter}>Autos</li>
                    <li className='Pickups-y-Comerciale' onClick={props.Filter}>Pickups y Comerciales</li>
                    <li className='SUVs-y-Crossovers ' onClick={props.Filter}>SUVs y Crossovers</li>
                </ul>
            </div>
            <div className='order-container'>
                <div className='order-button ' >
                <div className='Ordenar-por'>Ordenar por</div>
                <img className='Fill-1' src={fill} alt='menu options' />
            </div> 
        </div>
            <div className='Nada-De-menor-a-mayo' >
                <ul>
                    <li>Nada</li>
                    <li className='de-menor-a-mayor'onClick={props.OrderCars}>De Menor a mayor precio</li>
                    <li className='de-mayor-a-menor'onClick={props.OrderCars}>De Mayor a menor precio</li>
                    <li className='mas-nuevos'onClick={props.OrderCars}>Mas nuevos primero</li>
                    <li className='mas-viejos'onClick={props.OrderCars}>Mas viejos primero</li>
                </ul>
            </div>  
        </div>
    )
}
