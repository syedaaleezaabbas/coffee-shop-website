import React from 'react'
import Image from 'next/image'
import "../css-files/hero.css"

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-image'>
                <Image src="/images/hero.webp" alt="coffee beans" layout="fill" objectFit='cover' />
            </div>
            <div className='hero-content'>
                <h2>Fresh Coffee In<br />The Morning</h2>
                <p>Start your day with the perfect cup of coffee. Our expertly<br />
                    crafted brews will awaken your senses and fuel your passion!</p>
                <button className='cta-button'>
                    Get It Now
                </button>
            </div>
        </section>
    )
}

export default Hero
