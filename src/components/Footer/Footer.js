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
                        <img src={require("../../assets/images/Khozinfo.svg")} alt="Khozinfo Logo" id="logo" /> 
                        <h3>Connecting Buyers And Sellers Digitally</h3>
                        <p>We help you explore the market and assist you in finding your needs.</p>
                        <img src={require("../../assets/images/facebook.svg")} alt="facebook" className="social-icons" onClick={() => window.open("https://www.facebook.com/khozinfo/")}/>
                        <img src={require("../../assets/images/twitter.svg")} alt="twitter" className="social-icons" onClick={() => window.open("https://twitter.com/khozinfo")} />
                        <img src={require("../../assets/images/instagram.svg")} alt="instagram" className="social-icons" onClick={() => window.open("https://instagram.com/khozinfo")} />
                        </div>
                        <div className='footer-navigate'>
                        <h4 className="title">Navigation</h4>
                           <ul>
                              <li>Carrer</li>
                              <li>Privacy Policy</li>
                              <li>About Us</li> 
                              <li>FAQ's</li>
                              <li>Contact</li> 
                           </ul>
                        </div>
                        <div className='footer-contacts'>
                            <h4 className="title">Contacts</h4>
                            
                            <span><img src={require("../../assets/images/place.svg")} alt="place svg" /> 
                            <label>Kalikanagar, Butwal-11</label>
                            </span>
                            <span><img src={require("../../assets/images/call.svg")} alt="call svg" /> 
                            <label>071-547678</label>
                            <label><pre style={{margin: "0px", padding : "0px"}}>  +977 9857011016</pre></label>
                             </span>

                            <span><img src={require("../../assets/images/mail.svg")} alt="mail svg" /> 
                            <a title="Click To Send Mail" href="mailto:contact@khozinfo.com">contact@khozinfo.com</a> </span>
                        
                        </div>
                        <div className='footer-app-links'>
                        {/* <div className="footer-apps"> */}
                            <h4 className="title">App Links</h4>
                            <div className="apple">
                            <img src={require("../../assets/images/apple.svg")}alt="apple svg" />
                            
                            <p>Download on </p>
                            <h2>App Store</h2>
                            
                            </div>
                            <div className="android">
                            <img src={require("../../assets/images/google-play.svg")} alt="google play svg"/>
                        
                        <p>Download on </p>
                        <h2>Play Store</h2>
                            </div>
                        {/* </div> */}

                        </div>
                    </div>
                    <div className="footer-base">
                        <p>© All rights reserved. Created with love by Khoz Informatics Pvt Ltd. </p> 
                        </div>
                    </div>
            </footer>
        )
    }
}

export default Footer;