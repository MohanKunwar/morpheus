import React from 'react';
import './Spinner.css';
const Spinner = () => {
    return (
        <div className="loader">
            <div id="first-box" className="box">
                <img className='magnifier-img' src={require('../../assets/images/magnifier.svg')} alt='magnifier img' />
            </div>
            <div id="second-box" className="box">

            </div>
            <br />
            <div id="third-box" className="box">

            </div>
            <div id="fourth-box" className="box">

            </div>
        </div>
    )
}
export default Spinner;