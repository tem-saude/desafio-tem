import styled from 'styled-components';

import * as colors from '../../config/colors'

export const Container = styled.div`
 width:100%;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;


`


export const Content = styled.div`
width: 100%;
max-width: 600px;
margin: 40px auto;
border: 1px solid ${colors.blueDark};
border-radius:8px;
padding: 40px 20px;
h1{
  color:${colors.text};
  font-size: 23px;
  line-height:28px;
  text-align:center;


}

`


export const Item = styled.div`
 margin-top: 30px;
 display:flex;
 justify-content:space-between;
 align-items:center;
 background:#fff;
 padding: 20px;
 border: 2px solid #ccc;
 border-radius:8px;

 p{
   margin: 5px;
 }

 div{
   strong{
     color:${colors.text};
     padding-right:8px;
   }

   p{
     color:${colors.text}
   }
 }

 div + div{
   width: 70px;
   display:flex;
   justify-content:space-between;

   svg{
     cursor: pointer;

     &:hover{
        filter: brightness(80%)
     }
   }
 }

`;
