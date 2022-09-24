import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header'
import TopContent from './top_content'
import SocialMedia from './social_media'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='flex justify-center'>
    <Header/>
    <TopContent/>
    <SocialMedia/>
  </div>
  
)
