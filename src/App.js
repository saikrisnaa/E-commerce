import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RTK0393/8-800x800.jpg',
      name: 'Casual Sneakers',
      category: 'Shoes',
      seller: 'Red Tape',
      price: 2999
    },
    {
      url: 'https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/g/o/gold_stainless_steel_starlight_sport.png',
      name: 'Apple watch series 8',
      category: 'Watches',
      seller: 'Aptronix',
      price: 40000
    },
    {
      url: 'https://5.imimg.com/data5/QK/JY/MY-27730643/lenovo-laptop-500x500.jpg',
      name: 'lenovo Laptop 8GB RAM 15 inches',
      category: 'Laptops',
      seller: 'mumbai Laptops',
      price: 60000
    },
    {
      url: 'https://m.media-amazon.com/images/I/71ICc9Ov-mL._AC_UY1100_.jpg',
      name: 'liviya bag',
      category: 'Bags',
      seller: 'liviya',
      price: 1899
    },
    {
      url: 'https://sapmotors.com/wp-content/uploads/2022/12/Black-Blue-7-500x500-1.jpg',
      name: 'Blue gloss helmet',
      category: 'Helmet',
      seller: 'sapmotors',
      price: 2500
    },
    {
      url: 'https://www.gonoise.com/cdn/shop/files/1.3_af578d3c-794f-4f92-8720-39779dec5a81.png?v=1686029111',
      name: 'noise buds',
      category: 'earbuds',
      seller: 'noise',
      price: 3000
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;