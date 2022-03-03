import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';
import { productByID } from '../apollo/product.querys';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { Button } from '../style/buttons';
import { minWidth } from '../style/responsive';

const Container = styled.div`
  ${minWidth(600, {
    paddingLeft: '24px',
    paddingRight: '24px;',
  })}

  ${minWidth(1280, {
    maxWidth: '1280px',
  })}
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  width: 100%;
  margin: 4rem auto;
  display: block;
`;
const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  margin-top: -24px;
  width: calc(100% + 24px);
  justify-content: space-around;
`;

const Item = styled.div`
  ${minWidth(960, {
    flexBasis: '50%',
    flexGrow: '0',
    maxWidth: '50%',
  })}

  box-sizing: border-box;
  margin: 0px;
  flex-direction: row;
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
  align-items: center;
  padding: 25px;
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`;

const Image = styled.img`
  width: 280px;
  height: 280px;
`;

const Model = styled.h1`
  margin-bottom: 16px;
  margin-top: 0px;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.5;
  text-transform: none;
  white-space: normal;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const RatingText = styled.div`
  line-height: 1;
`;

const RatingWrapper = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  line-height: 1;
`;

const GroupStar = styled.span`
  display: inline-flex;
  position: relative;
  color: #faaf00;
  cursor: pointer;
  text-align: left;
  pointer-events: none;
  font-size: 1.25rem;
`;

const Star = styled.span`
  display: flex;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  pointer-events: none;
  margin-top: -2px;
`;

const StarIcon = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: inherit;
`;

const Price = styled.h2`
  margin-bottom: 24px;
  margin-bottom: 4px;
  margin-top: 0px;
  font-size: 25px;
  font-weight: 700;
  line-height: 1;
  color: rgb(210, 63, 87);
  text-transform: none;
  white-space: normal;
`;

export default function ProductDetail() {
  const { id } = useParams();
  const { data } = useQuery(productByID, { variables: { productId: id } });

  const { photo = '', model = '', price = '0', category = '' } = !!data && data.product;
  console.log(!!data && data.product.photo);
  return (
    <>
      <Announcement />
      <NavBar />
      <Container>
        <div className="w-100">
          <Wrapper>
            <Item>
              <div>
                <LeftContainer>
                  <Image alt="Product" src={photo} />
                </LeftContainer>
              </div>
            </Item>
            <Item>
              <Model>{model}</Model>
              <RatingContainer>
                <RatingText style={{ fontSize: '15px' }}>Rated: </RatingText>
                <RatingWrapper>
                  <GroupStar>
                    <Star>
                      <StarIcon>
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </StarIcon>
                    </Star>
                    <Star>
                      <StarIcon>
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </StarIcon>
                    </Star>
                    <Star>
                      <StarIcon>
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </StarIcon>
                    </Star>
                    <Star>
                      <StarIcon>
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </StarIcon>
                    </Star>
                    <Star>
                      <StarIcon>
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </StarIcon>
                    </Star>
                  </GroupStar>
                </RatingWrapper>
              </RatingContainer>
              <div className="mb-4" style={{ fontSize: '14px', color: '#8c9495' }}>
                Category: {category}
              </div>
              <Price>${price}.00</Price>
              <div style={{ fontSize: '15px', fontWeight: '400' }}>Stock Available</div>
              <Button style={{ marginTop: '30px' }}>Add to Cart</Button>
            </Item>
          </Wrapper>
        </div>
      </Container>
      <Footer />
    </>
  );
}
