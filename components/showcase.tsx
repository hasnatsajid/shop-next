const Showcase = () => {
  return (
    <div className="main-slide block-slider">
      <ul
        className="biolife-carousel nav-none-on-mobile"
        data-slick='{"arrows": true, "dots": false, "slidesMargin": 0, "slidesToShow": 1, "infinite": true, "speed": 800}'
      >
        <li>
          <div className="slide-contain slider-opt03__layout01">
            <div className="media">
              <div className="child-elememt">
                <a href="#" className="link-to">
                  <img src="assets/images/home-03/slide-01-child-01.png" width="604" height="580" alt="" />
                </a>
              </div>
            </div>
            <div className="text-content">
              <i className="first-line">Pomegranate</i>
              <h3 className="second-line">Vegetables 100% Organic</h3>
              <p className="third-line">A blend of freshly squeezed green apple & fruits</p>
              <p className="buttons">
                <a href="#" className="btn btn-bold">
                  Shop now
                </a>
                <a href="#" className="btn btn-thin">
                  View lookbook
                </a>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="slide-contain slider-opt03__layout01">
            <div className="media">
              <div className="child-elememt">
                <a href="#" className="link-to">
                  <img src="assets/images/home-03/slide-01-child-01.png" width="604" height="580" alt="" />
                </a>
              </div>
            </div>
            <div className="text-content">
              <i className="first-line">Pomegranate</i>
              <h3 className="second-line">Vegetables 100% Organic</h3>
              <p className="third-line">A blend of freshly squeezed green apple & fruits</p>
              <p className="buttons">
                <a href="#" className="btn btn-bold">
                  Shop now
                </a>
                <a href="#" className="btn btn-thin">
                  View lookbook
                </a>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Showcase;
