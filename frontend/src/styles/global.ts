import {createGlobalStyle} from 'styled-components';
import * as colors from '../config/colors'


export default createGlobalStyle`


*{
  padding:0;
  margin:0;
  outline:0;
  box-sizing:border-box;
  font-family:'Inter', sans-serif;

}

html, body, #root{
  height:100%;
}


body{
  background:${colors.background};
}

body,input, button{
  font-size: 16px;
}

a{
  text-decoration:none;
}

button{
  cursor: pointer;
}

ul{
  list-style:none;
}
`
