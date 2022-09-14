import styled from "styled-components";
import { Github, LinkedinSquare, DevTo, MediumSquare, Twitter } from '@styled-icons/boxicons-logos';

const SocialContainer = styled.section`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
gap: 3rem;
position: relative;

&::before{
	content: "";
	position: absolute;
	left: -2rem;
	width: 1rem;
	height: .1rem;
	background-color: #717171;
}

&::after{
	content: "";
	position: absolute;
	right: -2rem;
	width: 1rem;
	height: .1rem;
	background-color: #717171;
}
`;

const Item = styled.a`
color: #717171;
cursor: pointer;
transition: all .2s ease-in-out;

&:hover{
	transform: scale(1.3);
}
`;


const SocialBar = () => {
	return (
		<SocialContainer>
			<Item href="#" target={"_blank"}><Github size="26" /></Item>
			<Item href="#" target={"_blank"}><LinkedinSquare size="26" /></Item>
			<Item href="#" target={"_blank"}><DevTo size="26" /></Item>
			<Item href="#" target={"_blank"}><MediumSquare size="26" /></Item>
			<Item href="#" target={"_blank"}><Twitter size="26" /></Item>
		</SocialContainer>
	)
}

export default SocialBar