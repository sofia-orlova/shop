import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = (props) => {
  const { product } = props;
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div"><strong>{product.name}</strong></Card.Title>
          <Card.Text as="div">
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          </Card.Text>
          <Card.Text as="h3">
            $
            {product.price}
          </Card.Text>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    numReviews: PropTypes.number,
    price: PropTypes.number,
  }),
};

Product.defaultProps = {
  product: {},
};
