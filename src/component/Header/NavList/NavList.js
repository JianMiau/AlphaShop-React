import styled from 'styled-components'
const NavListStyle = styled.div`
 display: none ;
 width: 100%;
 .nav-list{
  list-style: none ;
  display: flex ;
  padding: 0;
 }
  /*RWD mobile first*/
  /* NavList* 大於1000px才出現*/
 @media (min-width: 1000px) {
  width: 100%;
  display: flex ;
  .nav-item {
  margin-right: 16px;
}
  .nav-link {
    display: flex ;
    font-size: 1.4rem ;
    color: black;
    text-decoration: none ;
    white-space: nowrap;
  }
}
  /*大於1440px字體和間距放大*/
 @media (min-width: 1440px) {
  .nav-item {
  margin-right: 32px;
}
  .nav-link {
    font-size: 1.6rem ;
  }
 }
`

function NavList() {
  return (
    <nav className='navbar-menu'>
      <NavListStyle>
        <ul className='nav-list site-menu-list'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>男款</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>女款</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>最新消息</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>客製商品</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>聯絡我們</a>
          </li>
        </ul>
      </NavListStyle>
    </nav>
  )
}

export default NavList
