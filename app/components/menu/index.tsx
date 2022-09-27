import styled from "styled-components";
import { themes } from "~/styles/themes";
import MenuItem from "./MenuItem";

const Container = styled.section`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 4rem;
padding-top: 2.5rem;
`;


const Menu = () => {
	return (
		<Container>
			<MenuItem to="/" theme={themes.home}>home</MenuItem>
			<MenuItem to="/about" theme={themes.about}>about</MenuItem>
			<MenuItem to="/projects" theme={themes.projects}>projects</MenuItem>
			<MenuItem to="/blog" theme={themes.blog}>blog</MenuItem>
		</Container>
	);
}

export default Menu;