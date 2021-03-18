import React from 'react'
import styled from 'styled-components'
import bg from '../assets/bg-pattern-desktop.svg'
import picture1 from '../assets/illustration-woman-online-desktop.svg'
import picture2 from '../assets/illustration-box-desktop.svg'
import Accordion from './Accordion'
 
const CardBody = styled.div`
    margin: 20vh 0;
    background-color: #fff;
    border-radius: 25px;
    width: 45vw;
    height: 55vh;
    box-shadow: 0px 50px 50px -20px rgba(53, 18, 122, 0.497159);
`;

const ImgBg = styled.img` // TODO: FIX BG IMAGE
    position: absolute;
    top: -298px;
    left: -580px;
`;

const ImgContainer = styled.div`
    float: left;
    position: relative;
    margin-bottom: 5vh;
    width: 50%;
    height: 100%;
    display: block;
    overflow: hidden;
`;

const Img1 = styled.img`
    margin-left: -84px;
    margin-top: 68px;
`;

const FAQTitle = styled.h1` // TODO FIX FONT
    display: flex;
    text-align: right;
    margin-left: 25vw;
    padding-top: 7.5vh;
    position: relative;
`;

const Img2 = styled.img`
    display: inline-block;
    position: relative;
    left: -5vw;
    top: -12vw;
    animation: 3s float ease-in-out infinite;
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
        <ImgContainer>
            <Img1 src={picture1}></Img1>
            <Img2 src={picture2}></Img2>
            <ImgBg src={bg}></ImgBg>
        </ImgContainer>
        <FAQTitle>FAQ</FAQTitle>
        <Accordion></Accordion>
    </CardBody>
    );
}


export default Card