import styled from "styled-components"
const InputStyle = styled.div`
margin:0 ;
width: ${(props) => props.width}% ; 
.input-group {
  box-sizing: border-box ;
  width: 100% ;
  display: flex ;
  flex-direction: column ;
  font-size: 1.8rem ;
  padding: 3% ;
 & .input-label {
  margin-bottom: 10px ;
 }
  & input {
    font-size: 1.5rem ;
    padding: 5px ;
    border-radius:10px;
  }
}

`

function Input(props) {
  return (
    <InputStyle width={props.width}>
      <div className="input-group">
        <div className="input-label">{props.label}</div>
        <input type={props.type} placeholder={props.placeholder} />
      </div>
    </InputStyle>

  )

}

export default Input