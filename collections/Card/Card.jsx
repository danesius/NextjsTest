import Image from "next/image";
import { CardContainer, IconContainer, ContentContainer, StyledTitle, StyledText } from "./elements"
export const Card = ({ image, title, text }) => {
    return (
        <CardContainer>

            <IconContainer>
                <Image layout="responsive" src={image.src} width={image.width} height={image.height} alt={image.alt} />
            </IconContainer>

            <ContentContainer>

                <StyledTitle><h2>{title}</h2></StyledTitle>

                <StyledText><p>{text}</p></StyledText>

            </ContentContainer>
        </CardContainer>


    );


};