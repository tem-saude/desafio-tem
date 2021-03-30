import request  from 'supertest';
import app from '../server'


describe('AppointmentService', () =>{
  test('Should returns 400 if not patient name is provided',async () =>{

   const httpResponse = await  request(app).post('/appointments').send({
      doctor: 'any_doctor',
      appoinment_date:'any_date'
    }).expect(200, {
      patient: 'any_patient',
      doctor: 'any_doctor',
      appointment_date: 'any_date'

    })

  })
})
