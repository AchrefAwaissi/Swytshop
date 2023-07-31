// pages/product/[id].js

import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import connectToDatabase from '../../utils/db';
import { ObjectId } from 'mongodb';

const ProductDetailPage = ({ product, quantity }) => {
  const router = useRouter();
  const { id } = router.query;

  // Render the product details if product is available
  if (!product) {
    return <p>Loading...</p>;
  }

  // State to store the quantity of the product
  const [quantityState, setQuantityState] = useState(1);

  // Function to update the quantity of the product
  const handleQuantityChange = (e) => {
    const quantity = e.target.value;


    // Update the state of the quantity
    setQuantityState(quantity);
  };

  return (
    <div>
      <Head>
        <title>{product.name}</title>
      </Head>
      <div className="product-container">
        <div className="imageContainer">
          <img src={product.image} alt={product.name} className="image" />
        </div>
        <div className="detailsContainer">
          <h1>{product.name}</h1>
          <p>Color: {product.color}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          {/* Add other product details as needed */}
          <div className="quantityContainer">
            <input
              type="number"
              value={quantityState}
              min="1"
              max={product.quantity}
              onChange={handleQuantityChange}
            />
            <button className="addToCartButton">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

export async function getServerSideProps({ params }) {
  const { id } = params;

  const objectId = new ObjectId(id);

  // Connect to MongoDB using the connectToDatabase function
  const db = await connectToDatabase();

  // Fetch the product details based on the 'id' from the database
  const collection = db.collection('products');
  const product = await collection.findOne({ _id: objectId });

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      quantity: 1, // Initial quantity
    },
  };
}