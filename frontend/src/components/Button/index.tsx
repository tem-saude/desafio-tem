import React,{useCallback} from 'react';
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FiPower} from 'react-icons/fi'
import {useAuth} from '../../hooks/index'
import {Exit} from './styles'

const Button:React.FC  = () =>{
  const history = useHistory();
  const {signOut, userName} = useAuth();

  const handleExit = useCallback(() =>{
    toast.success(`Obrigado ${userName}, volte sempre!`);

    setTimeout(() =>{
      history.push('/')
      signOut()
    },1000)
  }, [history, signOut, userName])
  return(
    <Exit>
    <button type="button" onClick={handleExit}>
    <FiPower size={20} color="#fff"/>
    <span> Sair</span>
    </button>
  </Exit>
  )
}


export default Button;
