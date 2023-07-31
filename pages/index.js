import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import connectToDatabase from '../utils/db';

export default function Home({ products }) {
  const [productsData, setProducts] = useState(products);

  const handleSort = (e) => {
    const sortingOption = e.target.value;
    let sortedProducts = [...products];

    if (sortingOption === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortingOption === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>Hoodie Catalog</title>
      </Head>
      <h1>Welcome to our Hoodie Catalog</h1>
      <div>
        <label htmlFor="sort">Sort by price:</label>
        <select id="sort" onChange={handleSort}>
          <option value="price-asc">Low to High</option>
          <option value="price-desc">High to Low</option>
        </select>
      </div>
      <div className="product-grid">
        {productsData.filter((product) => {
          return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        }).map((product) => (
          <div className="product-card" key={product._id}>
            <Link href={`/product/${product._id}`}>
              <img src={product.image} alt={product.name} />
              <h5>{product.name}</h5>
              <p>Price: ${product.price.toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className='search-bar'>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const db = await connectToDatabase();
  const collection = db.collection('products');
  const products = await collection.find({}).toArray();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}