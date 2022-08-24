import styled from "styled-components";

import MenuItem from "./MenuItem";

const Container = styled.section`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 4rem;
`;


const Menu = () => {
	return (
		<Container>
			<MenuItem>home</MenuItem>
			<MenuItem>about</MenuItem>
			<MenuItem>projects</MenuItem>
			<MenuItem>blog</MenuItem>
		</Container>
	);
}

export default Menu;