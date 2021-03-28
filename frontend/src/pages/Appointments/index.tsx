import React, { useCallback, useEffect, useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import { transformDate } from '../../helpers/transformDateToUTC';
import api from '../../services/api';
import { Container, Content, Item } from './styles';

interface AppointmentData{
  id:string;
  patient: string;
  doctor: string;
  appointment_date: string;
}

const Appointments:React.FC = () =>{
  const history = useHistory()
  const [appointments, setAppoiment] = useState<AppointmentData[]>([] as AppointmentData[])

  useEffect(() =>{
    api.get('/appointments').then(response =>{
      setAppoiment(response.data)
    })
  },[])

  const handleDeleteAppointment = useCallback(async(id:string) =>{
    try{
      await api.delete(`/appointments/${id}`)
      toast.success('Agendamento cancelado com sucesso!');
      history.push('/home')


    }catch(error){
      toast.error('Houve um erro ao deletar o agendamento')
    }

  },[history])

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
              <Link to={`/appointments/${appointment.id}`}>
               <FiEdit size={23} color="#e83f5b"/>
              </Link>
              <FiTrash size={23} color="#5965e0" onClick={() => handleDeleteAppointment(appointment.id)}/>
            </div>
          </Item>
         ))}
        </Content>
    </Container>
    </>
  )
}


export default Appointments;
