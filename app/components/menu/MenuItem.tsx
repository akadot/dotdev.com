import styled from "styled-components";
import { Link } from "@remix-run/react";

const MenuItem = styled(Link)`
	color: #fff;
	text-decoration: none;
	font-weight: 500;
	position: relative;
	padding: 0 .3rem;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	z-index: 0;

	&::before{
		content: "";
		position: absolute;
		width: 0.2rem;
		height: 1.35rem;
		background-color: ${props => props.theme.color};
		left: -.3rem;
		bottom: .1rem;
		z-index: -1;
		transform: skew(-20deg);
		transition: all 0.2s ease-in-out;
	}

	&:hover{
		color: #0E141B;
		&::before{
			width: 125%;
		}
	}
`;

export default MenuItem;