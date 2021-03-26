import express from 'express';
import routes from './routes'
import env from './config/env';
const app = express();
app.use(express.json())
app.use(routes);


app.get('/', (request, response) =>{
  return response.status(200).json({message: 'Tem Saude teste tecnico'})
})


app.listen(env.port, () => console.log('Server is runing'));
