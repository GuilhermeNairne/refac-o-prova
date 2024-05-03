import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Curso, CursosDocument } from './schema/curso.schema';
import { Model } from 'mongoose';

@Injectable()
export class CursosService {
  constructor(@InjectModel(Curso.name) private cursoModel: Model<CursosDocument>) {}

 async create(createCursoDto: CreateCursoDto) {
    const curso = new this.cursoModel(createCursoDto)

    return curso.save()
  }

  findAll() {
    return this.cursoModel.find().exec();
  }

  findOne(id: number) {
    return this.cursoModel.findById(id)
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return this.cursoModel.findByIdAndUpdate({_id:id}, {$set: updateCursoDto}, {new: true}).exec();
  }

  remove(id: number) {
    return this.cursoModel.findOneAndDelete({_id: id}).exec();
  }

  addAluno(idAluno: string, idCurso: string[]) {
    return this.cursoModel.findByIdAndUpdate({idCurso, $set: {alunos: idAluno}}, {new: true}).exec();
  }

  buscaPorCurso(curso: string): Promise<Curso> {
    return this.cursoModel.findOne({Curso: curso}).exec()
  }
}
