import React from 'react'
import './index.css'

function TopContent() {
    return (
        <div className='h-screen pt-24 w-5/6'>
            <div className='pt-24'>
                <h2 className='text-7xl font-semibold'>I am <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>Erik Hedlund</span></h2>
                <p className=' text-5xl font-semibold pt-4'>Software dev student</p>
            </div>
        </div>
    )
}

export default TopContent