import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import Select from 'react-select';
import Ripples from 'react-ripples';
import { useQuery } from '@apollo/client';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { minWidth } from '../style/responsive';
import { sortBy } from '../data/categoryData';
import { colorStyles } from '../style/select';
import ProductList from '../components/Products/ProductList';
import ProductList2 from '../components/Products/ProductList2';
import { getAllProducts } from '../apollo/product.querys';
import { FilterProductSearch, SortProducts } from '../utils/utils';

const Container = styled.div`
  ${minWidth(1280, {
    maxWidth: '1280px',
  })}
  ${minWidth(600, {
    paddingLeft: '24px',
    paddingRight: '24px;',
  })}
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const FilterContainer = styled.div`
  ${minWidth(960, {
    padding: '0.5rem 1.25rem',
  })}
  ${minWidth(960, {
    padding: '1rem 1.25rem',
  })}
  ${minWidth(0, {
    padding: '1.25rem 1.25rem 0.25rem',
  })}

  background-color: #fff;
  color: #2b3445;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgb(3 0 71 / 9%);
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 55px;
`;

const SearchinText = styled.h5`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-transform: none;
  white-space: normal;
`;
const SearchinResults = styled.p`
  margin-bottom: 0px;
  margin-top: 5px;
  font-size: 14px;
  color: #7d879c;
  text-transform: none;
  white-space: normal;
`;

const FilterOption = styled.div`
  flex-wrap: wrap;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const SortBy = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0;
`;

const SortByText = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 14px;
  color: #7d879c;
  margin-right: 16px;
  white-space: pre;
  text-transform: none;
  white-space: normal;
`;

const ViewContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  & .react-ripples {
    border-radius: 50%;
  }
`;
const ViewTitle = styled.h5`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 14px;
  color: #7d879c;
  margin-right: 8px;
  text-transform: none;
  white-space: normal;
`;

const ViewButtons = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  text-align: center;
  flex: 0 0 auto;
  font-size: 1.5rem;
  padding: 8px;
  border-radius: 50%;
  overflow: visible;
  color: rgba(0, 0, 0, 0.54);
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const ViewIcons = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.55rem;
`;

export default function SearchPage() {
  const { data } = useQuery(getAllProducts);
  const [productArray, setProductArray] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const [viewStatus, setViewStatus] = useState({ view1: true, view2: false });
  const query = queryString.parse(location.search);
  const { product = '', order = '' } = query;

  useEffect(() => {
    if (data) {
      setProductArray(SortProducts(FilterProductSearch(data.products, product), order));
    }
  }, [data, product, order]);

  const handleChange = (options) => {
    if (options.value === 'low') navigate(`?${queryString.stringify({ ...query, order: 'asc' })}`);
    else if (options.value === 'high')
      navigate(`?${queryString.stringify({ ...query, order: 'desc' })}`);
    else navigate(`?${queryString.stringify({ ...query, order: '' })}`);
  };

  return (
    <>
      <Announcement />
      <NavBar />
      <Container>
        <div style={{ paddingTop: '20px' }}>
          <FilterContainer>
            <div>
              <SearchinText>Searching for “ {product} ”</SearchinText>
              <SearchinResults>{productArray.length} results found</SearchinResults>
            </div>
            {/*  <div>
              <PriceFilter>
                <PriceTitle>Price Range:</PriceTitle>
                <PrettoSlider
                  max={3000}
                  min={0}
                  onChange={handleSliderChange}
                  step={50}
                  value={value}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `$${value}`}
                />
              </PriceFilter>
            </div> */}
            <FilterOption>
              <SortBy>
                <SortByText>Sort By:</SortByText>
                <div style={{ width: '180px' }}>
                  <Select
                    defaultValue=""
                    onChange={(options) => handleChange(options)}
                    options={sortBy}
                    styles={colorStyles}
                  />
                </div>
              </SortBy>
              <ViewContainer>
                <ViewTitle>View:</ViewTitle>
                <Ripples during={800}>
                  <ViewButtons onClick={() => setViewStatus({ view1: true, view2: false })}>
                    <ViewIcons
                      style={{ color: viewStatus.view1 ? '#D23F57' : 'rgba(0, 0, 0, 0.54)' }}>
                      <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
                    </ViewIcons>
                  </ViewButtons>
                </Ripples>
                <Ripples during={800}>
                  <ViewButtons onClick={() => setViewStatus({ view1: false, view2: true })}>
                    <ViewIcons
                      style={{ color: viewStatus.view2 ? '#D23F57' : 'rgba(0, 0, 0, 0.54)' }}>
                      <path d="M3 14h4v-4H3v4zm0 5h4v-4H3v4zM3 9h4V5H3v4zm5 5h13v-4H8v4zm0 5h13v-4H8v4zM8 5v4h13V5H8z" />{' '}
                    </ViewIcons>
                  </ViewButtons>
                </Ripples>
              </ViewContainer>
            </FilterOption>
          </FilterContainer>
        </div>
        {viewStatus.view1 ? (
          <ProductList productArray={productArray} />
        ) : (
          <ProductList2 productArray={productArray} />
        )}
      </Container>
      <Footer />
    </>
  );
}
