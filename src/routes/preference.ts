import type {
	FastifyInstance,
	FastifyServerOptions,
	FastifyRequest,
	FastifyReply,
} from 'fastify';

export const preference = (
	preference: FastifyInstance,
	_opts: FastifyServerOptions,
	done: () => void
) => {
	preference.get('/', async (_request: FastifyRequest, reply: FastifyReply) => {
		reply.send({ message: 'message from preference route' });
	});
	done();
};
