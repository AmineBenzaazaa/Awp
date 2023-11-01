import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import Prod1 from "../images/page 2/Papier HYGIENIQUE  7x2.png";
import Prod2 from "../images/page 2/Papier HYGIENIQUE x4.jpg";
import Prod3 from "../images/page 2/Papier HYGIENIQUE x12.jpg";
import Prod4 from "../images/page 2/Papier HYGIENIQUE x24.jpg";
import Prod5 from "../images/page 2/Papier HYGIENIQUE x32.jpg";

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="../images/page 2/Papier HYGIENIQUE  7x2.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="../images/page 2/Papier HYGIENIQUE  7x2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src="../images/page 2/Papier HYGIENIQUE  7x2.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <img src="../images/page 2/Papier HYGIENIQUE  7x2.png" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                <img src="../images/page 2/Papier HYGIENIQUE  7x2.png" />
                    <p className="legend">Legend 5</p>
                </div>
            </Carousel>
        );
    }
};

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));