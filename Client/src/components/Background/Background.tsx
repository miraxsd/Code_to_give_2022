import React from 'react'
import '../Background/Background.scss'

interface BackgroundProps {
    children?: JSX.Element
}
const Background = ({children}: BackgroundProps) => {
  return (
    <div className='background'>
        {children}
    </div>
  )
}

export default Background