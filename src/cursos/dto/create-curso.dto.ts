import { IsString, Max, Min, IsNumber, IsArray, IsNotEmpty,  } from "class-validator";

export class CreateCursoDto {
    @IsString()
    @IsNotEmpty()
    @Max(100)
    @Min(3)
    nome: string

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(6)
    valor: number

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(10)
    duracao: number

    @IsArray()
    @IsNotEmpty()
    @IsString()
    alunos: string[]
}
