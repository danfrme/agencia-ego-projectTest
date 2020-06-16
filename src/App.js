import React, { Component } from 'react';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import CarSelector from './components/CarSelector.js';
import TechnicalFeatures from './components/TechnicalFeatures'
import { BrowserRouter as Router } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import ScrollToTop from 'react-router-scroll-top'
import Route from 'react-router-dom/Route';

import './App.css';

const api_url = 'https://challenge.agenciaego.tech/models';

export class App extends Component {
  constructor() {
    super();
    this.state = { 
      
    }
  }

  OrderCars = (e) => {
    switch (e.target.className) {
      case 'de-menor-a-mayor':
        this.setState({cars : this.state.cars.sort((a,b) => a.price - b.price)});
        break
      case 'de-mayor-a-menor':
        this.setState({cars : this.state.cars.sort((a,b) => b.price - a.price)});
        break
      case 'mas-nuevos':
        this.setState({cars : this.state.cars.sort((a,b) => b.year - a.year)});
        break
      case 'mas-viejos':
        this.setState({cars : this.state.cars.sort((a,b) => a.year - b.year)});
        break
    }
  }
 
  Filter = (e) => {
    let newCars = [];
    let i = 0;
    this.state.data.map(Element => {
      if(Element.segment === e.target.innerText){
        newCars[i] = Element;
        i++;
      }
      return newCars;
    })

    this.setState({
      cars: newCars
    })

  }  

  update = () => {
    fetch(api_url).then( resolve => {
      return resolve.json();
    }).then(data => {
      this.setState({
        data,
        cars: data
      })
    }); 
  }

  componentDidMount() {
    this.update(); 
  }

  render() {
    return (
      <Router>
      <ScrollToTop>
      <div className="App">
        <div className='menu-background'></div>
        <Header />
        <Route path='/' exact strict render={() => {
          return(
            <div>
              <h1 className='Descubr-todos-los-m'>Descubrí todos los modelos</h1>
              <MenuBar 
                OrderCars={this.OrderCars} 
                update={this.update}
                Filter={this.Filter}
              />
              <CarSelector cars={this.state.cars} />
            </div>
          )
          }} />

        {this.state.data ? 
          this.state.data.map(element => 
            <Route path={`/${element.id}/`} key={element.id} exact strict render={()=> {
               return(<TechnicalFeatures id={element.id} />)}} /> )  : 
            <CircularProgress />               
        }
      </div>
      </ScrollToTop>
      </Router>
    );
  }
}

export default App;
