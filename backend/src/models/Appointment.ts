import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn,UpdateDateColumn} from 'typeorm'
import {v4 as uuid} from 'uuid';

@Entity('appointments')
class Appointment{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  patient:string;

  @Column()
  doctor: string;

  @Column()
  appointment_date: Date;


   @CreateDateColumn()
   created_at: Date;


   @CreateDateColumn()
   updated_at: Date;

   constructor(){
     if(!this.id){
       this.id = uuid();
     }
   }
}


export default Appointment;
