import styled from 'styled-components';
import * as colors from '../../config/colors'

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
