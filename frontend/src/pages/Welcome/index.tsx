import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/index';
import { Container, Content, Error, Title } from './styles';

const Welcome:React.FC  = () =>{
  const history = useHistory()
  const [inputText, setInputText] = useState('')
  const [inputError, setInputError] = useState('')
  const {addUser} = useAuth()

  const handleStart = useCallback(() =>{
    if(!inputText){
      setInputError('Por favor informe o nome do úsuario')
      return
    }

    toast.success(`Seja bem vindo(a) ao sistema ${inputText}!`)
    setInputText('')
    setInputError('')
    addUser(inputText)
    setTimeout(() =>{
      history.push('/home')
    },2000)
  },[ inputText, history, addUser])

  return(
    <Container>
      <Content hasError={!!inputError}>
      <h1> Seja bem-vindo ao teste técnico da <Title>TEM</Title> </h1>
      <span> Para melhorar sua usabilidade durante a aplicação por favor informe seu nome.</span>
      <input
        type="text"
        placeholder="Informe seu Nome"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        />
        {inputError && <Error>{inputError}</Error>}
      <span> Clique no botão "Prosseguir" para continuar </span>
      <button type="button" onClick={handleStart}> Prosseguir</button>
      </Content>

    </Container>
  )
}

export default Welcome;
