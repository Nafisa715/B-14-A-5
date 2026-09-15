function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <button className="menu-button">☰</button>

        <a href="#" className="brand">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>Dev Stack</span>
        </a>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;