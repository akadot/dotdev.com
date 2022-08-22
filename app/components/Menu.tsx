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
			<MenuItem>Home</MenuItem>
			<MenuItem>About</MenuItem>
			<MenuItem>Projects</MenuItem>
			<MenuItem>Blog</MenuItem>
		</Container>
	);
}

export default Menu;