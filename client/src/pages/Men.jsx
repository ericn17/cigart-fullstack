import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Promotion from '../components/Promotion'
import Footer from '../components/Footer'
import ShoesMen from '../components/ShoesMen'
import Newsletter from '../components/Newsletter'
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom"
import { useState } from "react"

const Container = styled.div`
`

const Title = styled.h1`
  margin-top: 15px;
  margin: 15px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;
   ${mobile({ width: "0px 20px", display:"flex", flexDirection:"column"})}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
`
const Option = styled.option`
  
`

const Men = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [ filters, setFilters] = useState({});
  const [ sort, setSort] = useState("newest");


  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }


  return (
    <Container>
      <Navbar/>
      <Promotion/>
      <Title>Men</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Brown</Option>
            <Option>Gray</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
              <Option>6</Option>
              <Option>6.5</Option>
              <Option>7</Option>
              <Option>7.5</Option>
              <Option>8</Option>
              <Option>8.5</Option>
              <Option>9</Option>
              <Option>9.5</Option>
              <Option>10</Option>
              <Option>10.5</Option>
              <Option>11</Option>
              <Option>11.5</Option>
              <Option>12</Option>
          </Select>
        </Filter>
          <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ShoesMen category={category} filters={filters} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Men