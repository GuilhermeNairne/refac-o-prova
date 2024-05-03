import { IsString, IsEmail, Max, Min, IsNotEmpty } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    @Max(100)
    @Min(3)
    nome: string

    @Max(100)
    @IsNotEmpty()
    @Min(3)
    @IsString()
    sobrenome: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @Max(100)
    @Min(3)
    email: string

    @IsString()
    @IsNotEmpty()
    @Max(50)
    @Min(3)
    senha: string


}
