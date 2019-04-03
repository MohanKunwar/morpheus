import React from 'react';
import Carousel from 'nuka-carousel';
import './Banner.css';

const Banner = props => {
    return (
        <Carousel
            autoplay={true}
            autoplayInterval={3000}
            pauseOnHover={false}
            wrapAround={true}
            width="100%"
            className="banner_container"
        >
            {
                props.banners.map((banner, index) =>
                    <div key={index}>
                        <img src={banner.src} alt={banner.title} />
                        <p className="banner_text">{banner.body}</p>
                    </div>
                )
            }
        </Carousel>
    )
}
export default Banner;
