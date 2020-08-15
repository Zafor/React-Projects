import React, { Component } from 'react';
import Card from './CardUI';
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';

class Cards extends Component {
    
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Evening"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Bird"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Orange"/>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Cards;