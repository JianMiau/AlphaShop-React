import NavList from './NavList/NavList'
import NavLogo from './NavLogo/NavLogo'
import AcLogo from './AcLogo/AcLogo'
import styled from 'styled-components'
const HeaderStyle = styled.div`
 width: 100% ;
 padding: 0 11.45%;
  box-sizing: border-box ;
  display: flex ;
  align-items: center ;
  justify-content: space-between ;
`
function Header(props) {
  return (

    <header className='header'>
      <HeaderStyle>
        <NavList />
        <AcLogo />
        <NavLogo />
      </HeaderStyle>
    </header>

  )
}
export default Header
