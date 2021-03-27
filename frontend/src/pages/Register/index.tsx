import React from 'react';
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import {Container, Form, Content} from './styles'

import Header from '../../components/Header'

const Register:React.FC = () =>{
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
          <Form>
            <h1> Para realizar o agendamento preencha as informações abaixo</h1>
            <div>
              <span> Nome do paciente</span>
              <input type="text" name="name" placeholder="Informe no nome do paciente"/>
            </div>

            <div>
              <span> Nome do médico </span>
              <select name="medic" defaultValue="disabled">
                <option> Lucas </option>
                <option> Sarah </option>
                <option> Jorge  </option>
                <option> Ana </option>
                <option> Vitória </option>
              </select>
            </div>

            <div>
              <span>Data do agendamento</span>
              <input type="datetime-local"/>
            </div>

            <button type="submit"> Cadastrar</button>

          </Form>
      </Container>
    </>
  )
}


export default Register;
