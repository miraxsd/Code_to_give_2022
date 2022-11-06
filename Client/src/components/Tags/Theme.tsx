import React, { ReactElement } from 'react'
import { IconBaseProps } from 'react-icons'
import '../Tags/Theme.scss'

interface ThemeProps {
    name: string,
    icon: ReactElement<IconBaseProps>,
    color?: string
}
const Theme = ({name, icon, color}:ThemeProps) => {
  return (
    <div className='theme-tag' style={{backgroundColor: color}}>
        <p className='theme-name'>{name}</p>
        <i>{icon}</i>
    </div>
  )
}

Theme.defaultProps = {
    color: "#D9F9C6"
}

export default Theme