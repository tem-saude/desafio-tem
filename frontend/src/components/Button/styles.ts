import styled from 'styled-components';
import * as colors from '../../config/colors'

export const Exit = styled.div`

display:flex;
align-items:center;
width: 60px;
justify-content:space-between;
cursor: pointer;
color:#fff;

button{
  background:transparent;
  width: 100%;
  border:0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  color:${colors.white};

  &:hover{
  filter: brightness(90%);
  span{
    color:${colors.white};

  }
}


}

span{
  font-size: 18px;
  color:${colors.white}
}



`
