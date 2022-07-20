import React from 'react';
import { Feature } from '../../components/indes';
import './Features.css'


const featuresData = [
    {
        title: 'Improving end distrusts instantly',
        text: 'Independent developers have also released many unofficial apps for reading Wikipedia articles. Some apps load content from the Wikipedia site and process it; other apps use the MediaWiki API.'
    },
    {
        title: 'Become the tended active',
        text: 'Independent developers have also released many unofficial apps for reading Wikipedia articles. Some apps load content from the Wikipedia site and process it; other apps use the MediaWiki API.'
    },
    {
        title: 'Message or am nothing',
        text: 'Independent developers have also released many unofficial apps for reading Wikipedia articles. Some apps load content from the Wikipedia site and process it; other apps use the MediaWiki API.'
    },
    {
        title: 'Really boy law count',
        text: 'Independent developers have also released many unofficial apps for reading Wikipedia articles. Some apps load content from the Wikipedia site and process it; other apps use the MediaWiki API.'
    },
]


const Features = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>The Feature is Now and You Just Need To Realize It. Step into Future Today & Make it Happy</h1>
                <p>Request Early Access to Get Started</p>
            </div>

            <div className='gpt3__features-container'>
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    );
};

export default Features;