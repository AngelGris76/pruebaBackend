import { CourseModel } from '../models/course.js';

export class CourseController {
	static getAll = async (request, reply) => {
		const response = await CourseModel.getAll();
		if (response.error) {
			reply.code(404);
		} else {
			reply.code(200);
		}
		reply.send(response);
	};
	static getById = async (request, reply) => {
		const id = request.params.id;
		const response = await CourseModel.getById({ id });
		if (response.error) {
			reply.code(404);
		} else {
			reply.code(200);
		}
		reply.send(response);
	};
}
