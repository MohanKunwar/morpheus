import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Banner.css';

const Banner = props => {
    return (
        <Carousel
            // showArrows
            infiniteLoop
            autoPlay
            interval={2000}
            showThumbs={false}
            showStatus={false}
            emulateTouch
            stopOnHover= {false}
        >
            {
                props.banners.map((banner, index) =>
                    <div key={index}>
                        <img src={banner.src} alt={banner.title} />
                        <p className="legend">{banner.body}</p>
                    </div>
                )
            }
        </Carousel>
    )
}
export default Banner;
