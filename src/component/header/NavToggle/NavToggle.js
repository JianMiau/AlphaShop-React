import styled from 'styled-components'
const ToggleStyle = styled.div`
input.navbar-toggle {
  display: none ;
}
img {
  width:10px ;
  height:10px ;
   display: none ;
}

`

function NavToggle () {
  return (
    <>
      <ToggleStyle>
        <input id='navbar-toggle' className='navbar-toggle' type='checkbox' />
        <label for='navbar-toggle' className='burger-container'>
          <img src='https://lh3.googleusercontent.com/j0ijaF3yeyxE5cL-5D625BX39-Y3lmbjkDqEBoj38ety5XSvIWdctwsLAYdZGXLp7zUSRrIvXGbRBBBvcuXVxTyN0_lOuvxwNl-09j3Ehvqw0_e17dpBXgRWoDzm64iqVrLOGuWdgQ=w1200' alt='toggle-nav' />
        </label>
      </ToggleStyle>
    </>
  )
}
export default NavToggle
