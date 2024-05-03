import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";
import {  HydratedDocument } from "mongoose"; 

export type CursosDocument = HydratedDocument<Curso>

@Schema()
export class Curso {
    @Prop({required: true})
    nome: string;
    
    @Prop({required: true})
    valor: number;

    @Prop({required: true})
    duracao: number;

    @Prop({required: true})
    alunos: string[];
}

export const CursosSchema = SchemaFactory.createForClass(Curso)
