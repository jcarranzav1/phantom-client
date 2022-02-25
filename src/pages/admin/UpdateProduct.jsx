import { useState } from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { categories } from '../../data/categoryData';
import { Button } from '../../style/buttons';
import { minWidth } from '../../style/responsive';
import { colorStyles } from '../../style/select';
import { updateProduct } from '../../apollo/product.querys';
import Announcement from '../../components/Announcement';
import { NavBar } from '../../components/NavBar';
import AdminProfile from '../../components/Profile/AdminProfile';

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  margin-top: 10px;
`;
const TitleWrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  display: flex;
`;
const TitleContent = styled.div`
  display: flex;
  align-items: center;
`;

const TitleIcon = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.5rem;
  color: #d23f57;
`;
const Title = styled.h2`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 25px;
  font-weight: 700;
  line-height: 1;
  margin-left: 12px;
  white-space: pre;
  text-transform: none;
  white-space: normal;
`;
const Body = styled.div`
  ${minWidth(600, {
    maxWidth: '100%',
    flexWrap: 'nowrap',
  })}

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  margin-top: 24px;
  width: calc(100% + 24px);
`;

const Container = styled.div`
  ${minWidth(1280, {
    maxWidth: '1280px',
  })}
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
`;

const Wrapper = styled.div`
  padding-top: 24px;
  box-sizing: border-box;
  margin: 0;
  max-width: 100%;
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

export default function UpdateProduct() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const [mutateFunction] = useMutation(updateProduct);
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
    try {
      setLoading(true);
      await mutateFunction({ variables: { updateProductId: id, input: formData } });
      setLoading(false);
      navigate('/admin/products');
    } catch (err) {
      setLoading(false);
    }
  };
  return (
    <>
      <Announcement />
      <NavBar />
      <AdminProfile>
        <TitleContainer>
          <TitleWrapper>
            <TitleContent>
              <TitleIcon>
                <path d="M13.4333 1.60733L4.3575 6.25399L0.75 4.47899L9.66583 0.0764941C9.86583 -0.0251725 10.1058 -0.0251725 10.3158 0.0764941L13.4333 1.60733Z" />{' '}
                <path d="M19.2402 4.47912L10.0052 9.05412L6.54687 7.34995L6.04688 7.09579L15.1327 2.44995L15.6327 2.70328L19.2402 4.47912Z" />
                <path d="M9.265 10.3726L9.255 20.0001L0.41 15.3843C0.16 15.2526 0 14.9884 0 14.7043V5.79761L3.74833 7.64427V10.8909C3.74833 11.3068 4.08833 11.6518 4.49833 11.6518C4.90833 11.6518 5.24833 11.3068 5.24833 10.8909V8.39511L5.74833 8.63844L9.265 10.3726Z" />
                <path d="M19.9889 5.80737L10.7639 10.3624L10.7539 19.9899L19.9989 15.1624L19.9889 5.80737Z" />
              </TitleIcon>
              <Title>Update Product</Title>
            </TitleContent>
            <Button
              className="mb-0"
              onClick={() => navigate('/admin/products')}
              type="submit"
              outline>
              Back to Product List
            </Button>
          </TitleWrapper>
        </TitleContainer>
        <Body>
          <Container>
            <Wrapper>
              <BodyContainer>
                <Form onSubmit={handleSubmit} style={{ opacity: loading ? '0.6' : '1' }}>
                  <Row className="mb-4 g-4">
                    <Form.Group as={Col} controlId="formGridModel" lg={6} md={12}>
                      <Form.Control name="model" placeholder="Product Model" type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPrice" lg={6} md={12}>
                      <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control name="price" placeholder="Price" type="number" />
                      </InputGroup>
                    </Form.Group>
                  </Row>

                  <Row className="mb-4 g-4">
                    <Form.Group as={Col} controlId="photo" lg={6} md={12}>
                      <Form.Control accept=".jpg,.jpeg,.png" onChange={fileHandler} type="file" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCategory" lg={6} md={12}>
                      <Select
                        defaultValue=""
                        onChange={(options) => setCategory(options.value)}
                        options={categories}
                        placeholder="Select Category"
                        styles={colorStyles}
                      />
                    </Form.Group>
                  </Row>
                  <div
                    style={{
                      width: '100%',
                      textAlign: 'center',
                    }}>
                    <PropagateLoader
                      color="#1373e5"
                      loading={loading}
                      size={25}
                      style={{ marginTop: '6000px', marginLeft: '500px' }}
                    />
                  </div>
                  <Row className="mb-4 g-4">
                    <Form.Group as={Col} controlId="formGridFirstCell" lg={12} md={12}>
                      <Form.Control
                        as="textarea"
                        name="description"
                        placeholder="Description"
                        style={{ height: '150px' }}
                        type="text"
                      />
                    </Form.Group>
                  </Row>
                  <div style={{ width: '100%', textAlign: 'center', marginTop: '50px' }}>
                    <Button type="submit">Update Product</Button>
                  </div>
                </Form>
              </BodyContainer>
            </Wrapper>
          </Container>
        </Body>
      </AdminProfile>
    </>
  );
}
