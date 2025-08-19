export const preference = (preference, opts, done) => {
	preference.get('/', async (request, reply) => {
		reply.send({ message: 'message from preference route' });
	});
	done();
};
