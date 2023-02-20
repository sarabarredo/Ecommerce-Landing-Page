import styled from "styled-components";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 10px;
    min-width: 280px;
    height: 350px;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 2;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        background-color: #aeb7a2;
        transform: scale(1.1);
    }
`

const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingBagOutlinedIcon />
            </Icon>
            <Icon>
                <SearchIcon />
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product;