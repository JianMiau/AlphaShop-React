import { createGlobalStyle } from "styled-components";
const ResetStyle = createGlobalStyle`
  box-sizing: border-box;
  font-size: 62.5% ;
  margin: 0 ;
  padding: 0 ;
  ol, ul {
  list-style: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
`
export default ResetStyle