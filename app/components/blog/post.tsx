import styled from "styled-components";
// import { Link } from "@remix-run/react";

const PostContainer = styled.a(props => ({
	display: "flex",
	flexDirection: "column",
	width: "22rem",
	height: "28rem",
	padding: "1rem",
	backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.507), rgba(0, 0, 0, 0.507)), url(${props.property})`,
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundPosition: "center",
	cursor: "pointer",
	textDecoration: "none",
	color: "#fff",
}));

const InfoContainer = styled.section``;


const PostTitle = styled.h2`
font-size: 1rem;

`;

const PostDescription = styled.p`
font-size: .8rem;
`;

const PostTags = styled.span``;

/* const PostUrl = styled(Link)``; */

interface PostComponent {
	imgUrl: string,
	url: string,
	title: string,
	description: string,
	tags: string[],
	provider: string
}

export default function Post({ imgUrl, title, description, tags, url, provider }: PostComponent) {
	return (
		<PostContainer property={imgUrl} href={url} target="_blank">
			<InfoContainer>
				<PostTitle>{title}</PostTitle>
				<PostDescription>{description}</PostDescription>
				<PostTags>{tags}</PostTags>
			</InfoContainer>
		</PostContainer>
	)
}

