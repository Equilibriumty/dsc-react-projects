import React, { useState } from "react";
import styled from "styled-components";
import { Data } from "./AccordionData";
import picture3 from "../assets/icon-arrow-down.svg";
const AccordionSection = styled.div`
  margin: 20vh 0 0 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 50vh;
  width: 20vw;
`;

const Container = styled.div`
  position: absolute;
  display: inline-block;
`;

const Wrap = styled.div`
  &:hover {
    color: hsl(14, 88%, 65%);
  }
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
`;

const ArrowDown = styled.img``;

const Dropdown = styled.div`
  flex-direction: column;
  align-items: center;
  border-top: 1px solid lightgrey;
`;

const Accordion = () => {
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
        {Data.map((item, index) => {
          return (
            <>
              <Wrap
                onClick={() => toggle(index)}
                key={index}
                style={{
                  borderBottom: "2px solid hsl(240, 5%, 91%)",
                  marginTop: "5px",
                }}
              >
                <h1 style={{ fontSize: "18px", color: "hsl(237, 12%, 33%)" }}>
                  {item.question}
                </h1>
                <span style={{}}>
                  {clicked === index ? (
                    <ArrowDown
                      src={picture3}
                      style={{ transform: "rotate(180deg)" }}
                      key={index}
                    />
                  ) : (
                    <ArrowDown src={picture3} key={index} />
                  )}
                </span>
              </Wrap>
              {clicked === index ? (
                <Dropdown>
                  <p style={{ fontSize: "15px", color: "hsl(240, 6%, 50%)" }}>
                    {item.answer}
                  </p>
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
