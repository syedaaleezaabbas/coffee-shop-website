import React from 'react'
import Image from 'next/image'
import "../css-files/blogs.css"

const Blogs = () => {
    return (
        <section className='our-blogs-section'>
            <h2 className='section-title'>
                <span className='first-word'>OUR</span>
                <span className='second-word'>BLOGS</span>
            </h2>
            <div className='blogs-container'>
                <div className='blog-card'>
                    <Image src="/images/blog2.jpg" alt="coffeeblog2" className='blog-image' width={250} height={250} />
                    <h3 className='blog-title'>Tasty And Refreshing Coffee</h3>
                    <p className='blog-author'>By John / 30th October, 2024</p>
                    <p className='blog-description'>Discover the rich aromas and flavors that define the perfect cup of coffee. From the beans to the brew, we delve into the secrets of making coffee thats more than just a morning fix—its an experience.</p>
                    <button className='blog-button'>Get It Now</button>
                </div>

                <div className='blog-card'>
                    <Image src="/images/blog1.webp" alt="coffeeblog2" className='blog-image' width={250} height={250} />
                    <h3 className='blog-title'>Tasty And Refreshing Coffee</h3>
                    <p className='blog-author'>By John / 30th October, 2024</p>
                    <p className='blog-description'>Discover the rich aromas and flavors that define the perfect cup of coffee. From the beans to the brew, we delve into the secrets of making coffee thats more than just a morning fix—its an experience.</p>
                    <button className='blog-button'>Get It Now</button>
                </div>

                <div className='blog-card'>
                    <Image src="/images/blog3.jpeg" alt="coffeeblog2" className='blog-image' width={250} height={250} />
                    <h3 className='blog-title'>Tasty And Refreshing Coffee</h3>
                    <p className='blog-author'>By John / 30th October, 2024</p>
                    <p className='blog-description'>Discover the rich aromas and flavors that define the perfect cup of coffee. From the beans to the brew, we delve into the secrets of making coffee thats more than just a morning fix—its an experience.</p>
                    <button className='blog-button'>Get It Now</button>
                </div>
            </div>
        </section>

    )
}

export default Blogs
