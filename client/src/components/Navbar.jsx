import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


const Container = styled.div`
  ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ display: "none" })}
`

const Input = styled.input`
  border:none;
  ${mobile({ width: "50px" })}
`
const Center = styled.div`
flex: 1;
text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  font-size: 48px;
  ${mobile({ fontSize: "24px" })};
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`

const NavbarLinks = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px", marginRight: "10px" })}
`
const linkStyle = {
  textDecoration: "none",
  color: "black",
}

const Navbar = () => {
  const quantity = useSelector(state=> state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <NavbarLinks><Link to={`/products/men`} style={linkStyle}>Men</Link></NavbarLinks>
          <NavbarLinks><Link to={`/products/women`} style={linkStyle}>Women</Link></NavbarLinks>
          <NavbarLinks><Link to={`/products/kids`} style={linkStyle}>Kids</Link></NavbarLinks>
        </Left>
        <Center>
         <Link to={`/`} style={linkStyle}><Logo>CIGART.</Logo></Link>
        </Center>
        <Right>
          <NavbarLinks><Link to={`/login`} style={linkStyle}>Sign In</Link></NavbarLinks>
          <NavbarLinks><Link to={`/register`} style={linkStyle}>Register</Link></NavbarLinks>
          <Link to="/cart">
          <NavbarLinks>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCart color="action" />
            </Badge>
          </NavbarLinks>
          </Link>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <SearchIcon style={{color:"gray", fontSize: "20px"}}/>
          </SearchContainer>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar