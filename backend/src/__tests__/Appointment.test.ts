import {createConnection} from 'typeorm'
import app from '../server'
import request from 'supertest'



describe('Appointments Services', () =>{

  test('Should returns 400 if no patient name is provided', async() =>{
    const httpResponse ={
      doctor: 'Ana',
      appointment_date: '2021-03-30 14:38:53'
    }

    const response = await request(app).post('/appointments')
    .send(httpResponse).expect(400);
  })

  test('Should returns 400 if no doctor is provided', async() =>{
    const httpResponse ={
      patient: 'Lucas',
      appointment_date: '2021-03-30 14:38:53'
    }

    const response = await request(app).post('/appointments')
    .send(httpResponse).expect(400);
  })

  })
