function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#" className="brand">
            <span className="brand-mark">&lt;/&gt;</span>
            <span>Dev Stack</span>
          </a>

          <p>
            A simple place to explore technologies and build your perfect
            developer stack.
          </p>

          <div className="social-links">
            <a href="https://github.com" target="_blank">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div>
          <a href="#">Privacyy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;