<<<<<<< HEAD
import Head from 'next/head'
import { useState, useContext } from 'react'
import { getData } from '../../utils/fetchData'
import { DataContext } from '../../store/GlobalState'
import { addToCart } from '../../store/Actions'

const DetailProduct = (props) => {
    const [product] = useState(props.product)
    const [tab, setTab] = useState(0)

    const { state, dispatch } = useContext(DataContext)
    const { cart } = state

    const isActive = (index) => {
        if(tab === index) return " active";
        return ""
    }

    return(
        <div className="row detail_page">
            <Head>
                <title>Detail Product</title>
            </Head>

            <div className="col-md-6">
                <img src={ product.images[tab].url } alt={ product.images[tab].url }
                className="d-block img-thumbnail rounded mt-4 w-100"
                style={{height: '350px'}} />

                <div className="row mx-0" style={{cursor: 'pointer'}} >

                    {product.images.map((img, index) => (
                        <img key={index} src={img.url} alt={img.url}
                        className={`img-thumbnail rounded ${isActive(index)}`}
                        style={{height: '80px', width: '20%'}}
                        onClick={() => setTab(index)} />
                    ))}

                </div>
            </div>

            <div className="col-md-6 mt-3">
                <h2 className="text-uppercase">{product.title}</h2>
                <h5 className="text-danger">${product.price}</h5>

                <div className="row mx-0 d-flex justify-content-between">
                    {
                        product.inStock > 0
                        ? <h6 className="text-danger">In Stock: {product.inStock}</h6>
                        : <h6 className="text-danger">Out Stock</h6>
                    }

                    <h6 className="text-danger">Sold: {product.sold}</h6>
                </div>

                <div className="my-2">{product.description}</div>
                <div className="my-2">
                    {product.content}
                </div>

                <button type="button" className="btn btn-dark d-block my-3 px-5"
                onClick={() => dispatch(addToCart(product, cart))} >
                    Buy
                </button>

            </div>
        </div>
    )
}
//rendre la page sur le serveur avant de l'envoyer au client. 
// permetre à la page d'être rendue avec les données les plus récentes de la base de données.
export async function getServerSideProps({params: {id}}) {
//recuperer les données directement depuis la base de données avec getdata
    const res = await getData(`product/${id}`)
    // server side rendering
    return {
        //les données de la page sont transmisent en tant que props
      props: { product: res.product }, // will be passed to the page component as props
    }
}


export default DetailProduct
=======
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
>>>>>>> e8c05ec04c4fff2a7bf9c0bd72331378932eef15
