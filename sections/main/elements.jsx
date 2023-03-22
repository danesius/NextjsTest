import styled from "styled-components";
import { SectionContainer, SectionHeading, SectionSubheading } from "~/components"


export const Container = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`

flex-direction: column;
  gap: 3rem;
  align-items: center;
  background-image: url("/img/background.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 3rem;
`;


export const Header = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
    flex-direction: column;
  `;

export const HeaderText = styled(({ ...props }) => (
  <SectionHeading {...props} />
))`
    color: black;
    text-align: center;
   
  `;




export const HeaderSubtext = styled(({ ...props }) => (
  <SectionSubheading {...props} />
))`
    text-align: center;
    margin-top: 0;
  `;


export const MainSection = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
flex-direction: column;
gap: 4rem;
width: min(1100px, 85%);
padding-bottom: 3rem;
@media (min-width: 1024px) {
  flex-direction: row;
  
}
  `;


export const ImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  align-self: center;
  max-width: 25rem;
  max-height: 45rem;
  width: 100%;
  height: 100%;

  `;


export const CardContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  @media(max-width: 1024px) {
    margin: "5rem auto";
  }
 ` ;
