import React from 'react'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function TopContent() {
    return (
        <div className='h-screen pt-28 w-5/6 bg-white px-8'>
            <div className='pt-28 font-semibold'>
                <h2 className='text-7xl'>I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>Erik Hedlund</span></h2>
                <p className='text-5xl pt-4'>A software dev student</p>
                <div className='text-4xl mt-6'>
                    <a href={"#"} className='text-white bg-blue-500 inline-block rounded-md mt-4 p-6 transition duration-150 hover:bg-blue-600'>Contact me</a>
                </div>
            </div>
        </div>
    )
}

export default TopContent