import NavList from "./navList"
import NavLogo from "./navLogo"
import AcLogo from "./acLogo"
import styled from "styled-components"
const HeaderStyle = styled.div`
 width: 100% ;
 padding: 0 11.45%;
  box-sizing: border-box ;
  display: flex ;
  align-items: center ;
  justify-content: space-between ;
`
export default function Header(props) {
  return (

    <header className="header">
      <HeaderStyle>
        <NavList />
        <AcLogo />
        <NavLogo />
      </HeaderStyle>
    </header>


  )
}