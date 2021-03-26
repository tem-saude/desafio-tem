import express from 'express';
import env from './config/env'
const app = express();


app.get('/', (request, response) =>{
  return response.status(200).json({message: 'Tem Saude teste tecnico'})
})


app.listen(env.port, () => console.log('Server is runing'));
