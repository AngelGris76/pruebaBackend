export const course = (course, opts, done) => {
	course.get('/:id', async (request, reply) => {
		const id = request.params.id;
		reply.send({ message: `el id es ${id}` });
	});
	course.get('/', async (request, reply) => {
		reply.send({ message: 'mensaje en el raiz de course' });
	});
	done();
};
