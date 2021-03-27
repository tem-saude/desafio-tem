import React,{useCallback} from 'react';
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FiPower} from 'react-icons/fi'
import {Exit} from './styles'

const Button:React.FC  = () =>{
  const history = useHistory();

  const handleExit = useCallback(() =>{
    toast.success('Obrigado, volte sempre!');
    setTimeout(() =>{
      history.push('/')

    },1000)
  }, [history])
  return(
    <Exit>
    <button type="button" onClick={handleExit}>
    <FiPower size={20} color="##666666"/>
    <span> Sair</span>
    </button>
  </Exit>
  )
}


export default Button;
