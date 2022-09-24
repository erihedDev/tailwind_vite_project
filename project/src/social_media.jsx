import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function SocialMedia() {
    return (
        <div className='flex flex-col fixed right-0 bottom-0 text-4xl text-gray-900'>
            <FontAwesomeIcon className="m-4" icon={faLinkedin}/>
            <FontAwesomeIcon className="m-4" icon={faGithub}/>
        </div>
    )
}

export default SocialMedia