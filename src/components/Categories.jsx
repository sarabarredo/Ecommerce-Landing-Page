import styled from "styled-components";
import { categories } from "../Data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({padding: "0", flexDirection:"column"})}
`
const Title = styled.h1`
    padding: 50px;
    font-size: 50px;
    display: flex;
    text-align: center;
    justify-content: center;
`

const Categories = () => {
  return (
    <div>
      <Title>CATEGORÍAS</Title>
        <Container>
            {categories.map(item=>(
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    </div>
  )
}

export default Categories;