// Footer
import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
            <div className="card-container">
                    <div className='footer-area'>
                        <div className='footer-khozinfo'>
                        <img src={require("../../assets/images/khozinfo.png")} alt="Khozinfo Logo" id="khoz-logo" />
                        <h3>Connecting Buyers And Sellers Digitally</h3>
                        <p>We help you explore the market and assist you in finding your needs.</p>
                        <img src={require("../../assets/images/facebook.svg")} alt="facebook" className="social-icons" obnClick={() => window.open("https://www.facebook.com/khozinfo/")}/>
                        <img src={require("../../assets/images/twitter.svg")} alt="twitter" className="social-icons" onClick={() => window.open("https://twitter.com/khozinfo")} />
                        <img src={require("../../assets/images/instagram.svg")} alt="instagram" className="social-icons" onClick={() => window.open("https://instagram.com/khozinfo")} />
                        </div>
                        <div className='footer-navigate'>
                        <h4>Navigation</h4>
                           <ul>
                              <li>Carrer</li>
                              <li>Privacy Policy</li>
                              <li>About Us</li>
                              <li>FAQ's</li>
                              <li>Contact</li>
                           </ul>
                        </div>
                        <div className='footer-contacts'>
                            <h4>Contacts</h4>
                            <img src={require("../../assets/images/place.svg")} alt="place svg" />
                            <label>Kalikanagar, Butwal-11</label> <br />
                            <img src={require("../../assets/images/call.svg")} alt="call svg" />
                            <label>071-547678</label> 
                            <br /> <label><pre>  +977 9857011016</pre></label>
                            <img src={require("../../assets/images/mail.svg")} alt="mail svg" />
                            <a title="Click To Send Mail" href="mailto:contact@khozinfo.com">contact@khozinfo.com</a>

                        </div>
                        <div className='footer-app-links'>
                            <h4>App Links</h4>
                            <div className="apple">
                            <img src={require("../../assets/images/apple.svg")}alt="apple svg" />
                            
                            <p>Download on the </p>
                            <h2>App Store</h2>
                            
                            </div>
                            <div className="android">
                            <img src={require("../../assets/images/google-play.svg")} alt="google play svg"/>
                        
                        <p>Android app on </p>
                        <h2>Google Play</h2>
                        
                            </div>
                        </div>
                    </div>
                    </div>
            </footer>
        )
    }
}

export default Footer;