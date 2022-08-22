import React from 'react'
import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";

const TextContainer = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap:1rem;

	font-size: 5rem;
	font-weight: 600;
`;

const TypewriterText = styled.span`
color: #FEEF2A;
`;

const ImpactText = () => {
	return (
		<>
			<TextContainer>dot
				<TypewriterText>
					<TypewriterComponent
						onInit={(typewriter) => {
							typewriter
								.typeString("developer.")
								.pauseFor(1000)
								.deleteAll()
								.typeString("designer.")
								.pauseFor(1000)
								.deleteAll()
								.typeString("writer.")
								.pauseFor(1000)
								.deleteAll()
								.typeString("student.")
								.pauseFor(1000)
								.deleteAll()
								.start();
						}}
						options={{ loop: true, autoStart: true }}
					/>
				</TypewriterText>
			</TextContainer>
		</>
	);
};

export default ImpactText