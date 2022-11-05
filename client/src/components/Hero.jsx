import React from 'react'
import styled from "styled-components"
import Hero1 from '../assets/img/hero-image-1.jpg'
import { Link } from "react-router-dom"
 

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   position: relative;
// `
const HeroSection = styled.div`
  width: 100%;
  position: relative;
`

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 90%;
  width: 100%;
  object-fit: cover;
`
const Btn = styled.button`
  display: flex;  
  outline: 0;
  text-align: center;
  padding: 17px 30px;
  border: 0;
  color: #fff;
  font-size: 17.5px;
  border: 2px solid transparent;
  border-color: #000;
  color: #000;
  font-weight: 800;
  line-height: 25px;
  transition: .1s ease-in-out;
  cursor: pointer;
  margin: 15px;
  text-decoration: none;

  /* &:hover {
    background-color: black;
    color: white;
  } */
`

const InfoContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 15%;
  right: 5%;
`

const Title = styled.h1`
  font-size:70px;
  line-height: 75px;
  color: white;
`

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 20px;
  
  color: white;
`

const linkStyle = {
  textDecoration: "none",
  color: "black"
}





function Hero() {
  return (
    <Container>
        <HeroSection>
          <ImgContainer>
            <Image src={Hero1}/>
          </ImgContainer>
          <InfoContainer>
            <Title>STAY AHEAD OF THE TRENDS</Title>
            <Desc>SHOES THAT PROVIDE STYLE AND COMFORT.</Desc>
            <Btn><Link to={`/products/men`} style={linkStyle}>SHOP MEN 🠪 </Link></Btn>
            <Btn><Link to={`/products/women`} style={linkStyle}>SHOP WOMEN 🠪 </Link></Btn>
            <Btn><Link to={`/products/kids`} style={linkStyle}>SHOP KIDS 🠪 </Link></Btn>
          </InfoContainer>
        </HeroSection>
    </Container>
  )
}

export default Hero