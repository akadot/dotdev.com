import styled, { createGlobalStyle } from 'styled-components';


export const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 100%;
`;

export const FooterStr = styled.p`
position: sticky;
font-size: .8rem;
padding-top: .5rem;
padding-bottom: 1rem;
/* font-style: italic; */
font-weight: 400;
color:#777777;

&& a{
	color: #d3cc68;
	text-decoration: none;
}
`;

export default createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	body{
		background-color: #0f0f0f;
		color: #fff;
		font-family: 'Prompt';
		height: 100%;
	}
`;