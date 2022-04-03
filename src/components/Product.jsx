// import { Container } from '@material-ui/core'
// import React from 'react'
// import { Icon } from "@material-ui/core"
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components";

const Info= styled.div`
    opacity: 0;
    width: 100%;
    heightL 100%;
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(240,248,255,0.4);
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`
const Image= styled.img`
    width: 350px;
    height: 220px;
    padding: 0px 20px;
    // z-index: 2;
    transition: all 0.5s ease;

    &:hover{
        // background-color: aliceblue;
        // opacity: 1;
        transform: scale(1.2)
    }
`

const Icon= styled.div`
    width: 40px;
    height: 40px;
    margin: 10px;
    border-radius: 50%;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background-color: aliceblue;
        transform: scale(1.2)
    }
`

const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product