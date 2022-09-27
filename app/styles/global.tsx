import styled, { createGlobalStyle } from 'styled-components';
import cloudsBg from "~/styles/assets/clouds-bg-opacity.png"


export const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 100%;
`;

export const Footer = styled.p`
position: sticky;
padding-top: .5rem;
padding-bottom: 1rem;
color: "#717171";
`;

export default createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	body{
		background-image:url(${cloudsBg});
		background-size:cover;
		color: #fff;
		font-family: 'Prompt';
		height: 100%;
	}
`;