import React, {useState, useCallback} from 'react';
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import {Container, Form, Content} from './styles'
import Select from '../../components/Select'

import Header from '../../components/Header'

const Register:React.FC = () =>{
    const [name, setName] = useState('');
    const [doctor, setDoctor] = useState('');
    const [appointmentDate, setAppointmentDate] =useState('')

    const handleSubmit = useCallback(async(data:any)=>{

    },[])
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
               value={name}
               onChange={(e) => setName(e.target.value)}
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
               value={appointmentDate}
               onChange={(e) => setAppointmentDate(e.target.value)}
                />
                <p>{appointmentDate}</p>
            </div>

            <button type="submit"> Cadastrar</button>

          </Form>
      </Container>
    </>
  )
}


export default Register;
