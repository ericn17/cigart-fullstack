import styled from 'styled-components';
import React from 'react';
import { mobile } from "../responsive";
import { Link } from 'react-router-dom'

const Container = styled.div`
  margin-top: 5px;
  width: 300px;
  height: 200px;
  overflow: hidden;
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
`
const linkStyle = {
  textDecoration: "none",
  color: "black",
}

const SearchResults = ({ data }) => {
  return (
    <Container>
        {data
        .map((item) => (
          <Link style={linkStyle} to={`/product/${item._id}`}>
          <tr key={item.id}>
            <td>{item.title}</td>
          </tr>
          </Link>
        ))}
    </Container>
  );
};

export default SearchResults;