import React from 'react'
import LogoImage from '../../assets/logo.svg'
import './header.styles.css'

const Header = () =>{
  return (
      <div>
      <header className='header'>
          <div>
              <img src={LogoImage} alt='logotipo da listinha'/>
          </div>
      </header>
      </div> )
}

export default Header