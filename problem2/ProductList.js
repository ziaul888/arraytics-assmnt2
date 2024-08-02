import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  console.log('ProductList rendered');

  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;

