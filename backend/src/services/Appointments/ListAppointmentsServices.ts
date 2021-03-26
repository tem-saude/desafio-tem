import {getCustomRepository} from 'typeorm';
import Appointment from '../../models/Appointment'
import AppointmentRepository from '../../repositories/AppoinmentRepository';


export class ListAppointmentsServices{
  public async execute():Promise<Appointment[] | null>{
    const appointmentRepository = getCustomRepository(AppointmentRepository);
    const appointments = await appointmentRepository.find();
    return appointments || null;
  }
}


