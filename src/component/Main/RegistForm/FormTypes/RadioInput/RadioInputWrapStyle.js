import styled from 'styled-components'
const RadioInputWrapStyle = styled.div`
margin:0 ;
width: ${(props) => props.width}% ;


/*Radio表單和上面Form-title距離*/
  padding-top: 24px ;
& .radio-group {
  height: 60px;
  display: flex ;
  /*選到時才變黑色*/
  border: 3px solid ${props => props.check ? 'black' : 'FFFFFF'} ;
  color: ${props => props.check ? 'black' : 'grey'};
  border-radius: 4px ;
  margin-bottom: 15p 13px;
  display: flex ;
  align-items: center ;
  padding: 7px;

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