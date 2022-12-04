import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState, useEffect } from 'react';
import axios from 'axios';




const Container = styled.div`
  ${mobile({ height: "50px" })};
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

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 75px;
  margin-right: 10px;
  border: 0.5px solid black;
  position: relative;
`

const SearchBox = styled.div`
  display: flex;
  padding: 5px;
  ${mobile({ display: "none" })}
  width: 250px;
`
const SearchResults = styled.div`
  margin-top: 33px;
  width: 240px;
  overflow: 
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  z-index: 100;
  position: absolute;
`

const Input = styled.input`
  border:none;
  ${mobile({ width: "50px" })};
  display: flex;
  width: 200px;
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

  const [products, setProducts] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000/api/products`);
      setData(res.data);
    };
    fetchData();
  }, [products]);



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
          <SearchContainer>   
            <SearchBox>
              <Input 
                type="search"
                placeholder="Search"
                className="search"
                onChange={(e) => setProducts(e.target.value.toLowerCase())}
              />
              <SearchIcon style={{color:"gray", fontSize: "20px", marginLeft: "30px"}}/>
            </SearchBox>  
            {products.length !== 0 && (
            <SearchResults>
                {data
                .filter((item) => {
                  return products.toLowerCase() === '' 
                  ? item 
                  : item.title.toLowerCase().includes(products)
                }).map((item) => (
                  <Link style={linkStyle} to={`/product/${item._id}`}>
                  <tr key={item.id}>
                    <td>{item.title}</td>
                  </tr>
                  </Link>
                 ))}
            </SearchResults>
             )}
          </SearchContainer>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar