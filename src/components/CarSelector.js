import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core'
import CarShow from './CarShow';

export class CarSelector extends Component {
    render() {
        return (
            <div className='cars-menu'>
                {this.props.cars ? 
                this.props.cars.map(element => 
                <CarShow
                    car_name={element.name} 
                    car_year={element.year} 
                    car_price={element.price} 
                    key={element.id}
                    index={element.id}
                /> ) :
                <CircularProgress className='circular-progress'/>
               }
            </div>
    )
}
}

export default CarSelector;
