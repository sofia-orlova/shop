import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row, Col, Image, ListGroup, Card, Button, Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Rating from '../componets/Rating';
import Loader from '../componets/Loader';
import Message from '../componets/Message';
import { listProductDetails } from '../actions/productActions';

const ProductPage = ({ match }) => {
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
    console.log(match.params.id);
  }, [dispatch, match]);

  return (
    <>
      <Link to="/" className="btn btn-light my-3">Go Back</Link>
      {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>{product.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating text={`${product.numReviews} reviews`} value={product.rating} />
              </ListGroup.Item>
              <ListGroup.Item>
                Price: $
                {product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description:
                {' '}
                {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      Price:
                    </Col>
                    <Col>
                      <strong>{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      Status:
                    </Col>
                    <Col>
                      <strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stoke'}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Link to={`/cart/${match.params.id}?qty=${qty}`}>
                    <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                      ADD TO CART
                    </Button>
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      ) }
    </>
  );
};

export default ProductPage;

ProductPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

ProductPage.defaultProps = {
  match: {},
};
