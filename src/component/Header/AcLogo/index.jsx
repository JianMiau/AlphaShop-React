import acLogo from '../../../icons/logo.svg'
import shopLogo from '../../../icons/shop.svg'
import AClogoStyle from './AcLogoStyle'
function AcLogo() {
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
