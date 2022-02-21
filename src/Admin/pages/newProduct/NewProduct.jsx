import { useState } from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../../data/categoryData';
import { Button } from '../../../style/buttons';
import { minWidth } from '../../../style/responsive';
import { colorStyles } from '../../../style/select';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './newProduct.css';
import { createProduct } from '../../../apollo/product.querys';

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

const Wrapper = styled.div`
  padding-left: 24px;
  padding-top: 24px;
  box-sizing: border-box;
  margin: 0;
  max-width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-top: 16px;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 24px;
`;

const ProfileTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileTitle = styled.h2`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 25px;
  font-weight: 700;
  line-height: 1;
  margin-left: 12px;
  text-transform: none;
  white-space: normal;
`;

const BodyContainer = styled.div`
  background-color: #fff;
  color: #2b3445;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgb(3 0 71 / 9%);

  border-radius: 8px;
  padding: 24px 52px;
  height: 100%;
  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
`;

const Label = styled.small`
  font-size: 15px;
  line-height: 1.5;
  display: block;
  margin-bottom: 12px;
  text-align: left;
  font-weight: 700;
  color: rgb(75, 86, 107);
  text-transform: none;
  white-space: normal;
`;
export default function NewProduct() {
  const navigate = useNavigate();
  const [mutateFunction] = useMutation(createProduct);
  const [category, setCategory] = useState('');
  const [photo, setPhoto] = useState('');

  const fileHandler = ({ target }) => {
    const file = target.files[0];
    setPhoto(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { model, price, description } = e.target.elements;
    const formData = {};

    if (model.value) formData.model = model.value;
    if (price.value) formData.price = price.value;
    if (description.value) formData.description = description.value;
    if (photo) formData.photo = photo;
    if (category) formData.category = category;

    await mutateFunction({ variables: { input: formData } });
    navigate('/admin/products');
  };
  return (
    <>
      <Topbar />
      <div className="d-flex mt-3">
        <Sidebar />
        <Container>
          <Wrapper>
            <BodyContainer>
              <TitleContainer>
                <ProfileTitleContainer>
                  <ProfileTitle className="ms-0 mb-3">Create New Product</ProfileTitle>
                </ProfileTitleContainer>
              </TitleContainer>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3 g-3">
                  <Form.Group as={Col} controlId="formGridModel" lg={6} md={12}>
                    <Label>Model</Label>
                    <Form.Control name="model" placeholder="Product Model" type="text" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPrice" lg={6} md={12}>
                    <Label>Price ($)</Label>
                    <InputGroup>
                      <InputGroup.Text>$</InputGroup.Text>
                      <Form.Control name="price" placeholder="Price" type="number" />
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="mb-3 g-3">
                  <Form.Group as={Col} controlId="photo" lg={6} md={12}>
                    <Label>Upload product photo</Label>
                    <Form.Control accept=".jpg,.jpeg,.png" onChange={fileHandler} type="file" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridCategory" lg={6} md={12}>
                    <Label>Category</Label>
                    <Select
                      defaultValue=""
                      onChange={(options) => setCategory(options.value)}
                      options={categories}
                      styles={colorStyles}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3 g-3">
                  <Form.Group as={Col} controlId="formGridFirstCell" lg={8} md={12}>
                    <Label>Specification</Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      placeholder="Write the product specification "
                      style={{ height: '250px' }}
                      type="text"
                    />
                  </Form.Group>
                </Row>
                <div style={{ width: '100%', textAlign: 'center', marginTop: '50px' }}>
                  <Button type="submit">Create Product</Button>
                </div>
              </Form>
            </BodyContainer>
          </Wrapper>
        </Container>
      </div>
    </>
  );
}
