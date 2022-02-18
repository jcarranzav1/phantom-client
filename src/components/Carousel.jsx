import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Button } from '../style/buttons';
import { minWidth } from '../style/responsive';

const Container = styled.div`
  background-color: white;
  margin-bottom: 60px;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${minWidth(600, {
    paddingLeft: '24px',
    paddingRight: '24px;',
  })}
  ${minWidth(1280, {
    maxWidth: '1280px',
  })}
`;

const Slider = styled.ul`
  display: flex;
  align-items: stretch;
  width: 200%;
  flex-direction: row;
  transition: transform 0.5s;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  will-change: transform;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SliderList = styled.li`
  width: 50%;
  padding-bottom: unset;
  height: unset;
  position: unset;
  float: left;
  display: block;
  box-sizing: border-box;
  margin: 0;
  list-style-type: none;
`;

const ItemWrapper = styled.div`
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: -24px;
  width: calc(100% + 24px);
  margin-left: -24px;
  align-items: center;
  justify-content: center;
`;

const ItemLeft = styled.div`
  padding-left: 24px;
  padding-top: 24px;
  margin: 0;
  flex-direction: row;
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
  ${minWidth(600, {
    display: 'flex',
    alignItems: 'baseline',
    flexDirection: 'column',
    justifyContent: 'center',
    flexBasis: '41.666667%',
    flexGrow: 0,
    maxWidth: '41.666667%',
  })}
`;

const ItemTitle = styled.h1`
  font-size: 50px;
  margin-top: 0;
  margin-bottom: 1.35rem;
  line-height: 60px;
  font-weight: 700;
`;

const ItemText = styled.p`
  margin-bottom: 21.6px;
  margin-top: 0px;
  font-size: 15px;
  color: #0f3460;
  text-transform: none;
  white-space: normal;
  line-height: 1.75;
`;

const ItemRight = styled.div`
  padding-left: 24px;
  padding-top: 24px;
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
  ${minWidth(600, {
    flexBasis: '41.666667%',
    flexGrow: 0,
    maxWidth: '41.666667%',
  })}
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 400px;
  max-width: 100%;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const DotButton = styled.div`
  position: relative;
  height: 16px;
  width: 16px;
  border-radius: 300px;
  margin: 0.25rem;
  cursor: pointer;
  border: 1px solid #0f3460;
  &::after {
    position: absolute;
    content: ' ';
    height: 9px;
    width: 9px;
    top: 50%;
    left: 50%;
    border-radius: 300px;
    transform: translate(-50%, -50%) scaleX(1);
    background-color: #0f3460;
    display: ${(props) => (props.show ? 'block' : 'none')};
  }
`;

export default function Carousel() {
  const [change, setChange] = useState(false);
  const [showDots, setShowDots] = useState({ dot1: true, dot2: false });

  return (
    <Container>
      <Wrapper>
        <div style={{ position: 'relative', minWidth: 0 }}>
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              marginLeft: 'calc(-1 * 0px / 2)',
              marginRight: 'calc(-1 * 0px / 2)',
            }}>
            <Slider
              style={{
                transform: change
                  ? 'translateX(-50%) translateX(0px)'
                  : 'translateX(0%) translateX(0px)',
              }}>
              <SliderList aria-selected={false} role="option" tabIndex={-1}>
                <div style={{ position: 'unset', top: 0, left: 0, height: '100%' }}>
                  <ItemWrapper>
                    <ItemContainer>
                      <ItemLeft>
                        <ItemTitle>We are the number 1 online store in the country.</ItemTitle>
                        <ItemText>
                          Phantom has a very large community that always supports us to keep
                          growing.
                        </ItemText>
                        <Button>Shop Now</Button>
                      </ItemLeft>
                      <ItemRight>
                        <Image src="https://www.nitro-pc.es/blog/wp-content/uploads/2017/11/elite-1.png" />
                      </ItemRight>
                    </ItemContainer>
                  </ItemWrapper>
                </div>
              </SliderList>
              <SliderList role="option" tabIndex={0} aria-selected>
                <div style={{ position: 'unset', top: 0, left: 0, height: '100%' }}>
                  <ItemWrapper>
                    <ItemContainer>
                      <ItemLeft>
                        <ItemTitle>50% Off For Your First Shopping</ItemTitle>
                        <ItemText>
                          Enjoy this offer, buying the best components for your PC Gamer. Hurry up,
                          it will be over soon.
                        </ItemText>
                        <Button>Shop Now</Button>
                      </ItemLeft>
                      <ItemRight>
                        <Image src="https://m.media-amazon.com/images/I/91XyrUFYKfL._AC_SX679_.jpg" />
                      </ItemRight>
                    </ItemContainer>
                  </ItemWrapper>
                </div>
              </SliderList>
            </Slider>
            <DotContainer>
              <DotButton
                onClick={() => {
                  setChange(false);
                  setShowDots({ dot1: true, dot2: false });
                }}
                show={showDots.dot1}
              />
              <DotButton
                onClick={() => {
                  setChange(true);
                  setShowDots({ dot1: false, dot2: true });
                }}
                show={showDots.dot2}
              />
            </DotContainer>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}
