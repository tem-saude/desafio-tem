import { getCustomRepository } from 'typeorm';
import Appointment from '../../models/Appointment';
import AppointmentRepository from '../../repositories/AppoinmentRepository';

interface Request{
  patient: string;
  doctor: string;
  appointment_date: string;
}


export class UpdateAppointmentService{

  public async excute(id:string,data:Request):Promise<Appointment>{
    const appointmentRepository = getCustomRepository(AppointmentRepository);

    const findAppointmentWithSameId = await appointmentRepository.findOne({where:{id}})

    if(!findAppointmentWithSameId){
      throw new Error('This appointment was not found')
    }

    const updatedAppointment = appointmentRepository.create(data)

    await appointmentRepository.update(id, data)


    return updatedAppointment;

  }

}
