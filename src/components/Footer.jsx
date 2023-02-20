import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Description = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #aeb7a2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
    transform: scale(1.1);
    }
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin: 10px 0 25px 0;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
    color: #959c8a;
    }
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%; 
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SHOP.</Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim aliquid totam! Veniam debitis, impedit nisi reiciendis nesciunt eveniet corrupti deleniti, nobis pariatur rerum est consectetur odio modi repudiandae minus.
            </Description>
            <SocialContainer>
                <SocialIcon>
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon>
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon>
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon>
                    <PinterestIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Enlaces de interés</Title>
            <List>
                <ListItem>Inicio</ListItem>
                <ListItem>Mi cuenta</ListItem>
                <ListItem>Lista de deseos</ListItem>
                <ListItem>Seguimiento de pedidos</ListItem>
                <ListItem>Tarjetas regalo</ListItem>
                <ListItem>Términos y condiciones</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contacto</Title>
            <ContactItem>
                <PlaceOutlinedIcon style={{marginRight:"10px"}}/>
                Avenida Los Robles 31
                47659
                Madrid
            </ContactItem>
            <ContactItem>
                <LocalPhoneOutlinedIcon style={{marginRight:"10px"}}/>
                +34 946 465 887
            </ContactItem>
            <ContactItem>
                <EmailOutlinedIcon style={{marginRight:"10px"}}/>
                info@shop.es
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer;