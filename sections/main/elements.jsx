import styled from "styled-components";
import { SectionContainer, SectionHeading, SectionSubheading } from "~/components"


export const Container = styled(({ ...props }) => (
    <SectionContainer {...props} />
))`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 4rem;
background-image: url("../../resources/background.png");
background-size: contain;
background-repeat: no-repeat;

`;


export const Header = styled(({ ...props }) => (
    <SectionContainer {...props} />
))`
    flex-direction: column;
  `;


export const headerText = styled(({ ...props }) => (
    <SectionHeading {...props} />
))`
  color: black;
  text-align: center;
`;


export const headerSubtext = styled(({ ...props }) => (
    <SectionSubheading {...props} />
))`
    text-align: center;
    margin-top: 0;
  `;


export const mainSection = styled(({ ...props }) => (
    <SectionContainer {...props} />
))`
display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5rem;
  margin-bottom: 5rem;
@media(max-width: 1024px) {
    flex-direction: row;}
  `;


export const imageContainer = styled(({ ...props }) => (
    <div {...props} />
))`
  align-self: center;
  max-width: 25rem;
  max-height: 45rem;
  width: 100%;
  height: 100%;

  `;


export const cardContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  @media(max-width: 1024px) {
    margin: "5rem auto";
  }
 ` ;
