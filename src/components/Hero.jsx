import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero-section">
      <nav className="nav">
        <a href="#">Online</a>
        <a href="#hero-section" className="list-link">
          Introduction
        </a>
        <a href="#work-section" className="list-link">
          Our Work
        </a>
        <a href="#footer-section" className="list-link">
          Contact US
        </a>
        <button className="menu-btn">
          <img src="/menu-outline.svg" alt="menu icon" className="menu-icon" />
        </button>
        <div className="menu-links">
          <a href="#hero-section">Introduction</a>
          <a href="#work-section">Our Work</a>
          <a href="#footer-section">Contact US</a>
        </div>
      </nav>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero--head">The Town</h1>
          <p className="hero--desc">Website HTML5,CSS3</p>
          <p className="hero--author">
            by <span className="author">Ahmed-Mamdoh</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
