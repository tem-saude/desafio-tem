import 'reflect-metadata';
import cors from 'cors';
import express, {Request, Response,NextFunction} from 'express';
import 'express-async-errors'
import dotevn from 'dotenv';
import './database';
import routes from './routes';
import AppError from './errors/AppError'
dotevn.config()


const whiteList =[
  'http://localhost:3000',
  'https://relaxed-knuth-291602.netlify.app'

]

const corsOptions ={
  origin: function(origin, callback){
    if(whiteList.indexOf(origin) !== -1 || !origin){
      callback(null, true)
    }else{
      callback(new Error('Not allowed by cors'))
    }
  }
}

const app = express();
app.use(cors(corsOptions));


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
