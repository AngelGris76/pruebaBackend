import type { CourseType, CourseId } from '../@types/types.js';
import COURSES from './course.json' with { type: 'json' };

const allCourse: CourseType[] = COURSES as CourseType[];

export class CourseModel {
	static getAll = async (): Promise<CourseType[] | [] | undefined> => {
		return allCourse;
	};
	static getById = async ({
		id,
	}: CourseId): Promise<CourseType | undefined> => {
		const data = allCourse.find((course: CourseType) => course.id === id);
		return data;
	};
}
