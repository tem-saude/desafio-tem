import { Router } from 'express';
import {parseISO, format} from 'date-fns'
import {CreateAppointmentService, ListAppointmentsServices} from '../services/Appointments'


const appointmentsRouter = Router()


appointmentsRouter.get('/', async(request, response) =>{
  try{
    const listAppointmentsServices = new ListAppointmentsServices();
    const appointments = await listAppointmentsServices.execute();
    return response.status(200).json(appointments);
  }catch(error){
    return response.status(400).json({message: error.message})
  }
})

appointmentsRouter.post('/', async(request, response) =>{
  try{
    const { patient, doctor, appointment_date} = request.body;
    const parsedDate = parseISO(appointment_date);
    const formatDate = format(parsedDate, "yyyy-MM-dd kk:mm:ss")

    const createAppointmentService = new CreateAppointmentService();
    const appointment = await createAppointmentService.execute({
      patient,
      doctor,
      appointment_date:formatDate,
    })

    return response.status(201).json(appointment)

  }catch(error){
    return response.status(400).json({message: error.message})
  }

})



export default appointmentsRouter;
