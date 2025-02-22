import { IsOptional, IsNotEmpty, IsString, IsBoolean, IsNumber } from "class-validator";

export class CreateTaskDto {

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    titulo: string;

    @IsNotEmpty()
    @IsString()
    descripcion: string;    

    @IsOptional()
    @IsBoolean()
    completada: boolean = false;
}