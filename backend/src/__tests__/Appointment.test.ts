import {createConnection} from 'typeorm'
import app from '../server'
import request from 'supertest'



describe('Appointments Services', () =>{

  test('Should returns 400 if  patient name is not provided', async() =>{
    const httpRequest ={
      doctor: 'Ana',
      appointment_date: '2021-03-30 14:38:53'
    }

    const response = await request(app).post('/appointments')
    .send(httpRequest).expect(400);
  })

  test('Should returns 400 if  doctor is not provided', async() =>{
    const httpRequest ={
      patient: 'Lucas',
      appointment_date: '2021-03-30 14:38:53'
    }

    const response = await request(app).post('/appointments')
    .send(httpRequest).expect(400);
  })

  test('Should returns 400 if appointment_date is  notprovided', async() =>{
    const httpRequest ={
      patient: 'Lucas',
      doctor: 'Ana'
    }
    const response = await request(app).post('/appointments')
    .send(httpRequest).expect(400);
  })

})
