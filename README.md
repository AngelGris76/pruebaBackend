# Pruebas de backend

## Funcionalidad

**Hasta dos endpoint en un mismo archivo**\
**Archivo principal en el raiz**\
**Colocar el archivo principal dentro de src**\
**Luego se iran separando las cosas**\
**Primero todo en JS, luego se ira agregando TS**\

Usando fastify y fastify/cors\
Los avances se podran recorrer por los distintos commits\
*Para que funcione en vercel no usar loadEnvFile*


[ * ] Single endpoint server\
[ * ] Funciona en vercel con el archivo principal en el raiz?\
[ * ] Cambiando el endpoint de / a /courses, tambien funciona en Vercel\
[ * ] Two endpoint server\
[ * ] Funciona en vercel con el archivo principal en el raiz?\
[ * ] Cambiar el archivo principal a src\
[ * ] Funciona single endpoint en vercel?\
[ * ] Funciona two endpoint en vercel?\
[ * ] Funciona two endpoint en archivos diferentes en vercel?\
[ * ] Funciona agregando carpeta y archivo para controladores\
[ * ] Funciona agregando carpeta y archivo para controladores en vercel\
[ * ] Funciona agregado modelo de cursos y un json como base de datos\
[ * ] Funciona agregado modelo de cursos y un json como base de datos en vercel\
[ * ] Pasado a typescript index, controllers, models, routes\
[ * ] Funciona en vercel con typescript

*vercel.json*

```js
{
	"version": 2,
	"builds": [{ "src": "src/index.ts", "use": "@vercel/node" }],
	"routes": [
		{
			"src": "/(.*)",
			"dest": "src/index.ts"
		}
	]
}
```

Corroborar que "builds" => "src" apunte a la ubicacion del archivo principal\
Corroborar que "routes" => "dest" apunte a la ubicacion del archivo principal, de desarrollo. No donde quedaria el archivo compilado