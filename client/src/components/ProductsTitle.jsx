import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  text-align: center ;
`

const ProductsTitle = () => {
  return (
    <Container>
      <Title>Popular Right Now</Title>
    </Container>
  )
}

export default ProductsTitle