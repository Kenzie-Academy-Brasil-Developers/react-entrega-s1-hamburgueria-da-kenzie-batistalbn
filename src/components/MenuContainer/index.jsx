import "./style.css";

import Product from "../Product";
import Cart from "../Cart";

const MenuContainer = ({
  products,
  handleClick,
  currentSale,
  setCurrentSale,
  cartTotal,
  filteredProducts,
}) => {
  return (
    <div className="cardapioCorpo">
      <div className="cardapio">
        {products.map((item) => (
          <Product key={item.id} item={item} handleClick={handleClick} />
        ))}
      </div>

      <div className="carrinho">
        <Cart
          currentSale={currentSale}
          cartTotal={cartTotal}
          setCurrentSale={setCurrentSale}
        />
      </div>
    </div>
  );
};

export default MenuContainer;
