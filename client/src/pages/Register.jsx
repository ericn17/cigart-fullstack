import styled from "styled-components"
import RegisterImage from '../assets/img/register.jpg'
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${RegisterImage}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 12px 0px 0px;
  padding: 10px;
`
const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 10px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #008080;
  color: white;
  cursor: pointer;
`


const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>By creating an account, I conset to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register