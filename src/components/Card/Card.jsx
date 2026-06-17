export default function Card({ painting }) {
  return (
    <article className="card">
      <div className="card__img">
        <img src={painting.image} alt={painting.title} />
        <button className="card__arrow">→</button>
      </div>
      <div className="card__info">
        <h3>{painting.title}</h3>
        <p>{painting.year}</p>
      </div>
    </article>
  );
}