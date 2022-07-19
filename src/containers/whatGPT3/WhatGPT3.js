import React from 'react';
import { Feature } from '../../components/indes';
import './whatGPT3.css'


const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature />
            </div>

            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>
                    The possibilities beyond your imagination
                </h1>
                <p>Explore The Library</p>
            </div>


            <div className='gpt3__whatgpt3-container'>
                <Feature/>
                <Feature/>
                <Feature/>
            </div>
        </div>
    );
};

export default WhatGPT3;