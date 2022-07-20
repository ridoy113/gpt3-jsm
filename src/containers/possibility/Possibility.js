import React from 'react';
import './possibility.css'
import possibility from '../../assets/possibility.png';



const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img src={possibility} alt="possibility" />
            </div>
            <div className='gpt3__possibility-content'>
                <h4>Request Access to Get Started</h4>
                <h1 className='gradient__text'>The possibility are beyond your imagination</h1>
                <p>Files are available under licenses specified on their description page. All structured data from the file namespace is available under the Creative Commons CC0 License; all unstructured text is available under the Creative Commons Attribution.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    );
};

export default Possibility;