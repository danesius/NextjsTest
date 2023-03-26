import styled from "styled-components";
import { SectionContainer, SectionHeading, SectionSubheading } from "~/components"
import { Card } from "../../collections/Card/Card";


export const Container = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`

flex-direction: column;
  gap: 3rem;
  align-items: center;
  background-image: url("/img/background.png");
  background-size: cover;
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
  `;


export const MainSection = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
flex-direction: column;
gap: 4rem;
width: min(1100px, 100%);
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
  justify-content: space-around;
  @media(max-width: 1024px) {
    margin:  0 5rem;
    row-gap:2rem;
  }
  @media(max-width: 550px) {
    margin:  0 ;
  }
 ` ;
export const StyledCard = styled(({ ...props }) => <Card {...props} />)`
 
 ` ;
