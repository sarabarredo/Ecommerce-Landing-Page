import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #eef3e7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({fontSize: "50px"})}
`
const Description = styled.div`
    font-size: 20px;
    letter-spacing: 1px;
    margin-bottom: 20px;
    ${mobile({textAlign: "center", fontSize: "16px", padding: "0 10px"})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid #c3c2c2;
    ${mobile({width: "80%"})}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    
    &:focus {
        outline: none;
    }
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #aeb7a2;
    color: #fff;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
    background: #959c8a;
    }
`
    
const Newsletter = () => {
    return (
    <Container>
         <Title>NEWSLETTER</Title>
         <Description>Suscríbete al boletín informativo y recibe ofertas exclusivas cada semana.</Description>
         <InputContainer>
            <Input placeholder='Escribe aquí tu correo electrónico'/>
            <Button>
                <SendOutlinedIcon />
            </Button>
         </InputContainer>
    </Container>
    )
}
    
export default Newsletter;