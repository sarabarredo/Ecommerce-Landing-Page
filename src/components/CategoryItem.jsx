import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    min-width: 500px;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.8);
    ${mobile({height: "30vh"})}    
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: #fff;
    margin-bottom: 20px;
    font-size: 50px;
`
const Button = styled.button`
    border: 1px solid #9e9d9d;
    padding: 10px;
    background-color: #fff;
    cursor: pointer;
    font-weight: 600;
    color: #676767;
    font-size: 20px;
    transition: all 0.5s ease;

    &:hover {
        background-color: #aeb7a2;
        color: #fff;
    }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>EXPLORAR</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem;