import React from 'react';
import styled from 'styled-components';
import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 80px;
    ${mobile({height: "50px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({marginLeft: "-15px"})}
`   
const Language = styled.span`
    font-size: 18px;    
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        color: #697060;
    }
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}

    &:focus {
        outline: none;
    }
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
    ${mobile({fontSize: "24px"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2, justifyContent: "center"})}
`
const MenuItem = styled.div`
    font-size: 18px;    
    cursor: pointer;
    margin-left: 25px;
    transition: all 0.5s ease;

    &:hover {
        color: #697060;
    }
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>ES</Language>
                <SearchContainer>
                    <Input placeholder='Buscar...'/> 
                    <SearchIcon style={{color:'gray', fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>SHOP.</Logo>
            </Center>
            <Right>
                <MenuItem>Registrarse</MenuItem>
                <MenuItem>Iniciar sesión</MenuItem>
                <MenuItem>
                    <Badge color="success" badgeContent={1} variant="dot">
                        <ShoppingBagOutlinedIcon />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;