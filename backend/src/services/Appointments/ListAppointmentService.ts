import {getCustomRepository} from 'typeorm';
import AppointmentRepository from '../../repositories/AppoinmentRepository'
import Appoinment from '../../models/Appointment'
import AppError from '../../errors/AppError'


export class ListAppointmentService{
  public async execute(id:string):Promise<Appoinment | null>{
    const appointmentRepository = getCustomRepository(AppointmentRepository);

    const findAppointmentById = await appointmentRepository.findOne({id});

    if(!findAppointmentById){
      throw new AppError('This appointment does not exists');
    }

    return findAppointmentById || null;

  }
}

