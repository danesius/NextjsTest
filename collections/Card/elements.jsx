import React from "react";
import styled from "styled-components";

import { SectionSubheading, SectionParagraph } from "~/components";



export const cardContainer = styled(({ ...props }) => <div{...props} />)`
    display: flex;
    align-items: center;
    width: 100%;
    background: rgba(244, 244, 244, 255);
    border-radius: 15px;
    border: 2px solid transparent;
    margin-right: ${({ position }) =>
        position === 2 ? "0" : position === 1 ? "1rem" : "2rem"};

    :hover {
        cursor: pointer;
        border: 2px solid #1e7efb;
        h2 {
          color: #1e7efb;
          text-decoration: underline;
        }}

`;

export const iconContainer = styled(({ ...props }) => <div{...props} />)`
display: flex;
max-width: 5rem;
max-height: 5rem;
justify-content: center;
  align-self: center;



`;
export const contentContainer = styled(({ ...props }) => <div{...props} />)`
color: black;
display: flex;
flex-direction: column;
align-items: flex-start;
font-family: sans-serif;

`
export const styledTitle = styled(({ ...props }) => <SectionSubheading {...props} />)`
font-weight: 700;
`
export const styledText = styled(({ ...props }) => <SectionParagraph {...props} />)`
`