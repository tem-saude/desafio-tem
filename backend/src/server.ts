import 'reflect-metadata';
import cors from 'cors';
import express, {Request, Response,NextFunction} from 'express';
import 'express-async-errors'
import dotevn from 'dotenv';
import './database';
import routes from './routes';
import AppError from './errors/AppError'
dotevn.config()

const app = express();
app.use(cors());
app.use(express.json())
app.use(routes);

app.use((error:Error, request:Request, response:Response, _:NextFunction) =>{
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status:'error',
      message: error.message
    })
  }

  return response.status(500).json({
    status:'error',
    message: 'Internal server error'
  })
})


app.listen(process.env.SERVER_PORT);

export default app;
