import styled from 'styled-components'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from "../responsive";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Container = styled.div`
  height: 65vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`

const Description = styled.div`
  font-size: 24px;
  ${mobile({ textAlign: "center" })}
`

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%"})}
`

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #008080;
  color: white;
  cursor: pointer;
`

const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zxw4v2r', 'template_v3ov577', form.current, 'EhCZ0-sh8V4nYXin-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
        <form ref={form} onSubmit={sendEmail}>
        <InputContainer>
          <Input 
            placeholder="Email"
            type="email"
            name="email"          
          />
          <Button>
            <SendIcon input type="submit" value="Send" />
          </Button>
        </InputContainer>
        </form>
    </Container>
  )
}

export default Newsletter