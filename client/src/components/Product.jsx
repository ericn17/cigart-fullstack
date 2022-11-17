import styled from 'styled-components'
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import HeartIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom'

const IconContainer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 400px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${IconContainer} {
    opacity: 1;
  }
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
const Image = styled.img`
  height: 60%;
  z-index: 2;
  width: 60%;
  object-fit: cover;
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`
const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`

const Title = styled.div`
  font-weight: 800;
`

const Category = styled.div`
  font-weight: 400;
`
const Price = styled.div`
  font-weight: 600;
`


const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.image}/>
      <Info>
      <Title>{item.title}</Title>
      <Category>{item.category}</Category>
      <Price>${item.price}</Price>
      </Info>
      <IconContainer>
        {/* <Icon>
         <ShoppingCart/>
        </Icon> */}
        <Icon>
          <Link to={`/product/${item._id}`}>
         <SearchIcon/>
         </Link>
        </Icon>
        <Icon>
         <HeartIcon/>
        </Icon>
      </IconContainer>
    </Container>
  );
};

export default Product