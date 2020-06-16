import React, { Component } from 'react';
import testimg from './images/featuresImg/img.png';
import highligh_img from './images/featuresImg/3.png';
import highlight_img_2 from './images/featuresImg/1.png'
import './styles/technicalFeaturesStyle.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import rightArrow from './images/scroll-menu-arrows/right.png';
import leftArrow from './images/scroll-menu-arrows/left.png';
import { CircularProgress } from '@material-ui/core'

const ArrowLeft = <img src={leftArrow} alt='scroll arrow' className='arrow' />
const ArrowRight =<img src={rightArrow} alt='scroll arrow' className='arrow' />
const api_url = 'https://challenge.agenciaego.tech/models';

const MenuItem = ({text, description}) => {
    return (
    <div className='menu-item'>     
        <p className='model-feature-title'>{text}</p>
        <p className='model-feature-description'>{description}</p> 
     </div>)
};

export class TechnicalFeatures extends Component {

    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        fetch(`${api_url}/${this.props.id}`).then( resolve => {
        return resolve.json();
            }).then(data => {
                this.setState({
                cars_test: data
            })
        });  
    }

    Menu = (list) =>(
        list.map(el => {
            return <MenuItem text={el.name} key={el.name} description={el.description} />;
    }));
    
    render() {
        const selected = 'item1';

        return (
            <div className='tech-features-wrapper'>
                <div className='first-container'>
                    <img className='tech-feat-img' src={testimg} alt='features'  />
                    <div className='principal-description'>
                        <h5 className='name'> {this.state.cars_test ? this.state.cars_test.name : <CircularProgress />} </h5>
                        <p className='title'>{this.state.cars_test ? this.state.cars_test.title : <CircularProgress />}</p>
                        <p className='description'>{this.state.cars_test ? this.state.cars_test.description : <CircularProgress />}</p>
                    </div>
                </div>

                <div className='second-container'>
                    {
                        this.state.cars_test ? 
                        <ScrollMenu
                            className='scroll.menu'
                            data={this.Menu(this.state.cars_test.model_features, selected)}
                            arrowLeft={ArrowLeft}
                            arrowRight={ArrowRight}
                        /> : 
                        <CircularProgress />
                    }
                </div>

                <div className='highligh-container'>
                    <div className='highligh-description-1'>
                        <p className='highligh-title-1'>{this.state.cars_test ? this.state.cars_test.model_highlights[0].title :<CircularProgress /> }</p>
                        <p className='highlight-description-1-p'>{this.state.cars_test ? this.state.cars_test.model_highlights[0].content : <CircularProgress /> }</p>
                    </div>
                    <img className='highligh-img-1' src={highligh_img} alt='highlight '  />
                </div>

                <div className='highligh-container'>
                    <img className='highligh-img-2' src={highlight_img_2} alt='highlight '  />
                    <div className='highligh-description-1'>
                        <p className='highligh-title-1'>{this.state.cars_test ? this.state.cars_test.model_highlights[1].title : <CircularProgress /> }</p>
                        <p className='highlight-description-1-p'>{this.state.cars_test ? this.state.cars_test.model_highlights[1].content : <CircularProgress /> }</p>
                    </div>
                </div>
            </div>
    )
}
}

export default TechnicalFeatures;
