import "./Introduction.css";
const Introduction = () => {
  return (
    <div>
      <section className="intro container">
        <img className="intro-img" src="./the-town.jpg" alt="Intro Image" />

        <div className="intro-text">
          <h1 className="intro-head header">Introduction</h1>
          <p className="intro-p">
            The Town is <span>simple CSS template</span> built on HTML CSS and
            this is a little parallax layout that you can use for your website
          </p>
          <p className="intro-p">
            please tell your friends about our site <a href="#">YourSite.</a>
            Thank you. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Itaque, nisi tenetur.
          </p>
          <button className="intro-btn">Read More</button>
        </div>
      </section>
      <section className="work" id="work-section">
        <div className="work-container container">
          <div className="work-item">
            <h1>First Work</h1>
            <a href="#">Click To Show</a>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores labore corrupti autem reiciendis! Asperiores, mollitia.
            </p>
          </div>
          <div className="work-item">
            <h1>Second Work</h1>
            <a href="#">Click To Show</a>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores labore corrupti autem reiciendis! Asperiores, mollitia.
            </p>
          </div>
          <div className="work-item">
            <h1>Third Work</h1>
            <a href="#">Click To Show</a>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores labore corrupti autem reiciendis! Asperiores, mollitia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
