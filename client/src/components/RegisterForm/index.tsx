import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { FormEvent, useState } from 'react';

import { Container, Content } from "./styles";
import { FiArrowLeft } from 'react-icons/fi';

export function RegisterForm() {

  const [name, setName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');


  // POST
  async function handleRegister(event: FormEvent) {
    event.preventDefault();
    const result = {
      name,
      doctor,
      date,
    };
    try {
      const response = await api.post('/class', result);
      setName('');
      setDoctor('');
      setDate('');
      
      alert('Agendado!')
    } catch (err) {
      alert(err);
    }
  }

// Formulario
  return(
    <Container>
      <Content onSubmit={handleRegister}>
        <Link to="/" >
          <FiArrowLeft size={21} color="#fff" />
        </Link>
        <h2>Novo Agendamento</h2>
        <input 
          placeholder="Nome"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          placeholder="Doutor"
          value={doctor}
          onChange={event => setDoctor(event.target.value)}
        />

        <input 
          placeholder="Data" 
          value={date}
          onChange={event => setDate(event.target.value)}
        />

        <button type="submit">
          Salvar
        </button>
      </Content>
    </Container>
  );
}