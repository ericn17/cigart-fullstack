import styled from 'styled-components'
import React from 'react'
import Navbar from '../components/Navbar'
import Promotion from '../components/Promotion'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../responsive";
import { useSelector } from 'react-redux'
import StripeCheckout from "react-stripe-checkout"
import { useState, useEffect } from "react"
import { userRequest } from '../requestMethods'
import { useNavigate, Link } from 'react-router-dom'

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`
  
`
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px"})}
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black": "transparent"};
  color: ${props=>props.type === "filled" && "white"};
`
const TopTexts = styled.div`
  ${mobile({ display: "none"})}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`
const ProductSize = styled.span`

`
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "15px 15px" })}
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === "total" && "5"};
  font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`

const linkStyle = {
  textDecoration: "none",
  color: "black",
}

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const [stripeToken, setStripeToken] = useState(null)
  const navigate = useNavigate()

  const onToken = (token)=> {
    setStripeToken(token);
  };
  useEffect(()=>{
    const makeRequest = async ()=> {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate.push("/success", {
          stripeData:res.data,
          products: cart, })
      }catch{}
    }
    stripeToken && makeRequest();
  },[stripeToken, cart.total, navigate])

  const quantity = useSelector(state=> state.cart.quantity)
  return (
    <Container>
      <Navbar/>
      <Promotion/>
      <Wrapper>
        <Title>Shopping Cart</Title>
        <Top>
          <TopButton><Link to ={`/`} style={linkStyle}>CONTINUE SHOPPING</Link></TopButton>
          <TopTexts>
            <TopText>Shopping Bag({quantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map(product=>(
            <Product>
              <ProductDetail>
                <Image src={product.image}/>
                <Details>
                  <ProductName><b>Product:</b> {product.title} </ProductName>
                  <ProductId><b>ID:</b>{product._id}</ProductId>
                  <ProductColor color={product.color}/>
                  <ProductSize><b>Size:</b> {product.size}</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon/>
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <RemoveIcon/>
                </ProductAmountContainer>
                <ProductPrice>${product.price * product.quantity}</ProductPrice>
              </PriceDetail>
            </Product>
            ))}
            <Hr/>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
             <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.99</SummaryItemPrice>
            </SummaryItem>
             <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>- $5.99</SummaryItemPrice>
            </SummaryItem>
            <Hr/>
             <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout 
              name="CIGART" 
              image="https://pbs.twimg.com/profile_images/706844157093027840/2Aan_aSU_400x400.jpg"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total*100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart