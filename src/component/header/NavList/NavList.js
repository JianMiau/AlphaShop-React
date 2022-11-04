import styled from "styled-components"
const NavListStyle = styled.div`
 width: 100%;
 .nav-list{
  list-style: none ;
  display: flex ;
  padding: 0;
 }

.nav-item {
  margin-right: 32px;
  .nav-link {
    font-size: 1.5rem ;
    color: black;
    text-decoration: none ;
    @media screen and (max-width: 1200px) {
      font-size: 1.0rem ; 
    }
  }
}
`

function NavList() {
  return (
    <nav className="navbar-menu">
      <NavListStyle>
        <ul className="nav-list site-menu-list">
          <li className="nav-item">
            <a className="nav-link" href="#">男款</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">女款</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">最新消息</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">客製商品</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">聯絡我們</a>
          </li>
        </ul>
      </NavListStyle>
    </nav>
  )
}

export default NavList