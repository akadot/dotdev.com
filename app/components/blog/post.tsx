import styled from "styled-components";
import { themes } from '~/styles/themes'
interface PostComponent {
	imgUrl: string,
	url: string,
	title: string,
	description: string,
	tags: string[],
	provider: string
}

interface PostContainerProps {
	image: string,
	mainColor: string
}

const PostContainer = styled.section.attrs((props: PostContainerProps) => ({
	image: props.image,
	mainColor: props.mainColor
})) <PostContainerProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	width: 22rem;
	height: 18rem;
	/* padding: .8rem; */
	background-image: url(${(props) => props.image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-width: 1px;
	border-style: solid;
	border-color: ${props => props.mainColor};
	text-decoration: none;
	color: #fff;
	transition: transform 0.2s ease-in-out;

	&&:hover{
		transform: scale(1.05)
	}

	&& span{
		color: ${props => props.mainColor};
	}
`;

const InfoContainer = styled.section`
background-color: #000000be;
padding: .8rem;

`;


const PostTitle = styled.a`
font-size: 1.5rem;
font-weight: 600;
cursor: pointer;
text-decoration: none;
color:#fff;

overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2; /* number of lines to show */
line-clamp: 2;
-webkit-box-orient: vertical;
`;

const PostDescription = styled.p`
font-size: .8rem;
`;


/* const PostUrl = styled(Link)``; */


export default function Post({ imgUrl, title, description, tags, url, provider }: PostComponent) {

	return (
		<PostContainer image={imgUrl} mainColor={themes.blog.color} >
			<InfoContainer >
				<PostTitle href={url} target="_blank">{title}</PostTitle>
				<PostDescription>{description}</PostDescription>
				{tags.map(tag => {
					return (
						<>
							<span key={tag}>{tag}</span> &nbsp;
						</>
					)
				})}
			</InfoContainer>
		</PostContainer>
	)
}

