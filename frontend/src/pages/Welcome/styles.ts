import styled, {keyframes,css} from 'styled-components'
import {shade} from 'polished'
import * as colors from '../../config/colors'

interface ContentProps{
  hasError: boolean;
}

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
 height:100%;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;



`;

export const Content = styled.div<ContentProps>`

max-width:600px;

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
  color: ${colors.title};
  padding: 20px;
}

input{
  margin: 30px 0 10px 0;
  width: 100%;
  max-width: 400px;
  height:45px;
  padding-left: 8px;
  border-radius: 8px;
  border: 2px solid #aaa;
  padding-left: 8px;
  ${(props) => props.hasError && css`
   border-color: ${colors.red}
  `}
}






span{
  width: 100%;
  max-width: 450px;
  margin: 3px 0;
  color:${colors.text};
  font-size: 15px;
}


button{
  border:0;
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


`;


export const Title = styled.strong`
 color:${colors.red};
 cursor: pointer;

 &:hover{
   color:${shade(0.2, '#e83f5b')};
  border-bottom: 1px solid ${colors.red}
 }
`

export const Error = styled.div`
 color:${colors.red};
 width: 100%;
 max-width:400px;
 padding: 10px 0;
 border-radius:8px;

`
