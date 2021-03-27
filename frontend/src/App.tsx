import React from 'react';
import {ToastContainer} from 'react-toastify'
import {BrowserRouter as Router} from 'react-router-dom';
import {AppProvider} from './hooks/index'
import Routes from './routes'
import GlobalStyles from './styles/global'

const App:React.FC  = () =>{
  return(
    <>
    <Router>
      <AppProvider>
      <Routes/>
      </AppProvider>
     <ToastContainer  className="toast-container"  autoClose={3000}/>
    </Router>
    <GlobalStyles/>
    </>
  )
}

export default App;
