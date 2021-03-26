import {Router}  from 'express'


const appointmentsRouter = Router()


appointmentsRouter.get('/', (request, response) =>{
  return response.json({message: 'Appointments List'})
})

export default appointmentsRouter;
