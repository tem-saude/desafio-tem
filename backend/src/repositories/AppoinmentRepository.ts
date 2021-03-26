import {EntityRepository, Repository} from 'typeorm';
import  Appointment from '../models/Appointment'
EntityRepository()
class AppointmentsRepository extends Repository<Appointment>{}


export default AppointmentsRepository;
