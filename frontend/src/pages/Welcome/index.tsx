import React, { useState,useCallback} from 'react';
import {useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';
import { Container, Title, Error} from './styles';

const Welcome:React.FC  = () =>{
  const history = useHistory()
  const [inputText, setInputText] = useState('')
  const [inputError, setInputError] = useState('')

  const handleStart = useCallback(() =>{
    if(!inputText){
      setInputError('Por favor informe o nome do úsuario')
      return
    }

    toast.success(`Seja bem vindo ao sistema ${inputText}`)
    setTimeout(() =>{
      history.push('/home')
      setInputText('')
      setInputError('')
    },2000)
  },[ inputText, history])

  return(
    <Container hasError={!!inputError}>
      <h1> Seja bem-vindo ao teste técnico da <Title>TEM</Title> </h1>
      <input
        type="text"
        placeholder="Informe seu Nome"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        />
        {inputError && <Error>{inputError}</Error>}
      <span> Para melhorar sua usabilidade durante a aplicação por favor informe seu nome.</span>
      <span> Clique no botão "Prosseguir" para continuar </span>
      <button type="button" onClick={handleStart}> Prosseguir</button>
    </Container>
  )
}

export default Welcome;
