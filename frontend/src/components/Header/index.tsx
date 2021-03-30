import React from 'react';
import {Container,Content,UserName} from "./styles"
import Button from '../Button'
import {useAuth} from '../../hooks'


const Header: React.FC  = () =>{
  const {userName} = useAuth()
  return(
    <>
      <Container>
      <div>
        <Content>
          <h1> Seja Bem Vindo(a) <UserName> {userName} ! </UserName></h1>
        </Content>
        <Button/>
      </div>
      </Container>
    </>
  )
}


export default Header;
