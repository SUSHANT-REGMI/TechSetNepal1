import styled from "styled-components"
import React from 'react'
import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"

const Container = styled.div`
    display: flex;
    // flex-direction: column;
    background-color: rgb(220,238,250);
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo= styled.h1``
const Desc= styled.p`
    max-width: 400px;
    margin: 10px 0px;
`
const SocialContainer= styled.div`
    display: flex;
`
const SocialIcon= styled.div`
    width: 50px;
    height: 50px;
    cursor: pointer;   
    color: white; 
    background-color:#${props=>props.color};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title=styled.h3`
    font-size: 35px;
    margin-bottom: 10px;


`
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem= styled.li`
    width: 50%;    
    cursor: pointer;
    margin: 5px 0px;
    font-size: 20px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem= styled.div`
    // width: 50%; 
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 3px;
    margin-bottom: 20px;
    font-size: 20px;
`
// const Payment= styled.img`
//     width: 150px;
// `
const Footer = () => {
  return (
    <Container>
        <Left>
                <Logo>TECHSETNEPAL</Logo>
                <Desc>TechSetNepal is an ecommerce websites that facilitates their customers with variety of technological products including Mobile Phones, HeadPhones, Airbud, Laptops, Readymade PC, LED TV and many more...</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Best Laptops</ListItem>
                <ListItem>Best SmartPhones</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Contact</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>28-kilo, Dhulikhel, Bagmati, Nepal</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/> +977 9861583492, 01-4495839</ContactItem>
            <ContactItem><MailOutlined style={{marginRight:"10px"}}/>contact@techsetnepal.com</ContactItem>
            {/* <Payment src="https://i.ibb.co/Z8yzrzT/card.jpg"/> */}
        </Right>
    </Container>
  )
}

export default Footer;