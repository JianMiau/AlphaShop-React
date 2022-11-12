import styled from "styled-components"
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
export default AClogoStyle