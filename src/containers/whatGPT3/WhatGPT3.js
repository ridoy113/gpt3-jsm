import React from 'react';
import { Feature } from '../../components/indes';
import './whatGPT3.css';




const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title="What is GPT-3" text="Save your favorite articles to read offline, sync your reading lists across devices and customize your reading experience with the official Wikipedia app.lists programs which can be used to play OGG audio and video." />
            </div>

            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>
                    The possibilities beyond your imagination
                </h1>
                <p>Explore The Library</p>
            </div>


            <div className='gpt3__whatgpt3-container'>

                <Feature title="ChatBox" text="Wikipedia is hosted by the Wikimedia Foundation, a non-profit organization that also." />
                <Feature title="KnowledgeBase" text="Take some photos and upload them to meet our monthly thematic challenge" />
                <Feature title="Education" text="Files are available under licenses specified on their description page. All structured data from the file namespace is available." />

            </div>
        </div>
    );
};

export default WhatGPT3;