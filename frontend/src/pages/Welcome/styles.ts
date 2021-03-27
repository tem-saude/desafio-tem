import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Container = styled.div`
 width: 100%;
 max-width:600px;
 margin:200px auto;
 padding: 20px;
 border-radius:20px;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 text-align:center;

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

 }

`


export const Title = styled.strong`
 color:${colors.red};
 cursor: pointer;

 &:hover{
  border-bottom: 1px solid ${colors.red}
 }
`
