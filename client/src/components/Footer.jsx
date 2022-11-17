import styled from 'styled-components'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../responsive";
import { Link } from "react-router-dom"


const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-right: 50px;
`
const Logo = styled.h1`
  
`
const Description = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`
const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8"})}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

`
const Payment = styled.img`
  width: 50%;
`

const linkStyle = {
  textDecoration: "none",
  color: "black",
}

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>CIGART.</Logo>
        <Description>
          A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in. I am not in danger, Skyler. I AM the danger! A guy opens his door and gets shot and you think that of me? No. I am the one who knocks!
        </Description>
        <SocialContainer>
          <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/"
            >
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          </a>
          <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/"
           >
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          </a>
          <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitter.com/"
            >
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          </a>
          <a
              target="_blank"
              rel="noreferrer"
              href="https://www.pinterest.com/"
            >
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
          </a>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><Link to={`/`} style={linkStyle}>Home</Link></ListItem>
          <ListItem><Link to={`/cart`} style={linkStyle}>Cart</Link></ListItem>
          <ListItem><Link to={`/products/men`} style={linkStyle}>Men</Link></ListItem>
          <ListItem><Link to={`/products/women`} style={linkStyle}>Women</Link></ListItem>
          <ListItem><Link to={`/products/kids`} style={linkStyle}>Kids</Link></ListItem>
          <ListItem>Sale</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <RoomIcon style={{marginRight: "10px"}}/> 13927 Saticoy Street, Panorama City, California 91402.
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{marginRight: "10px"}}/> +1 714 583 8912
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{marginRight: "10px"}}/> contact@cigart.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer