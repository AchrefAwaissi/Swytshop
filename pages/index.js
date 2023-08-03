<<<<<<< HEAD
import { useState} from 'react'
import { getData } from '../utils/fetchData'
import Head from 'next/head'
import ProductItem from '../components/product/ProductItem'
import Footer from '../components/Footer'
/* import ControlledCarousel from '../components/Slider' */
const Home = (props) => {
  const [products, setProducts] = useState(props.products)
  console.log(products)
  return (
    <>
   {/*  <ControlledCarousel></ControlledCarousel> */}
    
    <div className="home_page"  /* style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }} */>
      <Head>
        <title>Home Page</title>
      </Head>

    

      <div className="products">
        {
          products.length === 0 
          ? <h2>No Products</h2>

          : products.map(product => (
            <ProductItem key={product._id} product={product} />
          ))
        }
      </div>

      </div>
      <Footer></Footer>
    </>
  )
}
export async function getServerSideProps() {

  const res = await getData('product')
  console.log(res)
  // server side rendering
  return {
    props: {
      products: res.products,
      result: res.result
    }, // // sera transmis au composant de page en tant que props
  }
}

export default Home
=======
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
>>>>>>> e8c05ec04c4fff2a7bf9c0bd72331378932eef15
