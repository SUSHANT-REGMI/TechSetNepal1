
import styled from "styled-components"
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://wallpaperaccess.com/full/5480502.jpg");
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 30px;
    font-weight: 100;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    padding: 10px;
    margin: 20px 10px 0px 0px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 30%;
    border: none;
    padding: 15px 20px;
    color: white;
    font-size: 20px;
    background-color: teal; 
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.03)
    }   
`




const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="User Name"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b>
                </Agreement>
            </Form>
            <Button>Create Account</Button>
        </Wrapper>
    </Container>
  )
}

export default Register