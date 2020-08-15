import React from 'react';
import './card-style.css';

const Card = props => {
return(
    <div className="card text-center shadow">
        <div className="overflow">
        <img src={props.imgsrc} alt="Img 1" className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
             <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ex repudiandae reiciendis ipsum amet aspernatur impedit veritatis aut dolor consequatur!
            </p>
            <a href="#" className="btn btn-outline-success">VISIT US</a>
        </div>
    </div>
);
}

export default Card;