import { IsBoolean, IsOptional, IsString } from "class-validator";

export class UpdateTaskDto {

    @IsOptional()
    @IsString()
    titulo: string;

    @IsOptional()
    @IsString()
    descripcion: string;

    @IsOptional()
    @IsBoolean()
    completada: boolean;
}