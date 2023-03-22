import Image from "next/image";
import { Card } from "../../collections/Card/Card";
import { Container, Header, headerText, headerSubtext, mainSection, imageContainer, cardContainer } from "./elements"

export const main = ({ image, title, text, oreder, ...props }) => {
    return (

        <Container>
            <Header>
                <headerText> {title}</headerText>
                <headerSubtext>{text}</headerSubtext>
            </Header>
            <mainSection>
                <imageContainer>
                    <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
                </imageContainer>
                <cardContainer>
                    {order.map((i) => (
                        <Card
                            key={i.id}
                            image={i.image}
                            title={i.title}
                            text={i.text}
                        />
                    ))}
                </cardContainer>
            </mainSection>
        </Container>

    )
}