import {getCustomRepository} from 'typeorm';
import AppointmentRepository from '../../repositories/AppoinmentRepository'
import  Appointment from '../../models/Appointment';
import AppError from '../../errors/AppError'


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
        throw new AppError(`${field} is not provided`, 400)
      }
    }

    const findAppointmentInSameDate = await appointmentRepository.findOne({ where:{ appointment_date: data.appointment_date}})

    if(findAppointmentInSameDate){
      throw new AppError('This appointment is already booked', 400)
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

