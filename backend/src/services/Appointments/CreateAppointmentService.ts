import {getCustomRepository} from 'typeorm';
import AppointmentRepository from '../../repositories/AppoinmentRepository'
import  Appointment from '../../models/Appointment';
import { format } from 'node:path';


 interface Request{
   patient: string;
   doctor: string;
   appointment_date: string;
 }
export class CreateAppointmentService{

  public async execute(data:Request):Promise<Appointment>{
    const appointmentRepository = getCustomRepository(AppointmentRepository);
    const requiredFields = ['patient', 'doctor', 'appointment_date']

    for(const field of requiredFields){
      if(!data[field]){
        throw new Error(`${field} is not provided`)
      }
    }


    const appointment = appointmentRepository.create({
      patient:data.patient,
      doctor:data.doctor,
      appointment_date:data.appointment_date
    })

    await appointmentRepository.save(appointment)

    return appointment;
  }
}

