import React from 'react'
import './Header.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className='Header'>
      <div className='header_left'>
        <AccountCircleIcon />
      </div>
      <div className='header_search'>

      </div>
      <div className='header_right'>

      </div>
    </div>
  )
}

export default Header