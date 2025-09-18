import { IsString, IsNotEmpty, PrimaryGeneratedColumn,IsNumber, IsPositive, IsOptional, column} from 'class-validator';

export class CreateGameDto {
  
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  platform: string;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsNumber()
  @IsPositive()
  price: number;
}
