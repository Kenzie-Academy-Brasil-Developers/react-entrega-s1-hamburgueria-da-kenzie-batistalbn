import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "McShake Ovomaltine",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);

  const showProducts = () => {
    setProducts(products.filter((item) => item.name === filteredProducts));
  };

  const handleClick = (productId) => {
    const idProduct = products.find((item) => item.id === productId);
    setCurrentSale([...currentSale, idProduct]);
    setCartTotal([...cartTotal, idProduct]);
  };

  return (
    <div className="cardapioPage">
      <Header
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        showProducts={showProducts}
      />
      <MenuContainer
        filteredProducts={filteredProducts}
        products={products}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        handleClick={handleClick}
        cartTotal={cartTotal}
      />
    </div>
  );
}

export default App;