import styled from "styled-components"
const NavToggleStyle = styled.div`
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
export default NavToggleStyle