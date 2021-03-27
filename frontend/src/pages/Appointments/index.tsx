import React from 'react'
import {FiEdit,FiTrash} from 'react-icons/fi'
import {Container, Content, Item} from './styles'

const Appointments:React.FC = () =>{
  return(
    <>
    <Container>
        <Content>
          <h1> Lista de agendamentos </h1>
          <Item>
            <div>
              <p> <strong>Nome do paciente:</strong> Lucas Alves Dos Santos </p>
              <p> <strong> Nome do médico: </strong> Ana Megale</p>
              <p> <strong> Data do agendamento: </strong> 25/03/2021 10:30</p>
            </div>
            <div>
              <FiEdit size={23} color="#e83f5b"/>
              <FiTrash size={23} color="#5965e0"/>
            </div>
          </Item>
        </Content>
    </Container>
    </>
  )
}


export default Appointments;
