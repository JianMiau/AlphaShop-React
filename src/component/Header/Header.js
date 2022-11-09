import NavList from './NavList/NavList'
import NavLogo from './NavLogo/NavLogo'
import AcLogo from './AcLogo/AcLogo'
import NavToggle from './NavToggle/NavToggle'
import styled from 'styled-components'
const HeaderStyle = styled.div`
 width: 100% ;
 height: 100% ;
 padding: 0 3%;
  box-sizing: border-box ;
  display: flex ;
  align-items: center ;
  justify-content: space-between ;
  @media (min-width: 800px) {
   padding: 0 11.45%;
  }
`
function Header(props) {
  return (
    <header className='header'>
      <HeaderStyle>
        <NavToggle />
        <NavList />
        <AcLogo />
        <NavLogo />
      </HeaderStyle>
    </header>
  )
}
export default Header
