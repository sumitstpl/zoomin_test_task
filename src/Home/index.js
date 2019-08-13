import React from 'react';
import Tiger from '../assets/imgs/tiger.jpeg';
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import './style.css';

const Home = (props) => {
  return (
    <div className="home">
      <h2>Image Zoom in-out demo</h2>
      <section>
        <PinchZoomPan>
          <img alt='' src={Tiger} />
        </PinchZoomPan>
      </section>
    </div>
  );
};

export default Home;