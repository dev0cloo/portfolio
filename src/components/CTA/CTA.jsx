import React from 'react'
import './CTA.css'

const CTA = () => {
  return (
    <div className='work'>
        <a href='#portfolio' className='btn'>My works</a>
    </div>
  )
}

export const Talk = () => {
  return (
    <div className='talk' >
       <a href='#contact' className='btn-primary btn'>Let's Talk</a>
    </div>
    
  )
}


export const Github = () => {
  return (
    <div className='github'>
        <a href='https://github.com' className='btn' target="_blank" rel="noreferrer">Github</a>
    </div>
  )
}

export const Demo = () => {
  return (
    <div className='demo'>
        <a href='https://github.com' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
    </div>
  )
}


export default CTA