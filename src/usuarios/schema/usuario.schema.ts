import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";
import {  HydratedDocument } from "mongoose"; 

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema()
export class Usuario {
    @Prop({required: true})
    nome: string;

    @Prop({required: true})
    sobrenome: string;

    @Prop({required: true})
    email: number;

    @Prop({required: true})
    senha: string

}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario)