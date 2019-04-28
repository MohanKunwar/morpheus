import React from 'react'

const SocialLinks = ({ links }) => {
    return (
        links.length > 0 ?
            links.map((link, index) => {
                return (<GetIcon key={index} url={link} />)
            })
            : null
    )
}
const GetIcon = props => {
    console.log('url for icons', props.url);
    const url = props.url;
    if (url.includes('facebook')) {
        return (<img src={require('../assets/images/facebook.svg')}
            alt="facebook" className="social_icons" onClick={() => window.open(url)} />);
    } else if (url.includes('twitter')) {
        return (<img src={require('../assets/images/twitter.svg')}
            alt="twitter" className="social_icons" onClick={() => window.open(url)} />);
    } else if (url.includes('instagram')) {
        return (<img src={require('../assets/images/instagram.svg')}
            alt="instagram" className="social_icons" onClick={() => window.open(url)} />);
    } else if (url.includes('tripadvisor')) {
        // todo tripadvisor image
        return (<img src={require('../assets/images/instagram.svg')}
            alt="instagram" className="social_icons" onClick={() => window.open(url)} />);
    } else {
        // todo website image
        return (<img src={require('../assets/images/instagram.svg')}
            alt="instagram" className="social_icons" onClick={() => window.open(url)} />);
    }
}
export default SocialLinks