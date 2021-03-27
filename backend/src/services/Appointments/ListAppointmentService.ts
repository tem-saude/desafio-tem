import {getCustomRepository} from 'typeorm';
import AppointmentRepository from '../../repositories/AppoinmentRepository'
import Appoinment from '../../models/Appointment'


export class ListAppointmentService{
  public async execute(id:string):Promise<Appoinment | null>{
    const appointmentRepository = getCustomRepository(AppointmentRepository);

    const findAppointmentById = await appointmentRepository.findOne({id});

    if(!findAppointmentById){
      throw new Error('This appointment does not exists');
    }

    return findAppointmentById || null;

  }
}

