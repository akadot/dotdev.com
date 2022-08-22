import { createGlobalStyle } from 'styled-components';

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