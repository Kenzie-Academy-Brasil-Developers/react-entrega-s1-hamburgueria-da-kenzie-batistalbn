import "./style.css";

const Cart = ({ currentSale, cartTotal, setCurrentSale }) => {
  return (
    <div>
      <div className="carrinho__title">
        <p>Carrinho de Compras</p>
      </div>
      {!currentSale.length ? (
        <div className="carrinho__aviso">
          <p className="carrinho__avisoText1">Sua sacola está vazia</p>
          <p className="carrinho__avisoText2">Adicione itens</p>
        </div>
      ) : (
        <div>
          <div className="carriho__produtos">
            {currentSale.map((item) => (
              <div className="carrinho__cardProduto">
                <img src={item.img} alt={item.name} />
                <div className="carrinho__cardText">
                  <div className="carrinho__cardName">
                    <p className="carrinho__nome">{item.name}</p>
                    <p className="carrinho__remover">Remover</p>
                  </div>
                  <p className="carrinho__categoria">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="carrinho__total">
            <div className="carrinho__cardTotal">
              <p className="carrinho__cardTextTotal">Total</p>
              <p className="carrinho__cardTextValor">
                R$
                {cartTotal.reduce(
                  (total, acumulador) => acumulador.price + total,
                  0
                )}
              </p>
            </div>

            <button onClick={() => setCurrentSale([])}>Remover todos</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
