import styled from "styled-components";
const Container = styled.div`
    flex: 1;
    margin: 6px;
    height: 35vh;
    position: relative;
    background-color: white;
`
const LaptopDeals = styled.div`
    font-size: 30px;
    padding-left: 160px;
    padding-top: 10px ;
    padding-bottom: 10px;
`
const Image = styled.img`
    width: 80%;
    height: auto;
    padding-left: 60px;
     }
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // &:hover{
    //     // background-color: aliceblue;
    //     // opacity: 1;
    //     transform: scale(1.2)
    // }

`
const Title = styled.h1`
    padding-top: 40px;
    font-size: 25px;    
    color: white;    
    margin-bottom: 10px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: black;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 900;    
    opacity: 0.8;
    transition: all 0.5s ease;
    &:hover{
        // background-color: aliceblue;
        opacity: 1;
        transform: scale(1.2)
    }
`


const CategoryItem = ({item}) => {
  return (
    
    <Container>
        <LaptopDeals><h3>Top Laptop Deals!!</h3></LaptopDeals>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>View Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem