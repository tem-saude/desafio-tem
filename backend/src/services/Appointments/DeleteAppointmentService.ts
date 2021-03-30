import {getCustomRepository} from 'typeorm';
import AppointmentRepository from '../../repositories/AppoinmentRepository';
import AppError from '../../errors/AppError'


export class DeleteAppointmentService{

  public async execute(id:string):Promise<void>{
    const appointmentRepository = getCustomRepository(AppointmentRepository);
    const findAppointmentWithSameId = await appointmentRepository.findOne({id});

    if(!findAppointmentWithSameId){
      throw new AppError('This appointment does not exists');
    }

    await appointmentRepository.remove(findAppointmentWithSameId)

  }
}
