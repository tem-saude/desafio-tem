import {
  Column, Entity, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('agendar')
export default class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  doctor: string;

  @Column()
  date: string;
}

/*
Variaveis id, name, date não são inciializadas em nenhum momento
Por padrão o typeorm faz os constructors

tsconfig.json -> "strictPropertyInitialization": false,
(evita que as propriedades precisem ter uma inicialização)
*/
