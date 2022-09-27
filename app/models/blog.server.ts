export interface Post {
	id: number;
	title: string;
	description: string,
	url: string;
	cover_image: string;
	tag_list: string[];
	provider: string;
}

export async function getDEVTOPosts(): Promise<Post[]> {
	const res = await fetch("https://dev.to/api/articles?username=akadot_");

	const data = await res.json();

	const posts = data.map((post: Post) => {
		return {
			id: post.id,
			title: post.title,
			description: post.description,
			url: post.url,
			cover_image: post.cover_image,
			tag_list: post.tag_list,
			provider: "dev_to"
		}
	});

	return posts;
}