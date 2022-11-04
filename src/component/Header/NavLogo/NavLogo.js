import searchIcon from '../../icons/search.svg'
import cartIcon from '../../icons/cart.svg'
import moonIcon from '../../icons/moon.svg'

import styled from 'styled-components'
const NavLogoStyle = styled.div`
width: 100% ;
  text-align:center ;
  list-style: none ;
  display: flex ;
  justify-content: flex-end ;
.nav-item {
  margin-right: 32px;
}
`
function NavLogo () {
  return (
    <ul className='nav-list site-action-list'>
      <NavLogoStyle>
        <li className='nav-item'>
          <img src={searchIcon} alt='search' />
        </li>
        <li className='nav-item'>
          <img src={cartIcon} alt='cart' />
        </li>
        <li className='nav-item'>
          <img src={moonIcon} alt='moon' />
        </li>
      </NavLogoStyle>
    </ul>
  )
}

export default NavLogo
