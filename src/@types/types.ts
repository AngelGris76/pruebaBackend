export type CourseType = {
	id: `${string}-${string}-${string}-${string}-${string}`;
	title: string;
	description: string;
	videoId: string;
	price: number;
};

export type CourseId = Pick<CourseType, 'id'>;
