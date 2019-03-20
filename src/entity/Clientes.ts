import 'reflect-metadata'
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import { ListaLojas } from './Loja';

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
    genero: string;
    
    @Column()
    celular: string;

    @Column()
    endereco: string;

    @Column()
    localDeTrabalho: string;

    @ManyToOne(type => ListaLojas, ListaLojas => ListaLojas.id)
    @JoinColumn({ name: 'lojaId' })
    loja: ListaLojas
}