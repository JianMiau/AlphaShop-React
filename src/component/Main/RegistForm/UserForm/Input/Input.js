import styled from 'styled-components'
const InputStyle = styled.div`
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
 & .input-label {
  font-size: 1.2rem;
    font-weight: 700 ;
  margin-bottom: 10px ;
  color:#808080;
 }
  & input {
    font-size: 1.5rem ;
    color:#808080;
    padding: 12px 16px;
    border-radius:10px;
    height: 40px ;
  }
}
`

function Input (props) {
  return (
    <InputStyle width={props.width} marginRight={props.right}>
      <div className='input-group'>
        <div className='input-label'>{props.label}</div>
        <input type={props.type} placeholder={props.placeholder} maxLength={props.maxlength} />
      </div>
    </InputStyle>

  )
}

export default Input
