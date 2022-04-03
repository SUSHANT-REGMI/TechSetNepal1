import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../Responsive"
const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Language = styled.span`
    font-size: 20px;
    cursor: pointer;
    ${mobile({ display: "none" })}
    &:hover{
        // background-color: aliceblue;
        transform: scale(1.2)
    }
`
// const SearchContainer = styled.div`
//     border: 0.5px solid black;    
//     display: flex;
//     align-items: center;
//     margin-left: 25px;
//     padding: 5px;
//`
const SearchContainer = styled.div`
    border: 0.1px solid black;
    display: flex;
    align-items: center;
    margin-left: 25px;
//  padding: 5px;
  
`;
const Input = styled.input`
    font-size:15px;
    border: none;
    // margin: 10px;
    padding: 10px;

    ${mobile({ width: "50px" })}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
    font-size: 24px;
    cursor: pointer;  
    margin-left: 25px; 
    ${mobile({ fontSize: "12px", marginLeft: "10px" })} 
    &:hover{
        // background-color: aliceblue;
        transform: scale(1.2)
    }
`


const Navbar = () => {
  return (
    <Container><Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input></Input>
                <Search style={{color:"green",fontSize: 24}}></Search>
            </SearchContainer>
        </Left>
        <Center><Logo>TechSetNepal</Logo></Center>
        <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In </MenuItem>
            <MenuItem>
                <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined/>
                </Badge>
            </MenuItem>
        </Right>
        </Wrapper></Container>
  )
}

export default Navbar