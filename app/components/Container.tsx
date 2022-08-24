import styled from "styled-components";

// import Bg from '../../public/bg5.png'
import Bg from '../../public/bg1.webp'

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2.5rem 1rem;
height: 100%;
background: url(${Bg});
`;

export default Container;