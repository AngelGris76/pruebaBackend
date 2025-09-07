import type { FastifyRequest, FastifyReply } from 'fastify';
import { CourseModel } from '../models/course.ts';
import type { CourseId } from '../@types/types.ts';

export class CourseController {
	static getAll = async (_request: FastifyRequest, reply: FastifyReply) => {
		const response = await CourseModel.getAll();
		if (!response) {
			reply.code(404);
			reply.send({ error: 'No data' });
		}
		reply.code(200);
		reply.send({ data: response });
	};

	static getById = async (request: FastifyRequest, reply: FastifyReply) => {
		const { id } = request.params as CourseId;
		const response = await CourseModel.getById({ id });
		if (!response) {
			reply.code(404);
			reply.send({ error: 'No data' });
		}
		reply.code(200);
		reply.send({ data: response });
	};
}
