import styled from 'styled-components'
const ProgressControlStyle = styled.div`
width: 100%;
padding-bottom: 50px;
& .button-group {
  display: flex ;
  justify-content: space-between ;
}
& .next {
  background-color: #F67599 ;
  color: white;
  text-align: center ;
  line-height: 46px ;
  width: 35% ;
  height: 46px ;
  border-radius: 8px;
  border-color: transparent ;
  font-size: 1.5rem ;
  margin-top: 24px ;
  :hover {
    cursor: pointer;
  }
}
& .pre {
  background-color: transparent;
  text-align: center ;
  line-height: 46px ;
  width: 35% ;
  height: 46px ;
  border-radius: 8px;
  font-size: 1.5rem ;
  margin-top: 24px ;
  border-color: transparent ;
  outline: none ;
   :hover {
    cursor: pointer;
  }
  visibility:  ${props => (props.step !== 1 ? 'visible' : 'hidden')};
}
/*大於800px 主頁面會切到gird排版，按鈕padding需要調整*/
@media (min-width: 800px) {
padding-bottom: 0;
}
/*大於1200px 按鈕調整寬度*/
@media (min-width: 1200px) {
& .pre, .next {
  width: 25% ;
}
}
`
export default ProgressControlStyle