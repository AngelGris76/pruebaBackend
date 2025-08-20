import COURSE_DATA from './course.json' with { type: 'json' };

export class CourseModel {
	static getAll = async () => {
		if (!COURSE_DATA.length) return { error: 'No data' };

		return { data: COURSE_DATA };
	};
	static getById = async ({ id }) => {
		const data = COURSE_DATA.find((course) => course.id === id);
		if (!data) return { error: 'No data' };

		return { data };
	};
}
