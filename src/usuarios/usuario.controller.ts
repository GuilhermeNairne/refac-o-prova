import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Public } from 'src/auth/decorators/auth.decorato';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @Public()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    try {
      return this.usuarioService.create(createUsuarioDto);      
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Erro ao cadastrar o usuario',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }

  @Get('name')
  findByName(@Body('name') name: string) {
    try {
      return this.usuarioService.findByName(name);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Erro ao buscar pelo nome',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }
}
