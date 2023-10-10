# Mi Aplicación de Valor del Dólar

Este proyecto es una aplicación web que consume una API para proporcionar el valor del dólar oficial y el dólar blue de Argentina, y los muestra en una página web simple.

## Requisitos

- Node.js y npm instalados en tu sistema.
- Docker (opcional, para contenerizar la aplicación).

## Instrucciones de Uso

### Clonar el Repositorio

```bash
git clone https://github.com/Leandromarcato/Parcial_Microservicio.git

cd Examen de Microservicio

npm i para intalar las dependencia necesaria

npm node app.js

http://localhost:8080/dolar para ver los datos

docker build -t dolar-blue .  // creamos la imagen del dockerfile

docker swarm leave --force  // cerramos todos los clouster

docker swarm init         // iniaciamos un nuevo clouster

docker stack deploy -c swarm.yml mi-stack
