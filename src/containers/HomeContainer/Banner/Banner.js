import React from 'react';
import Carousel from 'nuka-carousel';
import './Banner.css';
class Banner extends React.Component{
    state= {
        handleHidden: true
    }

    handleImageLoad= () => {
        this.setState({handleHidden: false})
        let carousel= document.querySelector(".banner_container");
        carousel.style.background= "none";
    }
render(){
    return(
        <Carousel
        autoplay={true}
        autoplayInterval={3000}
        pauseOnHover={false}
        wrapAround={true}
        width="100%"
        className="banner_container"
    >
        {
            this.props.banners.map((banner, index) =>
                <div key={index}>
                    <img 
                    onLoad= {this.handleImageLoad}
                    src={banner.src} 
                    alt={banner.title} />
                    <p hidden={this.state.handleHidden} className="banner_text">{banner.body}</p>
                </div>
            )
        }
    </Carousel>
    )
}
}

export default Banner;