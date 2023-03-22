import Image from "next/image";
import { CardContainer, IconContainer, ContentContainer, StyledTitle, StyledText } from "./elements"
export const Card = ({ image, title, text }) => {
    return (
        <CardContainer>

            <IconContainer>
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
            </IconContainer>

            <ContentContainer>

                <StyledTitle><h2>{title}</h2></StyledTitle>

                <StyledText><p>{text}</p></StyledText>

            </ContentContainer>
        </CardContainer>


    );


};