import styled from 'styled-components';
import  * as colors from '../../config/colors'

export const Container = styled.header`
 width: 100%;
 height: 100px;
 background:${colors.title};
 > div{
   width: 100%;
   max-width:1200px;
   margin: 0 auto;
   padding: 20px;
   display: flex;
   flex-direction:row;
   justify-content:space-between;
   align-items:center;
 }

`;

export const Content = styled.div`

 h1{
   font-weight:600;
   font-size: 18px;
   color:#ccc;
   width:300px;
   text-align:center;
   color: orange;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content: center;
 }




`


export const UserName = styled.strong`
 color:#fff;
 margin-top: 8px;
`
