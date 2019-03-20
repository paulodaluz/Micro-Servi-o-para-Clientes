import 'reflect-metadata'
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Clientes } from './Clientes';

@Entity()
export class ListaLojas {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome_loja: string;

    @Column()
    endereco: string;

    @Column()
    celular: string;

    @Column()
    cnpj: string;

    @Column()
    horarioDeTrabalho: string;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @OneToMany(type => Clientes, Clientes => Clientes.loja)
    clientes: Clientes[]
}