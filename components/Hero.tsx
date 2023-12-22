import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="hero min-h-screen"  style={{backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/03/27/16/50/beach-2179624_1280.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-7xl">
                    <h1 className="mb-5 text-8xl font-bold">Begin Your Journey</h1>
                    <p className="mb-5 text-xl">Welcome to RoamHub, where journeys begin and adventures never end. Discover the world at your fingertips, explore seamless travel experiences, and unlock the gateway to unforgettable destinations. Whether you're seeking serene escapes or bustling cityscapes, RoamHub is your ultimate companion in crafting your perfect travel tale. Start your odyssey today and let RoamHub be your compass to boundless exploration.</p>
                    <button className="btn btn-primary">
                        <Link href='app/dashboard/page.tsx'>Get Started</Link>
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Hero