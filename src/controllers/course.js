export class CourseController {
	static getAll = async (request, reply) => {
		reply.send({ message: 'message from getAll' });
	};
	static getById = async (request, reply) => {
		const id = request.params.id;
		reply.send({ message: `message from getByID with id= ${id}` });
	};
}
