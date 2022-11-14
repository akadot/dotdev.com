import type { LoaderFunction } from "@remix-run/node";
import type { Post } from "~/models/blog.server";
import { useLoaderData } from "@remix-run/react";
import PostComponent from "~/components/blog/post-alternative";
import BlogContainer from "~/components/blog";
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
	// console.log(posts)

	return (
		<BlogContainer>
			{
				posts.map((post: Post) => {
					return (
						<PostComponent key={post.id} imgUrl={post.cover_image} title={post.title} description={post.description} tags={post.tag_list} url={post.url} provider={post.provider} />
					)
				})
			}

		</BlogContainer>
	)
}