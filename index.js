//import { loadEnvFile } from 'node:process';
import fastify from 'fastify';
import cors from '@fastify/cors';

//loadEnvFile();

const serverPort = process.env.PORT || 8080;

const server = fastify({ logger: false });
server.register(cors, { origin: '*' });

server.get('/', async (request, reply) => {
	reply.code(200);
	reply.send({ message: 'answer from backend' });
});

server.listen({ port: serverPort }, () => {
	console.log('listen on port', serverPort);
});
