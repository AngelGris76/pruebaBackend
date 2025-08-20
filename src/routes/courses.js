import { CourseController } from '../controllers/course.js';

export const course = (course, opts, done) => {
	course.get('/:id', CourseController.getById);
	course.get('/', CourseController.getAll);
	done();
};
