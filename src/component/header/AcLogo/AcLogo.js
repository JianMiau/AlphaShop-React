import styled from "styled-components"
import acLogo from "../../icons/logo.svg"
import shopLogo from "../../icons/shop.svg"
const AClogoStyle = styled.div`
.header-logo-container {
  display: flex;
  align-items: center ;
  justify-content: flex-end ;
  position: relative;
  right: 70% ;
  .ac-logo {
    margin-right: 8px;
  }
  @media screen and (max-width:1500px) {
      right: 35%;
  }
   @media screen and (max-width:1300px) {
      right: 0;
  }
}
`

export default function AcLogo() {
  return (
    <AClogoStyle>
      <a className="header-logo-container" href="#">
        <div className="ac-logo">
          <img src={acLogo} alt="ac-logo" />
        </div>
        <div className="ac-title">
          <img src={shopLogo} alt="ac-title" />
        </div>
      </a>
    </AClogoStyle>

  )
}