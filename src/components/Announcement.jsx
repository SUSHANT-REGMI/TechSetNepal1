// import React from 'react'
import styled from "styled-components"
const Container = styled.div`
    height: 40px;
    background-color: teal;
    color: white;  
    font-family: 'comic-sans';
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 500; 
    
`
const Announcement = () => {
  return (
    <Container>
        Super Deal!! Free Shipping on Orders Over $50!😍😍
    </Container>
  )
}

export default Announcement