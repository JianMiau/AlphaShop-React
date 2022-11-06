import styled from 'styled-components'
import acLogo from '../../icons/logo.svg'
import shopLogo from '../../icons/shop.svg'
const AClogoStyle = styled.div`
  width: 100% ;
.header-logo-container {
  display: flex;
  align-items: center ;
  width: 100%;
  .ac-logo {
    margin-right: 8px;
  }
  /*RWD mobile first*/
  @media (min-width: 375px) {
   position: relative ;
   left: 5%;
   margin-left: 0% ;
  }
  @media (min-width: 1000px) {
  margin-left: 43px;
  }
  }
  @media (min-width: 1440px) {
  margin-left: 86px;
  }

`

function AcLogo () {
  return (
    <AClogoStyle>
      <a className='header-logo-container' href='#'>
        <div className='ac-logo'>
          <img src={acLogo} alt='ac-logo' />
        </div>
        <div className='ac-title'>
          <img src={shopLogo} alt='ac-title' />
        </div>
      </a>
    </AClogoStyle>

  )
}
export default AcLogo
