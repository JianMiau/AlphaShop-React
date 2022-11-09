import styled from 'styled-components'
const InputStyle = styled.div`
margin:0 ;
width: ${(props) => props.width}% ; 
.radio-group {
  box-sizing: border-box ;
  width: 100% ;
  display: flex ;
  border: 3px solid black ;
  border-radius: 4px ;
  margin-bottom: 15px ;

& input[type=radio] {
  width: 1.5rem ;
  height: 1.5rem ;
  margin:  26px ;
  background-color: #aaa;
  }
.radio-info {
  width: 100% ;
}
.radio-title {
  display: flex ;
  justify-content: space-between ;
  padding: 5px 26px 0 ;
}
.radio-text, .radio-price{
  font-size: 1.4rem ;
  line-height: 2rem ;
  font-weight: 400 ;
}
& .radio-period {
  font-size: 1.2rem ;
   line-height: 2rem ;
   padding:  5px 26px 0 ;
   font-weight: 400 ;
}
}
`

function RadioInput(props) {
  return (
    <InputStyle width={props.width}>
      <label className='radio-group' data-price='0'>
        <input id='shipping-standard' type='radio' name='shipping' defaultChecked={props.check} />
        <div className='radio-info'>
          <div className='radio-title'>
            <div className='radio-text'>{props.title}</div>
            <div className='radio-price'>{props.price}</div>
          </div>
          <div className='radio-period'>{props.content}</div>
        </div>
        <div className='radio-box-border' />
      </label>
    </InputStyle>

  )
}
export default RadioInput
