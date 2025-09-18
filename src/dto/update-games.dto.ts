import { IsString, IsNotEmpty, PrimaryGeneratedColumn,IsNumber, IsPositive, IsOptional, column} from 'class-validator';
import { CreateGameDto } from './create-games.dto';

export class UpdateGameDto extends PartialType(CreateGameDto){}
