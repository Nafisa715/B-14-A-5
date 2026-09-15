function TechnologyCard({ technology, isAdded, onAdd }) {
  return (
    <div className="technology-card">
      <div className="card-top">
        <img
          src={technology.icon}
          alt={technology.name}
          className="technology-icon"
        />

        <span className="badge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="technology-info">
        <span className="category-chip">{technology.category}</span>

        <span className="difficulty">
          {technology.difficulty}
        </span>
      </div>

      <div className="card-bottom">
        <span className="rating">
          ★ {technology.rating}
        </span>

        <button
          className={isAdded ? "added-button" : "add-button"}
          onClick={() => onAdd(technology)}
          disabled={isAdded}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}

export default TechnologyCard;