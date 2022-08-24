import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="header-section section">
      {/* <!-- Header Top Start --> */}
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* <!-- Header Top Wrapper Start --> */}
              <div className="header-top-wrapper">
                <div className="row">
                  {/* <!-- Header Social --> */}
                  <div className="header-social col-md-4 col-12">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                  </div>

                  {/* <!-- Header Logo --> */}
                  <div className="header-logo col-md-4 col-12">
                    <a href="index.html" className="logo">
                      <img src="/img/logo.png" alt="logo" />
                    </a>
                  </div>

                  {/* <!-- Account Menu --> */}
                  <div className="account-menu col-md-4 col-12">
                    <ul>
                      <li>
                        <a href="#">My Account</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="#" data-toggle="dropdown">
                          <i className="fa fa-shopping-cart"></i>
                          <span className="num">2</span>
                        </a>

                        {/* <!-- Mini Cart --> */}
                        <div className="mini-cart-brief dropdown-menu text-left">
                          {/* <!-- Cart Products --> */}
                          <div className="all-cart-product clearfix">
                            <div className="single-cart clearfix">
                              <div className="cart-image">
                                <a href="/product">
                                  <img src="/img/cart/1.jpg" alt="" />
                                </a>
                              </div>
                              <div className="cart-info">
                                <h5>
                                  <a href="/product">Holiday Candle</a>
                                </h5>
                                <p>1 x £9.00</p>
                                <a href="#" className="cart-delete" title="Remove this item">
                                  <i className="fa fa-trash-o"></i>
                                </a>
                              </div>
                            </div>
                            <div className="single-cart clearfix">
                              <div className="cart-image">
                                <a href="/product">
                                  <img src="/img/cart/2.jpg" alt="" />
                                </a>
                              </div>
                              <div className="cart-info">
                                <h5>
                                  <a href="/product">Christmas Tree</a>
                                </h5>
                                <p>1 x £9.00</p>
                                <a href="#" className="cart-delete" title="Remove this item">
                                  <i className="fa fa-trash-o"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Cart Total --> */}
                          <div className="cart-totals">
                            <h5>
                              Total <span>£12.00</span>
                            </h5>
                          </div>
                          {/* <!-- Cart Button --> */}
                          <div className="cart-bottom  clearfix">
                            <a href="/checkout">Check out</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Header Top Wrapper End --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header Top End --> */}

      {/* <!-- Header Bottom Start --> */}
      <div className="header-bottom section">
        <div className="container">
          <div className="row">
            {/* <!-- Header Bottom Wrapper Start --> */}
            <div className="header-bottom-wrapper text-center col">
              {/* <!-- Header Bottom Logo --> */}
              <div className="header-bottom-logo">
                <a href="index.html" className="logo">
                  <img src="/img/logo.png" alt="logo" />
                </a>
              </div>

              {/* <!-- Main Menu --> */}
              <nav id="main-menu" className="main-menu">
                <ul>
                  <li className="active">
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <a href="/shop">shop</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/shop">shop page</a>
                      </li>
                      <li>
                        <a href="/product">product details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">about</a>
                  </li>
                  <li>
                    <a href="#">pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/cart">cart</a>
                      </li>
                      <li>
                        <a href="/checkout">checkout</a>
                      </li>
                      <li>
                        <a href="wishlist.html">wishlist</a>
                      </li>
                      <li>
                        <a href="under-construction.html">Under Construction</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">blog</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog.html">blog page</a>
                      </li>
                      <li>
                        <a href="blog-details.html">blog details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">contact</a>
                  </li>
                </ul>
              </nav>

              {/* <!-- Header Search --> */}
              <div className="header-search">
                {/* <!-- Search Toggle --> */}
                <button className="search-toggle">
                  <i className="ion-ios-search-strong"></i>
                </button>

                {/* <!-- Search Form --> */}
                <div className="header-search-form">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button>
                      <i className="ion-ios-search-strong"></i>
                    </button>
                  </form>
                </div>
              </div>

              {/* <!-- Mobile Menu --> */}
              <div className="mobile-menu section d-md-none"></div>
            </div>
            {/* <!-- Header Bottom Wrapper End --> */}
          </div>
        </div>
      </div>
      {/* <!-- Header Bottom End --> */}
    </div>
  );
};

export default Header;
