import React from 'react';
import {Link} from 'react-router-dom'
import { Container, Title } from './styles';

const Welcome:React.FC  = () =>{
  return(
    <Container>
      <h1> Seja bem-vindo ao teste técnico da <Title>TEM</Title> </h1>
      <span> Clique no botão "Prosseguir" para continuar </span>
      <Link to="/home"> Prosseguir</Link>
    </Container>
  )
}

export default Welcome;
