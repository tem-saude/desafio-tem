import 'reflect-metadata'
import express from 'express';
import cors from 'cors'
import env from './config/env';
import routes from './routes';
import './database'
const app = express();
app.use(cors());
app.use(express.json())
app.use(routes);


app.get('/', (request, response) =>{
  return response.status(200).json({message: 'Tem Saude teste tecnico'})
})


app.listen(env.port, () => console.log('Server is runing'));
