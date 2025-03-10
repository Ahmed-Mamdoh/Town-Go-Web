import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer-section">
      <div className="footer-content">
        <h1 className="header">Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At in sequi
          facere, doloribus fugit inventore error quo doloremque cum esse?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. At in sequi facere,
          doloribus fugit inventore error quo doloremque cum esse?
        </p>
        <div>
          <p>Phone: +201 027 074 278</p>
          <p> Email: ahmedmamdoh.cs@gmail.com</p>
        </div>
        <div>
          <p>Location: Location On Map</p>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Subscribe Your Email"
          />
          <button>SUBMIT</button>
        </div>
        <p className="footer-author">
          Copyright &copy; 2019 Company Name - Design: <span>Ahmed-Mamdoh</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
