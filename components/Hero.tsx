import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-7xl">
                    <h1 className="mb-5 text-8xl font-bold">Begin Your Journey</h1>
                    <p className="mb-5 text-xl py-6">Welcome to RoamHub, where journeys begin and adventures never end. Discover the world at your fingertips, explore seamless travel experiences, and unlock the gateway to unforgettable destinations. Whether you're seeking serene escapes or bustling cityscapes, RoamHub is your ultimate companion in crafting your perfect travel tale. Start your odyssey today and let RoamHub be your compass to boundless exploration.</p>
                    <button className="btn btn-primary">
                        <Link 
                        href='/dashboard/dash'
                        className='text-xl font-bold'
                        >Get Started</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero