import { CourseController } from '../controllers/course.js';

import type { FastifyInstance, FastifyServerOptions } from 'fastify';

export const course = (
	fastify: FastifyInstance,
	_opts: FastifyServerOptions,
	done: () => void
) => {
	fastify.get('/:id', CourseController.getById);
	fastify.get('/', CourseController.getAll);
	done();
};
