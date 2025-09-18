import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './service/app.service';

import { GameModule } from './games.module'; // ajuste o caminho conforme seu projeto
import { Game } from './entity/game-entity' // ajuste o caminho conforme seu projeto

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',       // ou seu host
      port: 5432,              // porta padrão do Postgres
      username: 'postgres', // coloque seu usuário do Postgres
      password: 'postgres',   // coloque sua senha do Postgres
      database: 'games',   // nome do banco de dados
      entities: [Game],
      synchronize: true,       // só usar em dev (cria/atualiza tabela automaticamente)
    }),
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
