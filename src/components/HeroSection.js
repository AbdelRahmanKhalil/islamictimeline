import React from 'react'
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    
    return (
        <div className='hero-container'>
            <video src="/intro.mp4" autoPlay loop muted />
            <h1>THE REVELATION BEGINS</h1>
                <p>Archangel Gabriel meets Prophet Muhammad. 
                    Prophet Muhammad runs to his wife Khadija bint Khwaylid 
                    who introduces him to Waraqa ibn Nawfal, a hanif adhering to the religion of Abraham.</p>
        </div>
    )
}

export default HeroSection
