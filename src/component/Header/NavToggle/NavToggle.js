import styled from 'styled-components'
import toggleIcon from "../../icons/toggle.svg"
const ToggleStyle = styled.div`
  display: flex ;
  width: 100% ;
  align-items: center;
  .navbar-toggle {
    display: none ;
  }
    /*RWD mobile first*/
    /*小於1000px 漢堡排出現*/
  @media (min-width: 1000px) {
    display: none ;
  }
 
`

function NavToggle() {
  return (
    <>
      <ToggleStyle>
        <input id='navbar-toggle' className='navbar-toggle' type='checkbox' />
        <label htmlFor='navbar-toggle' className='burger-container'>
          <img src={toggleIcon} alt='toggle-nav' />
        </label>
      </ToggleStyle>
    </>
  )
}
export default NavToggle
