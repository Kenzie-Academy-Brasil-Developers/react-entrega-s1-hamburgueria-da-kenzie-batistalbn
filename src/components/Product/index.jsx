import "./style.css";

const Product = ({ item, handleClick }) => {
  return (
    <div className="produto">
      <div>
        <img src={item.img} alt={item.nome} />
      </div>
      <div className="produto__descricao">
        <p className="produto__nome">{item.name}</p>
        <p className="produto__categoria">{item.category}</p>
        <p className="produto__preco">R$ {item.price}</p>
        <button
          className="produto__button"
          onClick={() => handleClick(item.id)}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Product;
