import React, { useEffect, useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import Header from '../../components/Header';
import { Container, Content, Item } from './styles';
import api from '../../services/api'
import { transformDate } from '../../helpers/transformDateToUTC'

interface AppointmentData{
  id:string;
  patient: string;
  doctor: string;
  appointment_date: string;
}

const Appointments:React.FC = () =>{
  const [appointments, setAppoiment] = useState<AppointmentData[]>([] as AppointmentData[])
  useEffect(() =>{
    api.get('/appointments').then(response =>{
      setAppoiment(response.data)
    })
  },[])

  return(
    <>
    <Header/>
    <Container>
        <Content>
          <h1> Lista de agendamentos </h1>
         {appointments.map(appointment =>(

            <Item key={appointment.id}>
            <div>
              <p> <strong>Nome do paciente:</strong> {appointment.patient} </p>
              <p> <strong> Nome do médico: </strong> {appointment.doctor}</p>
              <p> <strong> Data do agendamento: </strong> {transformDate(appointment.appointment_date)}</p>
            </div>
            <div>
              <FiEdit size={23} color="#e83f5b"/>
              <FiTrash size={23} color="#5965e0"/>
            </div>
          </Item>
         ))}
        </Content>
    </Container>
    </>
  )
}


export default Appointments;
