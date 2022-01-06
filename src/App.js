import React, { useCallback, useState } from "react";
import "./App.css";

const phones = [
  { name: "iPhone 12", price: 14000 },
  { name: "Galaxy S20", price: 6500 },
  { name: "Huawei P40", price: 10000 },
];

const App = () => {
  const [products] = useState(phones);
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    setCart((cart) => [...cart, product]);
  }, []);

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className="wrapper">
      <Products products={products} addToCart={addToCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  );
};

const Products = React.memo(({ products, addToCart }) => {
  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map(({ name, price }) => (
          <Product key={name} name={name} price={price} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
});

const Cart = ({ cart, emptyCart }) => {
  return (
    <>
      <h1>
        Shopping Cart <button onClick={emptyCart}>Remove Products</button>
      </h1>
      <div className="products">
        {cart.map(({ name, price }, index) => (
          <Product key={index} name={name} price={price} />
        ))}
      </div>
    </>
  );
};

const Product = React.memo(({ name, price, addToCart }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <h3>{price.toLocaleString()} ₺</h3>
      {addToCart && (
        <button onClick={() => addToCart({ name, price })}>Add Cart</button>
      )}
    </div>
  );
});

export default App;
