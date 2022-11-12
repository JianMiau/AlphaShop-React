import styled from "styled-components";
const StepperBarStyle = styled.div`
margin: 0;
position: relative ;
.progress-group {
  display: flex ;
  font-size: 1.2rem ;
  align-items: center ;
 
  & .progress-icon {
    width:20% ;
    height: 15px ;
    display: flex ;
    align-items: center ;
    margin-right: 5px ;
    /*如果頁面步驟大於該頁step代表已完成表單，不出現步驟號碼*/
    & .text p {
      width: 24px;
      height: 24px;
      border-radius: 50% ;
      text-align:center ;
      background-color: ${props => props.active ? 'black' : 'lightgrey'};
      color: white;
      margin-right: 5px ;
      display: ${props => props.step > props.stepNumber ? 'none' : 'block'}; 
    }
  }
  & .progress-label {
    width: 80% ;
    display: none ;
  }
   /*如果頁面步驟大於該頁step代表已完成表單，出現完成勾勾圖示*/
  & .complete-logo {
    display:${props => props.step > props.stepNumber ? 'block' : 'none'};
  }
}
/*RWD mobile first/
/*大於 375px 進度條才出現label*/
@media (min-width: 375px) {
  /*注意優先級問題*/
  .progress-group { 
    & .progress-label {
    display: block;
    text-align:center ;
    color: ${props => (props.active ? 'black' : 'grey')};
  }
  }
}

 /*大於1200px才出現進度條*/
@media (min-width: 1200px) {
  &:not(:last-child)::after {
    content: '';
    top: 50%;
    left: calc(100% + 32px) ;
    position: absolute ;
    width: 60px ;
    height: 2px ;
    background-color: ${props => props.active ? 'black' : 'lightgrey'};
  }
} 

`
export default StepperBarStyle