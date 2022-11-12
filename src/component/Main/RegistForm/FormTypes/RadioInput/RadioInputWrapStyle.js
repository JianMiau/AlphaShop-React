import styled from 'styled-components'
const RadioInputWrapStyle = styled.div`
margin:0 ;
width: ${(props) => props.width}% ;
/*Radio input選取到的樣式*/ 
& .radio-group:checked {
  border: 3px solid black ;
  color: black;
}
/*Radio表單和上面Form-title距離*/
  padding-top: 24px ;
& .radio-group {
  height: 60px;
  display: flex ;
  border: 3px solid grey ;
  color: grey;
  border-radius: 4px ;
  /* margin-bottom: 15px ; */
  padding: 7px 13px;
  display: flex ;
  align-items: center ;
& input[type=radio] {
  width: 1.5rem ;
  height: 1.5rem ;
  background-color: #aaa;
  margin: 0 13px ;
  }
& .radio-info {
  display: flex ;
  width: 100%;
  height: 100% ;
  flex-direction: column ;
  justify-content: center ;
  margin: 13px;
}
& .radio-title {
  display: flex ;
  justify-content: space-between ;
  margin-bottom: 10px ;
}
& .radio-text, .radio-price{
  font-size: 1.4rem ;
  line-height: 1.4rem ;
  font-weight: 400 ;
}
& .radio-period {
   font-size: 1.1rem ;
   line-height: 1.1rem ;
   font-weight: 400 ;
}
}
`
export default RadioInputWrapStyle