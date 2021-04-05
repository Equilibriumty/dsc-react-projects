import styled from "styled-components";

const AccordionSection = styled.div`
  margin-left: 25.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 30vh;
  width: 18.5vw;
`;

const Container = styled.div`
  position: absolute;
  display: inline-block;
`;

const Wrap = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1vh solid hsl(240, 5%, 91%);
  margin-top: 2vh;
`;

const ArrowDown = styled.img`
  margin-left: 3vw;
  width: 0.5vw;
`;

const Dropdown = styled.div`
  flex-direction: column;
  align-items: center;
  border-bottom: 0.1vh solid hsl(240, 5%, 91%);
`;

const QuestionTitle = styled.h1`
  font-size: 1.6vh;
  color: hsl(237, 12%, 33%);
  font-family: Kumbh Sans, sans-serif;
  font-weight: 400;
  hover: {
    color: red;
  }
`;

const AnswerTitle = styled.p`
  font-size: 1.5vh;
  color: hsl(240, 6%, 50%);
`;

const CardBody = styled.div`
  margin: 20vh 0;
  background-color: #fff;
  border-radius: 1.5vw;
  width: 50vw;
  height: 55vh;
  box-shadow: 0px 5vw 5vw -2vh rgba(53, 18, 122, 0.497159);
`;

const ImgBg = styled.img`
  position: absolute;
  top: -30vh;
  left: -30vw;
  width: 50.5vw;
`;

const ImgContainer = styled.div`
  float: left;
  position: relative;
  margin-bottom: 5vh;
  width: 45%;
  height: 100%;
  display: block;
  overflow: hidden;
`;

const Img1 = styled.img`
  margin-left: -4.5vw;
  margin-top: 8vh;
  width: 25vw;
`;

const FAQTitle = styled.h1`
  font-size: 4.5vh;
  display: flex;
  text-align: right;
  margin-left: 25.5vw;
  padding-top: 7.5vh;
  position: relative;
  font-weight: 700;
`;

const BoxImgContainer = styled.div`
  position: absolute;
  top: 42.5vh;
  left: 20.2vw;
`;

const Img2 = styled.img`
  animation: 3s float ease-in-out infinite;
  width: 10vw;
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-2vh);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;

export {
  AccordionSection,
  Wrap,
  Dropdown,
  Container,
  ArrowDown,
  QuestionTitle,
  AnswerTitle,
  ImgBg,
  ImgContainer,
  BoxImgContainer,
  CardBody,
  Img1,
  Img2,
  FAQTitle,
};
