import "./cards.css";

export const Cards = ({ item }) => {
  return (
    <div className="card">
      <img src={`/assets/${item.image}`} alt={item.nome} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{item.nome}</h2>
        <p className="card-description">{item.descricao}</p>
      </div>
    </div>
  );
};
