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
    width: 25%;
    padding: 20px;
    background-color: white;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 30px;
    font-weight: 100;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    font-size: 20px;
    padding: 10px;
    margin: 10px 0px;
`

const Button = styled.button`
    width: 30%;
    border: none;
    padding: 15px 20px;
    color: white;
    font-size: 20px;
    background-color: teal; 
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover{
        transform: scale(1.03)
    }    
`
const Links=styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`
const Link = styled.a`

    margin: 3px 0px;
    font-size: 20px;
    text-decoration: underline;
    cursor: pointer;

`
const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="User Name"/>
                <Input placeholder="Password"/>
            </Form>
            <Button>Login</Button>
            <Links>
            <Link>Don't remember your password?</Link>
            <Link>Create a new account</Link>
            </Links>
        </Wrapper>
    </Container>
  )
}

export default Login;