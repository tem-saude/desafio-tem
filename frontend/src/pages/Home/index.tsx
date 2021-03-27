import React  from 'react';
import { Link} from 'react-router-dom';
import ExitButton from '../../components/Button'

import {Container,LeftContent,RightContent, Content} from './styles'
import createAppointmentImage from '../../assets/createAppointment.png'
import listAppointmentImage from '../../assets/listAppointment.png'


const Home:React.FC  =() =>{

  return(
  <>
    <Container>
      <ExitButton/>

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
