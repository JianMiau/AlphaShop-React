import toggleIcon from '@/icons/toggle.svg'
import NavToggleStyle from './NavToggleStyle'

function NavToggle() {
  return (
    <>
      <NavToggleStyle>
        <input id='navbar-toggle' className='navbar-toggle' type='checkbox' />
        <label htmlFor='navbar-toggle' className='burger-container'>
          <img src={toggleIcon} alt='toggle-nav' />
        </label>
      </NavToggleStyle>
    </>
  )
}
export default NavToggle
