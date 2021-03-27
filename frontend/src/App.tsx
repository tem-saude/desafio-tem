import React from 'react';
import {ToastContainer} from 'react-toastify'
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes'
import GlobalStyles from './styles/global'

const App:React.FC  = () =>{
  return(
    <>
    <BrowserRouter>
     <Routes/>
     <ToastContainer  className="toast-container"  autoClose={3000}/>
    </BrowserRouter>
    <GlobalStyles/>
    </>
  )
}

export default App;
