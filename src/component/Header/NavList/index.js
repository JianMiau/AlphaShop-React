import NavListStyle from "./NavListStyle"
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
