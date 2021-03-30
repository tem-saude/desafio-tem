import React, { FormEvent, useCallback, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import validator from 'validator';
import Header from '../../components/Header';
import Select from '../../components/Select';
import api from '../../services/api';
import { Container, Content, Form } from './styles';




const Register:React.FC = () =>{
    const history = useHistory();
    const [patient, setPatient] = useState('');
    const [doctor, setDoctor] = useState('');
    const [appointment_date, setAppointmentDate] =useState('')

  const handleSubmit = useCallback(async (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    try{
      let formErrors = false;

      if(validator.isEmpty(patient)){
        formErrors = true;
        toast.warning('Por favor informe o nome paciente')
        return
      }
      if(validator.isEmpty(doctor)){
        formErrors = true;
        toast.warning('Por favor informe o nome do médico')
        return
      }

      if(validator.isEmpty(appointment_date)){
        formErrors = true;
        toast.warning('Por favor informe a data do agendamento')
        return
      }

      await api.post('/appointments',{
        patient,
        doctor,
        appointment_date
      })
      toast.success('Agendamento cadastradado com sucesso')
      history.push('/home')
    }catch(error){
      toast.error('Não foi possivel realizar o agendamento.')
    }

  },[appointment_date, doctor,patient, history])

  return(
    <>
      <Header/>
     <Content>
       <div>
         <Link to="/home">
          <FiArrowLeft size={20}color="#aaa"/>
         </Link>
       </div>

     </Content>
      <Container>
          <Form onSubmit={handleSubmit}>
            <h1> Para realizar o agendamento preencha as informações abaixo</h1>
            <div>
              <span> Nome do paciente</span>
              <input
               type="text"
               name="name"
               placeholder="Informe no nome do paciente"
               value={patient}
               onChange={(e) => setPatient(e.target.value)}
               />
            </div>

            <div>
              <span> Nome do médico </span>
              <Select
                name="doctor"
                label="doctor"
                value={doctor}
                onChange={(e) => {setDoctor(e.target.value)}}
                options ={[
                {value: 'Flavia' , label:'Flavia'},
                {value: 'Otavio', label:'Otavio'},
                {value: 'Ana', label:'Ana'},
                {value : 'Rodrigo', label: 'Rodrigo'},
              ]}
               />
            </div>

            <div>
              <span>Data do agendamento</span>
              <input
               type="datetime-local"
               value={appointment_date}
               onChange={(e) => setAppointmentDate(e.target.value)}
                />

            </div>

            <button type="submit"> Cadastrar</button>

          </Form>
      </Container>
    </>
  )
}


export default Register;
