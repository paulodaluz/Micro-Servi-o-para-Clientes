import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Clientes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    rg: string;
    
    @Column()
    celular: string;

    @Column()
    endereco: string;

    @Column()
    localDeTrabalho: string;



}