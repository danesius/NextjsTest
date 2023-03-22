import Image from "next/image";
import {
    cardContainer, iconContainer, contentContainer, styledTitle, styledText
} from "./elements"
export const Card = ({ image, title, text }) => {
    return (
        <cardContainer>

            <iconContainer>
                <Image layout="responsive" src={image.src} width={image.width} height={image.height} alt={image.alt} />
            </iconContainer>

            <contentContainer>

                <styledTitle><h2>{title}</h2></styledTitle>

                <styledText><p>{text}</p></styledText>

            </contentContainer>
        </cardContainer>


    );


};