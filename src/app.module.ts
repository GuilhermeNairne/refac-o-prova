import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { CursosModule } from './cursos/cursos.module';
import { UsuarioModule } from './usuarios/usuario.module';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { CursoMiddleware } from './common/middleware/curso.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsuarioModule, CursosModule, MongooseModule.forRoot('mongodb://localhost/prova'), JwtModule],
  providers: [ {
    provide: APP_GUARD,
    useClass: AuthGuard
  }]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
     .apply(CursoMiddleware)
     .forRoutes({path: 'cursos', method: RequestMethod.POST})
      
  }
}

