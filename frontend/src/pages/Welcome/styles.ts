import styled, {keyframes} from 'styled-components'
import {shade} from 'polished'
import * as colors from '../../config/colors'


const showContent = keyframes`

 0%{
   opacity: 0;
 }

 25%{
   opacity: 0.5;
 }

 50%{
   opacity: 0 .7
 }

 100%{
   opacity:1;
 }
`

export const Container = styled.div`
 width: 100%;
 max-width:600px;
 height: 300px;
 margin:200px auto;
 padding: 20px;
 border-radius:20px;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 text-align:center;
 box-shadow: 0 0 4px 4px ${colors.textHighlight};
 background:rgba(255,255,255,0.5);
 animation: ${showContent} 2s ease-out;

 h1{
   font-size: 30px;
   width: 100%;
   max-width: 400px;
   margin: 0 auto;
   text-align:center;
   color: ${colors.title}
 }

 span{
   margin: 10px 0;
   color:${colors.text};
   font-size: 15px;
 }


 a{
   width: 235px;
   height: 50px;
   margin-top: 20px;
   text-align:center;
   background:${colors.green};
   color:${colors.white};
   display:flex;
   justify-content:center;
   align-items:center;
   border-radius:30px;
   transition: all 0.8s ease-out;

   &:hover{
     background:${shade(0.2, '#4cd62b')}
   }

 }

`



export const Title = styled.strong`
 color:${colors.red};
 cursor: pointer;

 &:hover{
   color:${shade(0.2, '#e83f5b')};
  border-bottom: 1px solid ${colors.red}
 }
`
