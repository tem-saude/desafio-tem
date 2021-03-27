import React from 'react';
import {useHistory} from 'react-router-dom';
import {FiPower} from 'react-icons/fi'
import {Container,LeftContent,RightContent, Content, Exit} from './styles'
import createAppointmentImage from '../../assets/createAppointment.png'
import listAppointmentImage from '../../assets/listAppointment.png'


const Home:React.FC  =() =>{

  const history = useHistory();
  return(
  <>
    <Container>
        <Exit>
          <button type="button">
          <FiPower size={20} color="##666666"/>
          <span> Sair</span>
          </button>
        </Exit>
        <h1> O que você deseja fazer? </h1>
       <Content>
        <LeftContent >
            <img src={createAppointmentImage} alt="Create Appointment Icon"/>
            <strong> Criar um novo Agendamento </strong>
            <button type="button"> Clique Aqui </button>
        </LeftContent>

        <RightContent>
          <img src={listAppointmentImage} alt="Create Appointment Icon"/>
          <strong> Consultar  Agendamentos </strong>
          <button type="button"> Clique Aqui </button>
        </RightContent>
       </Content>

    </Container>
    </>
  )
}

export default Home;
