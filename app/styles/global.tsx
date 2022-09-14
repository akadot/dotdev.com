import styled, { createGlobalStyle } from 'styled-components';


export const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2.5rem 1rem;
height: 100%;
flex-wrap: wrap;
`;

export const Footer = styled.p`
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
		background-color: #0E141B;
		color: #fff;
		font-family: 'Prompt';
		height: 100vh;
	}
`;