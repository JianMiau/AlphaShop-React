import styled from 'styled-components'
import acLogo from '../../icons/logo.svg'
import shopLogo from '../../icons/shop.svg'
const AClogoStyle = styled.div`
  display: flex;
  align-items: center ;
  justify-content: flex-end ;
  position: relative;
  right: 70% ;
  .ac-logo {
    margin-right: 8px;
  }
  @media screen and (max-width:375px) {
    width: 100%;
    display: flex;
    position: relative;
    right: 0%;
    justify-content: center ;
  }
  
  @media screen and (max-width:1300px) {
      right: 0;
  }
 
  @media screen and (max-width:1500px) {
      right: 35%;
  }
`

function AcLogo() {
  return (

    <a className='header-logo-container' href='#'>
      <AClogoStyle>
        <div className='ac-logo'>
          <img src={acLogo} alt='ac-logo' />
        </div>
        <div className='ac-title'>
          <img src={shopLogo} alt='ac-title' />
        </div>
      </AClogoStyle>
    </a>

  )
}
export default AcLogo
