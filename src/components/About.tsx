import React from 'react'
import Image from 'next/image'
import "../css-files/about.css"

const About = () => {
  return (
    <section className='about'>
      <h2>
        <span className='first-word'>ABOUT</span>
        <span className='second-word'>US</span>
      </h2>

      <div className='about-content'>
        <Image src="/images/about.avif" alt="Coffee" width={500} height={500} />

        <div className='about-text'>
          <h3>What Makes Our Coffee Special?</h3>
          <p>At Coffee Shop, we believe that every cup of coffee tells a story. Our beans are carefully sourced from the finest regions around the globe, ensuring a rich and aromatic flavor in every sip. What sets us apart is our commitment to quality—from hand-selecting the beans to expertly roasting them to perfection. Whether you’re starting your day or taking a well-deserved break, our coffee is crafted to deliver a truly exceptional experience, making each moment as special as the first. Discover the art of coffee with us, where passion meets perfection in every brew.</p>
          <br />
          <p>Coffee Shop is where your coffee journey begins. Each cup is made with passion, precision, and the finest beans, delivering an experience that’s both bold and smooth. Whether you’re a coffee connoisseur or just looking for your daily fix, we’ve got the perfect brew waiting for you.</p>
          <button className='about-button'>
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
