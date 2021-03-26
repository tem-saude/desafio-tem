import {getCustomRepository} from 'typeorm';
import AppointmentRepository from '../../repositories/AppoinmentRepository'
import  Appointment from '../../models/Appointment';


 interface Request{
   patient: string;
   doctor: string;
   appointment_date: string;
 }
export class CreateAppointmentService{

  public async execute({patient, doctor, appointment_date}:Request):Promise<Appointment>{
    const appointmentRepository = getCustomRepository(AppointmentRepository);

    const appointment = appointmentRepository.create({
      patient,
      doctor,
      appointment_date
    })

    await appointmentRepository.save(appointment)

    return appointment;
  }
}

