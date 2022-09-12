import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getDEVTOPosts } from "~/models/blog.server";

interface LoaderData {
	posts: Awaited<ReturnType<typeof getDEVTOPosts>>;
}


export const loader: LoaderFunction = async () => {
	let post = await getDEVTOPosts();

	return post;
}


export default function () {
	const posts = useLoaderData<LoaderData>();
	console.log(posts)

	return (
		<>
			{/* {posts.map((post: Post) => {
				return (
					<section key={post.id}>
						<h1>{post.title}</h1>
						<img src={post.cover_image} alt="" />
						<p>{post.tag_list.join("\n")}</p>
						<p>{post.provider}</p>
						<a href={post.url}>LINK</a>
					</section>
				)
			})} */}
		</>
	)
}