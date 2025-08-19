import { loadEnvFile } from 'node:process';
import fastify from 'fastify';
import cors from '@fastify/cors';
import { course } from './routes/courses.js';
import { preference } from './routes/preference.js';

loadEnvFile();

const serverPort = process.env.PORT ?? 8080;
const server = fastify({ logger: false });
server.register(cors, { origin: '*' });

//Primeramente se probo en /
//Luego se probo en /courses

server.register(course, { prefix: '/course' });
server.register(preference, { prefix: '/preference' });

server.listen({ port: serverPort }, () => {
	console.log('listen on port', serverPort);
});
