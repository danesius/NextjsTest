import React from "react";
import styled from "styled-components";

import { SectionSubheading, SectionParagraph } from "~/components";



export const CardContainer = styled(({ ...props }) => <div{...props} />)`
 
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
max-width: 4rem;
max-height: 4rem;
justify-content: center;
padding: 2rem;


`;
export const ContentContainer = styled(({ ...props }) => <div{...props} />)`
color: black;
display: flex;
flex-direction: column;
font-family: sans-serif;
padding-right:1rem;
`
export const StyledTitle = styled(({ ...props }) => <SectionSubheading {...props} />)`
font-weight: 700;
h2{
  margin-bottom:0;
}
`
export const StyledText = styled(({ ...props }) => <SectionParagraph {...props} />)`

`