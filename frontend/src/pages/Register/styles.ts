import styled from 'styled-components';
import {shade} from 'polished'
import * as colors from '../../config/colors'

export const Container = styled.div`
height: 100%;
width: 100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`


export const Form = styled.form`
 width:100%;
 max-width: 600px;
 margin-top: 20px;
 border: 1px solid ${colors.textHighlight};
 padding: 40px 20px;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 border-radius: 8px;

  h1{
    font-size: 24px;
    text-align:center;
    color:${colors.text};
    margin-bottom:20px;
  }

div{
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  & + div{
    margin: 20px 0;
  }

  span{
    font-size: 18px;
    margin: 8px 0;
    color:${colors.text}
  }

  input[type='text']{
    width: 100%;
    max-width: 400px;
    height: 45px;
    border: 1px solid #ccc;
    border-radius:4px;
    padding-left: 8px;
    &:focus{
      border: 2px solid ${colors.blueTwitter};
    }

    &::placeholder{
      color:${colors.text}
    }



  }

  select {
    width: 100%;
    max-width: 400px;
    height: 45px;
    border: 1px solid #ccc;
    background:#fff;
    padding-left: 8px;
    cursor:pointer;
    font-size:14px;

    option{
      cursor: pointer;
      padding: 8px 0;
    }

    &:focus{
      border: 2px solid ${colors.blueTwitter}
    }
  }

  input[type="datetime-local"]{

    width: 100%;
    max-width: 400px;
    height: 45px;
    border: 1px solid #ccc;
    border-radius:4px;
    padding-left: 8px;

    &:focus{
      border: 2px solid ${colors.blueTwitter}
    }
  }
}

button{
    margin: 20px 0;
    width: 100%;
    max-width:400px;
    height:45px;
    background:${colors.blueTwitter};
    border: 0;
    color:#fff;
    font-weight:bold;
    border-radius:8px;

    &:hover{
      background:${shade(0.2, '#2aa9e0')}
    }
  }

`


export const Content = styled.div`
  padding: 10px;
  position:absolute;
  top: 18px;
  a{
    display:flex;
    align-items:center;
    color:#aaa;
  }
  div{
    display:flex;
    align-items:center;
    color:${colors.text}


  }

`
