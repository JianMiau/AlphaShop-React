import styled from "styled-components";
import InputContainerStyle from "../../../../Styles/Common/InputContainerStyle"
const SelectInputWrapStyle = styled(InputContainerStyle)`
/*select title 畫面對齊*/
.input-label {
  position: relative;
  top: 5px;
}
.select-container {
    width: 95% ;
    margin: 0 ;
    height: 40px;
    line-height: 40px ;
    & select {
      font-size: 1.5rem ;
      width: 100% ;
      padding: 4px 16px;
      border-radius: 10px ;
      outline: 1px solid black;
  }
  }
`
export default SelectInputWrapStyle