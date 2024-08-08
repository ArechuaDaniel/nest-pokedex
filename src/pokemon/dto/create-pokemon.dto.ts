import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    @IsPositive()
    @Min(1)
    @IsInt()
    no: number;
    
    @MinLength(1)
    @IsString()
    name:string
}
