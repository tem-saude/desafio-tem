import styled,{keyframes}from 'styled-components';
import {shade} from 'polished'
import * as colors from '../../config/colors'


export const MoveLeft  = keyframes`
 0%{
   transform: translateX(-80px)
 }

 100%{
   transform:translateX(0)
 }
`

export const MoveRight  = keyframes`
 0%{
   transform: translateX(80px)
 }

 100%{
   transform:translateX(0)
 }
`

export const Container = styled.div`
 width: 100%;
 max-width:900px;
 margin: 80px auto;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;


 h1{
   color:${colors.blueDark};
   text-transform:uppercase;
 }



`

export const Content = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  width:100%;
  margin: 100px auto;




`
export const LeftContent  = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 flex: 1;
 border: 1px solid ${colors.textHighlight};
 padding: 80px 20px;
 border-radius: 8px;
 margin: 0 20px;
 cursor: pointer;
 transition: all 0.3s ease-out;
 background:${colors.background};
 animation: ${MoveLeft} 2s ease-out;


 img{
   width: 100px;

   height: 100px
 }

 strong{
   margin: 20px 0;
   font-size: 25px;
   text-align:center;
   padding-bottom:20px;

 }


 button{
   width: 180px;
   height: 50px;
   background:#560791;
   border: 0;
   color:#fff;
   border-radius:30px;

   transition: all 0.8s ease-out;
   &:hover{
     background:${shade(0.2, '#560791')}
   }
 }

 &:hover{
   transform:translateY(-20px)
 }

`


export const RightContent = styled.div`
 flex:1;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 text-align:center;
 border: 1px solid ${colors.textHighlight};
 padding: 80px 15px;
 border-radius: 8px;
 margin: 0 20px;
 cursor: pointer;
 transition: all 0.3s ease-out;
 animation: ${MoveRight} 2s ease-out;
 &:hover{
   transform:translateY(-20px)
 }


 img{
   width: 70px;
   height: 70px;

 }

 strong{
   margin-top: 50px;
   font-size:25px;
   padding-bottom:15px;
 }

 button{
   width: 180px;
   height: 50px;
   background:#560791;
   margin-top: 20px;
   border: 0;
   color:${colors.white};

   border-radius:30px;
   transition: all 1s ease-out;
   &:hover{
     background:${shade(0.2, '#560791')}
   }
 }



`

export const Exit = styled.div`


position: absolute;
top:20px;
right: 60px;
display:flex;
align-items:center;
width: 60px;
justify-content:space-between;
cursor: pointer;

button{
  width: 100%;
  border:0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  &:hover{
  color:${colors.textHighlight};
  span{
    color:${colors.textHighlight};
  }
}


}

span{
  font-size: 18px;
  color:${colors.text}
}



`
