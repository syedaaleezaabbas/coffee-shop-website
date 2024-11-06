import React from 'react'
import Image from "next/image"
import "../css-files/menu.css"

const Menu = () => {
    return (
        <section className='menu'>
            <h2>
                <span className='first-word'>Our</span>
                <span className='second-word'>Menu</span>
            </h2>

            <div className='menu-container'>
                <div className='menu-item'>
                    <Image src="/images/menu1.jpg" alt="menu1" width={200} height={200} />
                    <p>Tasty and Healthy</p>
                    <div className='price-container'>
                        <span className='current-price'>$40.00</span>
                        <span className='cut-price'>$50.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/menu2.webp" alt="menu2" width={200} height={200} />
                    <p>Tasty and Healthy</p>
                    <div className='price-container'>
                        <span className='current-price'>$40.00</span>
                        <span className='cut-price'>$50.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/menu3.jpg" alt="menu3" width={200} height={200} />
                    <p>Tasty and Healthy</p>
                    <div className='price-container'>
                        <span className='current-price'>$40.00</span>
                        <span className='cut-price'>$50.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/menu4.jpg" alt="menu4" width={200} height={200} />
                    <p>Tasty and Healthy</p>
                    <div className='price-container'>
                        <span className='current-price'>$40.00</span>
                        <span className='cut-price'>$50.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/menu5.webp" alt="menu5" width={200} height={200} />
                    <p>Tasty and Healthy</p>
                    <div className='price-container'>
                        <span className='current-price'>$40.00</span>
                        <span className='cut-price'>$50.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/menu6.webp" alt="menu6" width={200} height={200} />
                    <p>Tasty and Healthy</p>
                    <div className='price-container'>
                        <span className='current-price'>$40.00</span>
                        <span className='cut-price'>$50.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

            </div>
        </section>
    )
}

export default Menu
