import React, { useState } from "react";
import {
  AccordionSection,
  Wrap,
  Container,
  Dropdown,
  ArrowDown,
  QuestionTitle,
  AnswerTitle,
} from "./styles/styles";
import picture3 from "../assets/icon-arrow-down.svg";

const Accordion = ({ items }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <AccordionSection>
      <Container>
        {items.map((item, index) => {
          return (
            <>
              <Wrap onClick={() => toggle(index)} key={index}>
                <QuestionTitle>{item.question}</QuestionTitle>
                <span>
                  {clicked === index ? (
                    <ArrowDown
                      src={picture3}
                      key={index}
                      style={{ transform: "rotate(180deg)" }}
                    />
                  ) : (
                    <ArrowDown src={picture3} key={index} />
                  )}
                </span>
              </Wrap>
              {clicked === index ? (
                <Dropdown>
                  <AnswerTitle>{item.answer}</AnswerTitle>
                </Dropdown>
              ) : null}
            </>
          );
        })}
      </Container>
    </AccordionSection>
  );
};

export default Accordion;
