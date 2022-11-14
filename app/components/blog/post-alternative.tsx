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

const PostContainer = styled.section`
display: flex;
flex-direction: row;
align-items: center;
`;

const PostImage = styled.section.attrs((props: PostContainerProps) => ({
	image: props.image,
	mainColor: props.mainColor
}))`
width: 15rem;
height: 15rem;
background-image: url(${(props) => props.image});
background-size: cover;
background-position: center;
`;

const PostContent = styled.section`

`;


export default function PostAlternative({ imgUrl, title, description, tags, url, provider }: PostComponent) {

	return (
		<PostContainer>
			<PostImage image={imgUrl} mainColor={themes.blog.color} />
			<PostContent></PostContent>
		</PostContainer>
	)
}

