import React from 'react'
import './index.css'

function TopContent() {
    return (
        <div className='h-screen pt-28 w-5/6 bg-white px-8'>
            <div className='pt-28 font-semibold'>
                <h2 className='text-7xl'>I am <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>Erik Hedlund</span></h2>
                <p className='text-5xl pt-4'>Software dev student</p>
                <a href={"#"} className='text-4xl text-white bg-blue-500 inline-block rounded-md p-6 mt-6 transition delay-75 hover:bg-blue-600'>Contact me</a>
            </div>
        </div>
    )
}

export default TopContent