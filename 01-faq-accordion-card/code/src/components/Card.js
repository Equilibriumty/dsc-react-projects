import React from 'react'
import styled from 'styled-components'
import picture1 from '../assets/illustration-woman-online-desktop.svg'
import picture2 from '../assets/illustration-box-desktop.svg'
import Accordion from './Accordion'
 
const CardBody = styled.div`
    height: 60vh;
    width: 50vw;
    background-color: white;
    border-radius: 2vw;
    margin: 10% auto;
    box-shadow: 0 2vh 10px rgba(0, 0, 0, 0.2);
    
`;

const ImgContainer = styled.div`
    height: 60vh;
    width: 25vw;
`;

const Img1 = styled.img`
    border-radius: 40px;
    width: 25vw;
`;
const FAQTitle = styled.h1`
    display: flex;
    text-align: right;
    position: relative;
`;

const Img2 = styled.img`
    width: 20vh; 
    margin: 22.5vh 0 0 -25vw;
    position: absolute;
    animation: float 3s ease-in-out infinite;
    @keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}
`;

export const Card = () => {
    return(
    <CardBody>
        <Accordion></Accordion>
        <ImgContainer>
            <Img1 src={picture1}></Img1>
            <Img2 src={picture2}></Img2>
        </ImgContainer>
    <FAQTitle>FAQ</FAQTitle>
   
    </CardBody>
    );
}


export default Card