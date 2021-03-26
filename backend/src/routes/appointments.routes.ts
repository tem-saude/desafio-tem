import { Router } from 'express';


const appointmentsRouter = Router()


appointmentsRouter.get('/', (request, response) =>{
  return response.json({message: 'Appointments List'})
})

appointmentsRouter.post('/', async(request, response) =>{
    const { patient, doctor, appointment_date} = request.body;
})

export default appointmentsRouter;
