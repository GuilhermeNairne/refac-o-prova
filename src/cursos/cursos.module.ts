import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';
import { Curso, CursosSchema } from './schema/curso.schema';

@Module({
  imports: [ MongooseModule.forFeature([{ name: Curso.name, schema: CursosSchema }])],
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {}
