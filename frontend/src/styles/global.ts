import {createGlobalStyle} from 'styled-components';
import 'react-toastify/dist/ReactToastify.css'
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

body .Toastify__toast-container{
  margin-top:20px;
  padding: 20px;
  color:#fff;
  opacity:0.8;
  font-size: 14px;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success{
  background:#50d386;

}

body .Toastify .Toastify__toast-container .Toastify__toast--error{
  background:#fcf80d;

}


body .Toastify .Toastify__toast-container .Toastify__toast--warning{
  background:#fc0d21;

}


body .Toastify .Toastify__toast-container .Toastify__toast--info{
  background:#36bcf1;
}
`
