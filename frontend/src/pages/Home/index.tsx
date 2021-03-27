import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header'

import createAppointmentImage from '../../assets/createAppointment.png';
import listAppointmentImage from '../../assets/listAppointment.png';
import { Container, Content, LeftContent, RightContent } from './styles';






const Home:React.FC  =() =>{

  return(
  <>
    <Header/>
    <Container>
        <h1> O que você deseja fazer? </h1>
       <Content>
        <LeftContent >
            <img src={createAppointmentImage} alt="Create Appointment Icon"/>
            <strong> Criar um novo Agendamento </strong>
           <Link to="/register">Clique Aqui </Link>
        </LeftContent>

        <RightContent>
          <img src={listAppointmentImage} alt="Create Appointment Icon"/>
          <strong> Consultar  Agendamentos </strong>
          <Link to="/dashboard"> Clique Aqui </Link>
        </RightContent>
       </Content>

    </Container>
    </>
  )
}

export default Home;
