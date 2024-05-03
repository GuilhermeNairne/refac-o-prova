import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from 'src/usuarios/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsuarioService,
    private jwtService: JwtService
  ) {}

  async signIn(loginDto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findByName(loginDto.name);

    const isMatch = await bcrypt.compare(loginDto.password, user.senha)

    if (!user.senha || !isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user._id, username: user.nome };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}