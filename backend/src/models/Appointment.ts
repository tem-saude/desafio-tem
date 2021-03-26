import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn,UpdateDateColumn} from 'typeorm'

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
}


export default Appointment;
