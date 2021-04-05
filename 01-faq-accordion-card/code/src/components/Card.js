import React from "react";
import {
  CardBody,
  Img2,
  Img1,
  ImgBg,
  ImgContainer,
  BoxImgContainer,
  FAQTitle,
} from "./styles/styles";
import bg from "../assets/bg-pattern-desktop.svg";
import picture1 from "../assets/illustration-woman-online-desktop.svg";
import picture2 from "../assets/illustration-box-desktop.svg";
import Accordion from "./Accordion";

const Card = () => {
  return (
    <CardBody>
      <ImgContainer>
        <ImgBg src={bg}></ImgBg>
        <Img1 src={picture1}></Img1>
      </ImgContainer>
      <BoxImgContainer>
        <Img2 src={picture2}></Img2>
      </BoxImgContainer>
      <FAQTitle>FAQ</FAQTitle>
      <Accordion></Accordion>
    </CardBody>
  );
};

export default Card;
