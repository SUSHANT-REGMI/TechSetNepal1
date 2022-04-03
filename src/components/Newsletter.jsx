import {Send} from '@material-ui/icons'
import styled from "styled-components";

const Container = styled.div`
    height: 60vh;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;    
`
const Desc = styled.div`
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 20px;

`
const InputContainer = styled.div`
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background-color: aliceblue;
    border: 1px solid black;
    // padding-left: 10px;
    
`
const Input = styled.input`
    border-radius: 5px;
    border: none;
    width: 100%;    
    padding-left: 10px;
    font-size: 2rem;
    flex:10;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;    
    
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get Regular Updates on Arrival of New Laptop Models, Price Drop Alerts and many more offers!!!</Desc>
        <InputContainer>
            <Input placeholder='Your Email'/>
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter;