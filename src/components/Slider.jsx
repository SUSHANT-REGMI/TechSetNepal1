import { ArrowLeftOutlined, ArrowRightOutlined, Info } from "@material-ui/icons";
// import SlideImage1 from '../images/dp.png';
// import SlideImage2 from '../images/gaming-pc.png';
// import SlideImage3 from '../images/monitor-image.jpg';
import {useState} from 'react';
import { sliderItems } from "../data";
import styled from "styled-components";
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;    
    background-color: aliceblue;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: teal;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.8;
    z-index: 2;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.2)
    }
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex*-100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props=>props.bg};
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    padding-left: 20px;
`
const Image = styled.img`
    height: 80%;
    background: transparent;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;

`
const Title = styled.h1`
    font-size: 70px;
`
const  Desc = styled.p`
    font-size: 20px;
    margin: 10px 0px;
    font-weight: 500;
    // letter-spacing: 1px;
`
const Button = styled.button`
    margin-top: 5px;    
    padding: 10px;
    font-size:20px;
    font-weight: 900;
    color: white;
    background-color: teal;
    cursor: pointer;
    border: none;
    transition: all 0.5s ease;
    &:hover{
        // background-color: aliceblue;
        transform: scale(1.2)
    }
`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1:2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1:0);
        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button> Check It Out!</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  );
};

export default Slider