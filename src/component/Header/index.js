import NavList from './NavList'
import NavLogo from './NavLogo'
import AcLogo from './AcLogo'
import NavToggle from './NavToggle'
import HeaderStyle from './HeaderStyle'
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
