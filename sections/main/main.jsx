import Image from "next/image";
import { Container, Header, HeaderText, HeaderSubtext, MainSection, ImageContainer, CardContainer } from "./elements"

export const Main = ({ image, title, text, order, ...props }) => {
    return (

        <Container>
            <Header>
                <HeaderText>{title}</HeaderText>
                <HeaderSubtext>{text}</HeaderSubtext>
            </Header>
            <MainSection>
                <ImageContainer>
                    <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
                </ImageContainer>
                <CardContainer>
                    {order.map((i) => (
                        <StyledCard
                            key={i.id}
                            image={i.image}
                            title={i.title}
                            text={i.text}
                        />
                    ))}
                </CardContainer>
            </MainSection>
        </Container>

    )
}