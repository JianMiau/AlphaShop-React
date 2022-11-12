import styled from "styled-components";
const InputContainer = styled.div`
margin:0 ;
width: ${(props) => props.width}% ; 
margin-right: ${(props) => props.marginRight}%;
.input-group {
  box-sizing: border-box ;
  width: 100% ;
  display: flex ;
  flex-direction: column ;
  font-size: 1.8rem ;
  /*讓表單貼齊外框*/
  padding: 3% 0 ;
}
 .input-label {
  font-size: 1.2rem;
  font-weight: 700 ;
  margin-bottom: 10px ;
  color:#808080;
 }
`
export default InputContainer