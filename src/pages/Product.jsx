import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"

const Container= styled.div``
const Wrapper= styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer= styled.div`
    flex:1;    
`
const InfoContainer= styled.div`
    flex: 1;
    padding: 10px;   
`
const Image= styled.img`
    width: 100%;
    height: 70vh;    
    transition: all 1s ease;
    &:hover{
        transform: scale(1.1)
    }
`
const Title= styled.h1`
    font-size: 3rem;
    font-weight: 100;
`
const Desc= styled.p`
    margin: 20px 0px;
    font-size: 20px;
`
const Price= styled.span`
    font-weight:lighter;
    font-size: 50px;
`;

const FilterContainer= styled.div`
    display: flex;
    margin: 30px 0px;
    font-size: 2rem;
    align-items: center;
`
const Filter= styled.div`
    display: flex;
    // flex-direction: row;
    align-items: center;
`
const FilterTitle= styled.span`
    font-size: 20px;
    font-weight: 100;
`
const FilterColor= styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #${props=>props.color};
    margin: 0px 7px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.4)
    }
`
const AddContainer= styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const AmountContainer= styled.div`
    display: flex;
    align-items: center;
    font-weight: 900;
`
const Amount= styled.span`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid teal;    
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`
const Button= styled.button`
    padding: 10px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-size: 30px;
    font-weight: 500;
    &:hover{
        background-color: aliceblue;
    }
`

const Product = () => {
  return (

        
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                <Image src="https://i.ibb.co/S6SHHpV/dp.png"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>LEADER Resistance VR Striker Gaming Notebook V7G</Title>
                    <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis voluptates magnam fugit dolores numquam omnis soluta maiores libero, assumenda quis sequi ullam delectus officiis nemo dicta aspernatur labore animi consequuntur beatae a et. Modi illum assumenda voluptate aliquid ad ea.</Desc>
                    <Price>Price: $ 1200.0</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>
                                Color:
                            </FilterTitle>
                            <FilterColor color="000000"/>
                            <FilterColor color="FF0000"/>
                            <FilterColor color="808080"/>
                            <FilterColor color="008080"/>
                            <FilterColor color="010309"/>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
  )
}

export default Product