import React from "react";
import styled from "styled-components";

import { SectionSubheading, SectionParagraph } from "~/components";



export const CardContainer = styled(({ ...props }) => <div{...props} />)`
    margin-right: ${({ position }) =>
    position === 2 ? "0" : position === 1 ? "1rem" : "2rem"};
  display: flex;
  background: rgba(244, 244, 244, 255);
  border-radius: 15px;
  border: 2px solid transparent;
  :hover {
    border: 2px solid #1e7efb;
    h3 {
      color: #1e7efb;
      text-decoration: underline;
    }
    cursor: pointer;
  }
`;

export const IconContainer = styled(({ ...props }) => <div{...props} />)`
display: flex;
max-width: 5rem;
max-height: 5rem;
width: 100%;
height: 100%;
justify-content: center;
align-self: center;
padding: 2rem;


`;
export const ContentContainer = styled(({ ...props }) => <div{...props} />)`
color: black;
display: flex;
flex-direction: column;
align-items: flex-start;
font-family: sans-serif;

`
export const StyledTitle = styled(({ ...props }) => <SectionSubheading {...props} />)`
font-weight: 700;
`
export const StyledText = styled(({ ...props }) => <SectionParagraph {...props} />)`
`