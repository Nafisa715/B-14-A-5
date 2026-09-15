function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="stack-sidebar">
      <div className="stack-header">
        <div>
          <p className="section-label">YOUR COLLECTION</p>
          <h2>Your Stack</h2>
        </div>

        <span className="stack-count">{stack.length}</span>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">+</div>
          <h3>Your stack is empty</h3>
          <p>
            Add technologies from the list to build your developer stack.
          </p>
        </div>
      ) : (
        <div className="stack-list">
          {stack.map((technology) => (
            <div className="stack-item" key={technology.id}>
              <img
                src={technology.icon}
                alt={technology.name}
              />

              <div className="stack-item-info">
                <h4>{technology.name}</h4>
                <p>{technology.category}</p>
              </div>

              <button
                className="remove-button"
                onClick={() => onRemove(technology.id)}
              >
                ✕
              </button>
            </div>
          ))}

          <button
            className="remove-all-button"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
}

export default StackSidebar;