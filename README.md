# Mi Aplicación de Valor del Dólar

Este proyecto es una aplicación web que consume una API para proporcionar el valor del dólar oficial y el dólar blue de Argentina, y los muestra en una página web simple.

## Requisitos

- Node.js y npm instalados en tu sistema.
- Docker (opcional, para contenerizar la aplicación).

## Instrucciones de Uso

### Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/mi-aplicacion-dolar.git

cd mi-aplicacion-dolar

npm i para intalar las dependencia necesaria

npm node app.js

docker build -t mi-aplicacion-dolar . 

docker stack deploy -c swarm.yml mi-stack
