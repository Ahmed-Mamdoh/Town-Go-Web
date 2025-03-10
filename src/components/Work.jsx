import "./Work.css";
const Work = () => {
  return (
    <section className="our-work container">
      <div className="our-work-content">
        <div className="our-work-text">
          <h1 className="header">Our Work</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            labore corrupti autem reiciendis! Asperiores, mollitia.
          </p>
        </div>
        <div className="our-work-imgs">
          <img src="/w1.jpg" alt="work1" />
          <img src="/w2.jpg" alt="work1" />
          <img src="/w3.jpg" alt="work1" />
          <img src="/w4.jpg" alt="work1" />
          <img src="/w5.jpg" alt="work1" />
        </div>
      </div>
    </section>
  );
};

export default Work;
