import React, { useState } from 'react'
import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";

const TextContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const TypeTextContainer = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap:1.3rem;

	font-size: 6rem;
	font-weight: 600;
	margin-top: 2rem;
`;

const TypewriterText = styled.span`
color: #FEEF2A;
`;

const SubTextComponent = styled.p`
color: #ffffff;
margin-top: 1.1rem;
`;

const ImpactText = () => {
	const [subText, setSubText] = useState("Building cool and fast websites 💻")
	return (
		<TextContainer>
			<TypeTextContainer>dot
				<TypewriterText>
					<TypewriterComponent
						onInit={(typewriter) => {
							typewriter
								.callFunction(() => setSubText("Building cool and fast websites 💻"))
								.typeString("developer.")
								.pauseFor(1000)
								.deleteAll()
								.callFunction(() => setSubText("Drawning awesome interfaces 🎨"))
								.typeString("designer.")
								.pauseFor(1000)
								.deleteAll()
								.callFunction(() => setSubText("Writing for job and for hobbie 📝"))
								.typeString("writer.")
								.pauseFor(1000)
								.deleteAll()
								.callFunction(() => setSubText("Studing everything everyday 📚"))
								.typeString("student.")
								.pauseFor(1000)
								.deleteAll()
								.start();
						}}
						options={{ loop: true, autoStart: true }}
					/>
				</TypewriterText>
			</TypeTextContainer>
			<SubTextComponent>{subText}</SubTextComponent>
		</TextContainer>
	);
};

export default ImpactText