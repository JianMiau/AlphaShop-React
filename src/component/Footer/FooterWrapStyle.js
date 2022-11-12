import styled from 'styled-components'
const FooterWrapStyle = styled.div`
width: 100%;
display: none ;
background-color:#E5E5E5 ;
box-sizing: border-box;
.footer-container {
display: flex;
justify-content: space-between;
@media (min-width: 800px) {
  padding: 0 5% ;
  padding-top: 64px ;
}
@media (min-width: 1000px) {
  padding: 0 11.45% ;
  padding-top: 64px ;
}
}
.footer-logo-container {
  display:flex ;
  align-items: center ;
  img:last-child{
    margin-left: 8px;
  }
}
.section-title {
  font-size: 24px ;
}
.section-content {
  display: flex;
  flex-direction: column ;
  margin-top: 24px;
  & .page-link,.tel-info {
    font-size: 16px ;
    text-decoration: none ;
    color:#808080;
    margin-bottom: 8px;
  }
  & .social-icon-group {
    img:not(:last-child) {
      margin-right: 18px;
    }

  }
}
  /*大於800px 才出現footer 不然內容物太多容易擠壓*/
 @media (min-width: 800px) {
    display: block ;     
  }
`
export default FooterWrapStyle