import "./style.css";

const Header = ({ filteredProducts, setFilteredProducts, showProducts }) => {
  return (
    <div className="cardapioTopo">
      <div className="cardapioTopo__title">
        <p>
          <span>Burguer</span> Kenzie
        </p>
      </div>

      <div className="cardapioTopo__barraPesquisa">
        <input
          placeholder="Digitar Pesquisa"
          type="text"
          value={filteredProducts}
          onChange={(event) => setFilteredProducts(event.target.value)}
        />
        <button onClick={showProducts}>Pesquisar</button>
      </div>
    </div>
  );
};

export default Header;
