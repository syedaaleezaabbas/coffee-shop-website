import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import "../css-files/footer.css"

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className='social-links'>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href=""><FaLinkedin /></a>
                    <a href="#"><FaGithub /></a>
                </div>

                <div className='footer-nav'>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>
                    <a href="#contact">Contact</a>
                </div>


                <p className='footer-text'>Created by <span className='name'><i>Aleeza.</i></span> | All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Footer
