import styled from "styled-components";
import { popularProducts } from "../Data";
import Product from "./Product";

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Title = styled.h1`
    padding: 50px;
    font-size: 50px;
    display: flex;
    text-align: center;
    justify-content: center;
`

const Products = () => {
  return (
    <div>
      <Title>LOS MÁS VENDIDOS</Title>
    <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id} />
        ))}
    </Container>
    </div>
  )
}

export default Products;