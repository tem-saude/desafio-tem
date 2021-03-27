import {getCustomRepository} from 'typeorm';
import AppointmentRepository from '../../repositories/AppoinmentRepository';



export class DeleteAppointmentService{

  public async execute(id:string):Promise<void>{
    const appointmentRepository = getCustomRepository(AppointmentRepository);
    const findAppointmentWithSameId = await appointmentRepository.findOne({id});

    if(!findAppointmentWithSameId){
      throw new Error('This appointment does not exists');
    }

    await appointmentRepository.remove(findAppointmentWithSameId)

  }
}
