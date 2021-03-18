import React, { useState } from "react";
import styled from "styled-components";
import { Data } from "./AccordionData";
import picture3 from "../assets/icon-arrow-down.svg";
const AccordionSection = styled.div`
  margin-left: 25.5vw;
  max-width: 350px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 30vh;
  width: 35vw;
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

const ArrowDown = styled.img`
  margin-left: 45px;
`;

const Dropdown = styled.div`
  flex-direction: column;
  align-items: center;
  border-top: 1px solid hsl(240, 5%, 91%);
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return ( // TODO: ADD BOLD STYLE ON HOVER
    <AccordionSection>
      <Container>
        {Data.map((item, index) => {
          return (
            <>
              <Wrap
                onClick={() => toggle(index)}
                key={index}
                style={{
                  borderBottom: "1px solid hsl(240, 5%, 91%)",
                  marginTop: "15px",
                }}
              >
                <h1
                  style={{
                    fontSize: "14px",
                    color: "hsl(237, 12%, 33%)",
                    fontFamily: "Kumbh Sans, sans-serif",
                    fontWeight: "500"
                  }}
                >
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
                  <p style={{ fontSize: "14px", color: "hsl(240, 6%, 50%)", fontFamily: "Kumbh Sans, sans-serif" }}>
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
