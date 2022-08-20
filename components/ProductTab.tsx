import Slider from 'react-slick';

const ProductTab = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="product-tab z-index-20 sm-margin-top-193px xs-margin-top-30px">
        <div className="container">
          <div className="biolife-title-box">
            <span className="subtitle">All the best item for You</span>
            <h3 className="main-title">Related Products</h3>
          </div>
          <div className="biolife-tab biolife-tab-contain sm-margin-top-34px">
            <div className="tab-head tab-head__icon-top-layout icon-top-layout">
              <ul className="tabs md-margin-bottom-35-im xs-margin-bottom-40-im">
                <li className="tab-element active">
                  <a href="#tab01_1st" className="tab-link">
                    <span className="biolife-icon icon-lemon"></span>Oranges
                  </a>
                </li>
                <li className="tab-element">
                  <a href="#tab01_2nd" className="tab-link">
                    <span className="biolife-icon icon-grape2"></span>Grapes
                  </a>
                </li>
                <li className="tab-element">
                  <a href="#tab01_3rd" className="tab-link">
                    <span className="biolife-icon icon-blueberry"></span>Blueberries
                  </a>
                </li>
                <li className="tab-element">
                  <a href="#tab01_4th" className="tab-link">
                    <span className="biolife-icon icon-orange"></span>Lemon
                  </a>
                </li>
                <li className="tab-element">
                  <a href="#tab01_5th" className="tab-link">
                    <span className="biolife-icon icon-broccoli"></span>Vegetables
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div id="tab01_1st" className="tab-contain active">
                <ul
                  className="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain"
                  data-slick='{"rows":2 ,"arrows":true,"dots":false,"infinite":true,"speed":400,"slidesMargin":10,"slidesToShow":4, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 4}},{"breakpoint":992, "settings":{ "slidesToShow": 3, "slidesMargin":25 }},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":15}}]}'
                >
                  <Slider {...settings}>
                    <li className="product-item">
                      <div className="contain-product layout-default">
                        <div className="product-thumb">
                          <a href="#" className="link-to-product">
                            <img src="/images/products/p-05.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                          </a>
                          <a className="lookup btn_call_quickview" href="#">
                            <i className="biolife-icon icon-search"></i>
                          </a>
                        </div>
                        <div className="info">
                          <b className="categories">Vegetables</b>
                          <h4 className="product-title">
                            <a href="#" className="pr-name">
                              Organic Hass Avocado, Large
                            </a>
                          </h4>
                          <div className="price ">
                            <ins>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>85.00
                              </span>
                            </ins>
                            <del>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>95.00
                              </span>
                            </del>
                          </div>
                          <div className="slide-down-box">
                            <p className="message">All products are carefully selected to ensure food safety.</p>
                            <div className="buttons">
                              <a href="#" className="btn wishlist-btn">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                              </a>
                              <a href="#" className="btn add-to-cart-btn">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                              </a>
                              <a href="#" className="btn compare-btn">
                                <i className="fa fa-random" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item">
                      <div className="contain-product layout-default">
                        <div className="product-thumb">
                          <a href="#" className="link-to-product">
                            <img src="/images/products/p-07.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                          </a>
                          <a className="lookup btn_call_quickview" href="#">
                            <i className="biolife-icon icon-search"></i>
                          </a>
                        </div>
                        <div className="info">
                          <b className="categories">Vegetables</b>
                          <h4 className="product-title">
                            <a href="#" className="pr-name">
                              13 Healing Powers of Lemons
                            </a>
                          </h4>
                          <div className="price ">
                            <ins>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>85.00
                              </span>
                            </ins>
                            <del>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>95.00
                              </span>
                            </del>
                          </div>
                          <div className="slide-down-box">
                            <p className="message">All products are carefully selected to ensure food safety.</p>
                            <div className="buttons">
                              <a href="#" className="btn wishlist-btn">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                              </a>
                              <a href="#" className="btn add-to-cart-btn">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                              </a>
                              <a href="#" className="btn compare-btn">
                                <i className="fa fa-random" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item">
                      <div className="contain-product layout-default">
                        <div className="product-thumb">
                          <a href="#" className="link-to-product">
                            <img src="/images/products/p-02.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                          </a>
                          <a className="lookup btn_call_quickview" href="#">
                            <i className="biolife-icon icon-search"></i>
                          </a>
                        </div>
                        <div className="info">
                          <b className="categories">Vegetables</b>
                          <h4 className="product-title">
                            <a href="#" className="pr-name">
                              Hot Chili Peppers Magnetic Salt
                            </a>
                          </h4>
                          <div className="price ">
                            <ins>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>85.00
                              </span>
                            </ins>
                            <del>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>95.00
                              </span>
                            </del>
                          </div>
                          <div className="slide-down-box">
                            <p className="message">All products are carefully selected to ensure food safety.</p>
                            <div className="buttons">
                              <a href="#" className="btn wishlist-btn">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                              </a>
                              <a href="#" className="btn add-to-cart-btn">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                              </a>
                              <a href="#" className="btn compare-btn">
                                <i className="fa fa-random" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item">
                      <div className="contain-product layout-default">
                        <div className="product-thumb">
                          <a href="#" className="link-to-product">
                            <img src="/images/products/p-03.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                          </a>
                          <a className="lookup btn_call_quickview" href="#">
                            <i className="biolife-icon icon-search"></i>
                          </a>
                        </div>
                        <div className="info">
                          <b className="categories">Vegetables</b>
                          <h4 className="product-title">
                            <a href="#" className="pr-name">
                              Passover Cauliflower Kugel
                            </a>
                          </h4>
                          <div className="price ">
                            <ins>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>85.00
                              </span>
                            </ins>
                            <del>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>95.00
                              </span>
                            </del>
                          </div>
                          <div className="slide-down-box">
                            <p className="message">All products are carefully selected to ensure food safety.</p>
                            <div className="buttons">
                              <a href="#" className="btn wishlist-btn">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                              </a>
                              <a href="#" className="btn add-to-cart-btn">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                              </a>
                              <a href="#" className="btn compare-btn">
                                <i className="fa fa-random" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </Slider>
                  <Slider {...settings}>
                    <li className="product-item">
                      <div className="contain-product layout-default">
                        <div className="product-thumb">
                          <a href="#" className="link-to-product">
                            <img src="/images/products/p-06.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                          </a>
                          <a className="lookup btn_call_quickview" href="#">
                            <i className="biolife-icon icon-search"></i>
                          </a>
                        </div>
                        <div className="info">
                          <b className="categories">Vegetables</b>
                          <h4 className="product-title">
                            <a href="#" className="pr-name">
                              Packham's Pears
                            </a>
                          </h4>
                          <div className="price ">
                            <ins>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>85.00
                              </span>
                            </ins>
                            <del>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>95.00
                              </span>
                            </del>
                          </div>
                          <div className="slide-down-box">
                            <p className="message">All products are carefully selected to ensure food safety.</p>
                            <div className="buttons">
                              <a href="#" className="btn wishlist-btn">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                              </a>
                              <a href="#" className="btn add-to-cart-btn">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                              </a>
                              <a href="#" className="btn compare-btn">
                                <i className="fa fa-random" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item">
                      <div className="contain-product layout-default">
                        <div className="product-thumb">
                          <a href="#" className="link-to-product">
                            <img src="/images/products/p-20.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                          </a>
                          <a className="lookup btn_call_quickview" href="#">
                            <i className="biolife-icon icon-search"></i>
                          </a>
                        </div>
                        <div className="info">
                          <b className="categories">Vegetables</b>
                          <h4 className="product-title">
                            <a href="#" className="pr-name">
                              National Fresh Fruit
                            </a>
                          </h4>
                          <div className="price ">
                            <ins>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>85.00
                              </span>
                            </ins>
                            <del>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>95.00
                              </span>
                            </del>
                          </div>
                          <div className="slide-down-box">
                            <p className="message">All products are carefully selected to ensure food safety.</p>
                            <div className="buttons">
                              <a href="#" className="btn wishlist-btn">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                              </a>
                              <a href="#" className="btn add-to-cart-btn">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                              </a>
                              <a href="#" className="btn compare-btn">
                                <i className="fa fa-random" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item">
                      <div className="contain-product layout-default">
                        <div className="product-thumb">
                          <a href="#" className="link-to-product">
                            <img src="/images/products/p-19.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                          </a>
                          <a className="lookup btn_call_quickview" href="#">
                            <i className="biolife-icon icon-search"></i>
                          </a>
                        </div>
                        <div className="info">
                          <b className="categories">Vegetables</b>
                          <h4 className="product-title">
                            <a href="#" className="pr-name">
                              Pumpkins Fairytale
                            </a>
                          </h4>
                          <div className="price ">
                            <ins>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>85.00
                              </span>
                            </ins>
                            <del>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>95.00
                              </span>
                            </del>
                          </div>
                          <div className="slide-down-box">
                            <p className="message">All products are carefully selected to ensure food safety.</p>
                            <div className="buttons">
                              <a href="#" className="btn wishlist-btn">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                              </a>
                              <a href="#" className="btn add-to-cart-btn">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                              </a>
                              <a href="#" className="btn compare-btn">
                                <i className="fa fa-random" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item">
                      <div className="contain-product layout-default">
                        <div className="product-thumb">
                          <a href="#" className="link-to-product">
                            <img src="/images/products/p-05.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                          </a>
                          <a className="lookup btn_call_quickview" href="#">
                            <i className="biolife-icon icon-search"></i>
                          </a>
                        </div>
                        <div className="info">
                          <b className="categories">Vegetables</b>
                          <h4 className="product-title">
                            <a href="#" className="pr-name">
                              Organic Hass Avocado
                            </a>
                          </h4>
                          <div className="price ">
                            <ins>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>85.00
                              </span>
                            </ins>
                            <del>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>95.00
                              </span>
                            </del>
                          </div>
                          <div className="slide-down-box">
                            <p className="message">All products are carefully selected to ensure food safety.</p>
                            <div className="buttons">
                              <a href="#" className="btn wishlist-btn">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                              </a>
                              <a href="#" className="btn add-to-cart-btn">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                              </a>
                              <a href="#" className="btn compare-btn">
                                <i className="fa fa-random" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item">
                      <div className="contain-product layout-default">
                        <div className="product-thumb">
                          <a href="#" className="link-to-product">
                            <img src="/images/products/p-22.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                          </a>
                          <a className="lookup btn_call_quickview" href="#">
                            <i className="biolife-icon icon-search"></i>
                          </a>
                        </div>
                        <div className="info">
                          <b className="categories">Vegetables</b>
                          <h4 className="product-title">
                            <a href="#" className="pr-name">
                              Cherry Tomato Seeds
                            </a>
                          </h4>
                          <div className="price ">
                            <ins>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>85.00
                              </span>
                            </ins>
                            <del>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>95.00
                              </span>
                            </del>
                          </div>
                          <div className="slide-down-box">
                            <p className="message">All products are carefully selected to ensure food safety.</p>
                            <div className="buttons">
                              <a href="#" className="btn wishlist-btn">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                              </a>
                              <a href="#" className="btn add-to-cart-btn">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                              </a>
                              <a href="#" className="btn compare-btn">
                                <i className="fa fa-random" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item">
                      <div className="contain-product layout-default">
                        <div className="product-thumb">
                          <a href="#" className="link-to-product">
                            <img src="/images/products/p-18.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                          </a>
                          <a className="lookup btn_call_quickview" href="#">
                            <i className="biolife-icon icon-search"></i>
                          </a>
                        </div>
                        <div className="info">
                          <b className="categories">Vegetables</b>
                          <h4 className="product-title">
                            <a href="#" className="pr-name">
                              National Fresh Fruit
                            </a>
                          </h4>
                          <div className="price ">
                            <ins>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>85.00
                              </span>
                            </ins>
                            <del>
                              <span className="price-amount">
                                <span className="currencySymbol">£</span>95.00
                              </span>
                            </del>
                          </div>
                          <div className="slide-down-box">
                            <p className="message">All products are carefully selected to ensure food safety.</p>
                            <div className="buttons">
                              <a href="#" className="btn wishlist-btn">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                              </a>
                              <a href="#" className="btn add-to-cart-btn">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                              </a>
                              <a href="#" className="btn compare-btn">
                                <i className="fa fa-random" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </Slider>
                </ul>
              </div>
              <div id="tab01_2nd" className="tab-contain ">
                <ul
                  className="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain"
                  data-slick='{"rows":2 ,"arrows":true,"dots":false,"infinite":true,"speed":400,"slidesMargin":10,"slidesToShow":4, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 4}},{"breakpoint":992, "settings":{ "slidesToShow": 3, "slidesMargin":25 }},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":15}}]}'
                >
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-05.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Organic Hass Avocado, Large
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-07.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            13 Healing Powers of Lemons
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-02.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Hot Chili Peppers Magnetic Salt
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-20.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            National Fresh Fruit
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-19.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Pumpkins Fairytale
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-03.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Passover Cauliflower Kugel
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-18.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            National Fresh Fruit
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-06.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Packham's Pears
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-05.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Organic Hass Avocado
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-22.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Cherry Tomato Seeds
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div id="tab01_3rd" className="tab-contain ">
                <ul
                  className="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain"
                  data-slick='{"rows":2 ,"arrows":true,"dots":false,"infinite":true,"speed":400,"slidesMargin":10,"slidesToShow":4, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 4}},{"breakpoint":992, "settings":{ "slidesToShow": 3, "slidesMargin":25 }},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":15}}]}'
                >
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-05.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Organic Hass Avocado, Large
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-02.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Hot Chili Peppers Magnetic Salt
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-05.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Organic Hass Avocado
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-06.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Packham's Pears
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-07.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            13 Healing Powers of Lemons
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-18.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            National Fresh Fruit
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-20.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            National Fresh Fruit
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-22.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Cherry Tomato Seeds
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-19.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Pumpkins Fairytale
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-03.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Passover Cauliflower Kugel
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div id="tab01_4th" className="tab-contain ">
                <ul
                  className="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain"
                  data-slick='{"rows":2 ,"arrows":true,"dots":false,"infinite":true,"speed":400,"slidesMargin":10,"slidesToShow":4, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 4}},{"breakpoint":992, "settings":{ "slidesToShow": 3, "slidesMargin":25 }},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":15}}]}'
                >
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-20.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            National Fresh Fruit
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-05.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Organic Hass Avocado, Large
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-22.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Cherry Tomato Seeds
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-07.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            13 Healing Powers of Lemons
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-02.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Hot Chili Peppers Magnetic Salt
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-05.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Organic Hass Avocado
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-03.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Passover Cauliflower Kugel
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-18.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            National Fresh Fruit
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-19.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Pumpkins Fairytale
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-06.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Packham's Pears
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div id="tab01_5th" className="tab-contain ">
                <ul
                  className="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain"
                  data-slick='{"rows":2 ,"arrows":true,"dots":false,"infinite":true,"speed":400,"slidesMargin":10,"slidesToShow":4, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 4}},{"breakpoint":992, "settings":{ "slidesToShow": 3, "slidesMargin":25 }},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":15}}]}'
                >
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-20.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            National Fresh Fruit
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-22.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Cherry Tomato Seeds
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-05.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Organic Hass Avocado, Large
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-02.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Hot Chili Peppers Magnetic Salt
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-07.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            13 Healing Powers of Lemons
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-03.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Passover Cauliflower Kugel
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-05.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Organic Hass Avocado
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-19.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Pumpkins Fairytale
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-06.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            Packham's Pears
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="contain-product layout-default">
                      <div className="product-thumb">
                        <a href="#" className="link-to-product">
                          <img src="/images/products/p-18.jpg" alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </a>
                        <a className="lookup btn_call_quickview" href="#">
                          <i className="biolife-icon icon-search"></i>
                        </a>
                      </div>
                      <div className="info">
                        <b className="categories">Vegetables</b>
                        <h4 className="product-title">
                          <a href="#" className="pr-name">
                            National Fresh Fruit
                          </a>
                        </h4>
                        <div className="price ">
                          <ins>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span className="price-amount">
                              <span className="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div className="slide-down-box">
                          <p className="message">All products are carefully selected to ensure food safety.</p>
                          <div className="buttons">
                            <a href="#" className="btn wishlist-btn">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn add-to-cart-btn">
                              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                            </a>
                            <a href="#" className="btn compare-btn">
                              <i className="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
