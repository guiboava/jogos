# Requisitos

## NestJS
## React
## Deploy/Docker
## PostGress
	
# Como executar compose

## Comando: "docker compose up -d --build" - Comando utilizado para criar um docker compose e já rodar o mesmo em segundo plano

# Endpoints CRUD

## Post: /games
	{
 	 title: "",
	 platform: "",
	 genre: "",
	 price: 0.00
	}
## Get: /games

## GetById: /games/{id}

## Delete: /games/{id}

## Put:    /games/{id}
	{
 	 title: "",
	 platform: "",
	 genre: "",
	 price: 0.00
	}

# Respostas
	{
 	 title: "Red Dead Redemption",
	 platform: "Xbox",
	 genre: "Cowboy",
	 price: 71.00
	}
# Como derrubar recursos 

## Comando: "docker compose down -v" - Comando utilizado para derrubar a compose junto do seu volume.
