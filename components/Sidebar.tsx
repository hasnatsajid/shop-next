import React from 'react';

const Sidebar = () => {
  return (
    <div id="biolife-clone-wrap" className="biolife-clone-wrap">
      {/* Menu Panels action wrap */}
      <div className="biolife-panels-actions-wrap" data-root_title="Main Panel">
        <span className="biolife-current-panel-title">Main Panel</span>
        <a className="biolife-close-btn biolife-close-panels" href="#" data-object="open-mobile-menu">
          ×
        </a>
      </div>

      {/* Menu panels */}
      <div className="biolife-panels">
        <div id="biolife-main-panel" className="biolife-panel biolife-main-panel biolife-panel-opened">
          <ul className="depth-01">
            <li className="menu-item clone-menu-item">
              <a href="index-2.html">Home</a>
            </li>
            <li className="menu-item menu-item-has-children has-megamenu clone-menu-item">
              <a className="biolife-next-panel" href="#biolife-panel-8" data-target="#biolife-panel-8"></a>
              <a className="biolife-next-panel" href="#biolife-panel-0" data-target="#biolife-panel-0"></a>
              <a href="#" className="menu-name" data-title="Shop">
                Shop
              </a>
            </li>
            <li className="menu-item menu-item-has-children has-child clone-menu-item">
              <a className="biolife-next-panel" href="#biolife-panel-9" data-target="#biolife-panel-9"></a>
              <a className="biolife-next-panel" href="#biolife-panel-3" data-target="#biolife-panel-3"></a>
              <a href="#" className="menu-name" data-title="Products">
                Products
              </a>
            </li>
            <li className="menu-item menu-item-has-children has-megamenu clone-menu-item">
              <a className="biolife-next-panel" href="#biolife-panel-10" data-target="#biolife-panel-10"></a>
              <a className="biolife-next-panel" href="#biolife-panel-6" data-target="#biolife-panel-6"></a>
              <a href="#" className="menu-name" data-title="Demo">
                Demo
              </a>
            </li>
            <li className="menu-item menu-item-has-children has-megamenu clone-menu-item">
              <a className="biolife-next-panel" href="#biolife-panel-11" data-target="#biolife-panel-11"></a>
              <a className="biolife-next-panel" href="#biolife-panel-7" data-target="#biolife-panel-7"></a>
              <a href="#" className="menu-name" data-title="Blog">
                Blog
              </a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="contact.html">Contact</a>
            </li>

            <li className="menu-item menu-item-has-children has-megamenu clone-menu-item">
              <a className="biolife-next-panel" href="#biolife-panel-12" data-target="#biolife-panel-12"></a>
              <a href="#" className="menu-name" data-title="Fruit &amp; Nut Gifts">
                <i className="biolife-icon icon-fruits"></i>Fruit &amp; Nut Gifts
              </a>
            </li>
            <li className="menu-item menu-item-has-children has-megamenu clone-menu-item">
              <a className="biolife-next-panel" href="#biolife-panel-13" data-target="#biolife-panel-13"></a>
              <a href="#" className="menu-name" data-title="Vegetables">
                <i className="biolife-icon icon-broccoli-1"></i>Vegetables
              </a>
            </li>
            <li className="menu-item menu-item-has-children has-megamenu clone-menu-item">
              <a className="biolife-next-panel" href="#biolife-panel-14" data-target="#biolife-panel-14"></a>
              <a href="#" className="menu-name" data-title="Fresh Berries">
                <i className="biolife-icon icon-grape"></i>Fresh Berries
              </a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#" className="menu-name" data-title="Ocean Foods">
                <i className="biolife-icon icon-fish"></i>Ocean Foods
              </a>
            </li>
            <li className="menu-item menu-item-has-children has-child clone-menu-item">
              <a className="biolife-next-panel" href="#biolife-panel-17" data-target="#biolife-panel-17"></a>
              <a href="#" className="menu-name" data-title="Butter &amp; Eggs">
                <i className="biolife-icon icon-honey"></i>Butter &amp; Eggs
              </a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#" className="menu-title">
                <i className="biolife-icon icon-fast-food"></i>Fastfood
              </a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#" className="menu-title">
                <i className="biolife-icon icon-beef"></i>Fresh Meat
              </a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#" className="menu-title">
                <i className="biolife-icon icon-onions"></i>Fresh Onion
              </a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#" className="menu-title">
                <i className="biolife-icon icon-avocado"></i>Papaya &amp; Crisps
              </a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#" className="menu-title">
                <i className="biolife-icon icon-contain"></i>Oatmeal
              </a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#" className="menu-title">
                <i className="biolife-icon icon-fresh-juice"></i>Fresh Bananas &amp; Plantains
              </a>
            </li>
          </ul>
        </div>

        {/* 2 */}
        <div id="biolife-panel-0" className="biolife-panel biolife-sub-panel biolife-hidden" data-parent-panel="biolife-main-panel">
          <div className="wrap-megamenu lg-width-900 md-width-750">
            <div className="mega-content">
              <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                <div className="wrap-custom-menu vertical-menu">
                  <h4 className="menu-title">Fresh Berries</h4>
                  <ul className="menu">
                    <li>
                      <a href="#">Fruit &amp; Nut Gifts</a>
                    </li>
                    <li>
                      <a href="#">Mixed Fruits</a>
                    </li>
                    <li>
                      <a href="#">Oranges</a>
                    </li>
                    <li>
                      <a href="#">Bananas &amp; Plantains</a>
                    </li>
                    <li>
                      <a href="#">Fresh Gala Apples</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                <div className="wrap-custom-menu vertical-menu">
                  <h4 className="menu-title">Vegetables</h4>
                  <ul className="menu">
                    <li>
                      <a href="#">Berries</a>
                    </li>
                    <li>
                      <a href="#">Pears</a>
                    </li>
                    <li>
                      <a href="#">Chili Peppers</a>
                    </li>
                    <li>
                      <a href="#">Fresh Avocado</a>
                    </li>
                    <li>
                      <a href="#">Grapes</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                <div className="wrap-custom-menu vertical-menu ">
                  <h4 className="menu-title">Fresh Fruits</h4>
                  <ul className="menu">
                    <li>
                      <a href="#">Basket of apples</a>
                    </li>
                    <li>
                      <a href="#">Strawberry</a>
                    </li>
                    <li>
                      <a href="#">Blueberry</a>
                    </li>
                    <li>
                      <a href="#">Orange</a>
                    </li>
                    <li>
                      <a href="#">Pineapple</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                <div className="wrap-custom-menu vertical-menu">
                  <h4 className="menu-title">Featured Products</h4>
                  <ul className="menu">
                    <li>
                      <a href="#">Coffee Creamers</a>
                    </li>
                    <li>
                      <a href="#">Mayonnaise</a>
                    </li>
                    <li>
                      <a href="#">Almond Milk</a>
                    </li>
                    <li>
                      <a href="#">Fruit Jam</a>
                    </li>
                    <li>
                      <a href="#">Beverages</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div id="biolife-panel-1" className="biolife-panel biolife-sub-panel biolife-hidden">
          <ul className="sub-menu">
            <li className="menu-item clone-menu-item">
              <a href="#">Classic Breakfast</a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#">Huevos Rancheros</a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#">Everything Egg Sandwich</a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#">Egg Sandwich</a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#">Vegan Burrito</a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#">Biscuits and Gravy</a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#">Bacon Avo Egg Sandwich</a>
            </li>
          </ul>
        </div>

        {/* 4 */}
        <div id="biolife-panel-2" className="biolife-panel biolife-sub-panel biolife-hidden">
          <ul className="sub-menu">
            <li className="menu-item clone-menu-item">
              <a href="#">Breakfast Burrito</a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#">Crab Cake Benedict</a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#">Corned Beef Hash</a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#">Steak &amp; Eggs</a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#">Oatmeal</a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#">Fruit &amp; Yogurt Parfait</a>
            </li>
          </ul>
        </div>

        {/* 5 */}
        <div id="biolife-panel-3" className="biolife-panel biolife-sub-panel biolife-hidden">
          <ul className="sub-menu">
            <li className="menu-item clone-menu-item">
              <a href="#">Omelettes</a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#">Breakfast Scrambles</a>
            </li>
            <li className="menu-item menu-item-has-children has-child clone-menu-item">
              <a className="biolife-next-panel" href="#biolife-panel-1" data-target="#biolife-panel-1"></a>
              <a href="#" className="menu-name" data-title="Eggs &amp; other considerations">
                Eggs &amp; other considerations
              </a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#">Griddle</a>
            </li>
            <li className="menu-item menu-item-has-children has-child clone-menu-item">
              <a className="biolife-next-panel" href="#biolife-panel-2" data-target="#biolife-panel-2"></a>
              <a href="#" className="menu-name" data-title="Sides &amp; Extras">
                Sides &amp; Extras
              </a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#">Biscuits</a>
            </li>
            <li className="menu-item clone-menu-item">
              <a href="#">Seasonal Fruit Plate</a>
            </li>
          </ul>
        </div>

        {/* 6 */}
        <div id="biolife-panel-4" className="biolife-panel biolife-sub-panel biolife-hidden"></div>
      </div>

      {/* 7 */}
      <div id="biolife-panel-5" className="biolife-panel biolife-sub-panel biolife-hidden"></div>

      {/* 8 */}
      <div id="biolife-panel-6" className="biolife-panel biolife-sub-panel biolife-hidden">
        <div className="wrap-megamenu lg-width-800 md-width-750">
          <div className="mega-content">
            <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
              <div className="wrap-custom-menu vertical-menu">
                <h4 className="menu-title">Home Page</h4>
                <ul className="menu">
                  <li>
                    <a href="home-01.html">Home 01</a>
                  </li>
                  <li>
                    <a href="home-02.html">Home 02</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home 03</a>
                  </li>
                  <li>
                    <a href="home-03-green.html">Home 03 Green</a>
                  </li>
                  <li>
                    <a href="home-04.html">Home 04</a>
                  </li>
                  <li>
                    <a href="home-04-light.html">Home 04 Light</a>
                  </li>
                  <li>
                    <a href="home-05.html">Home 05</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
              <div className="wrap-custom-menu vertical-menu">
                <h4 className="menu-title">Inner Pages</h4>
                <ul className="menu">
                  <li className="menu-item clone-menu-item">
                    <a className="menu-name" href="blog-post.html">
                      Blog Single
                    </a>
                  </li>
                  <li className="menu-item clone-menu-item">
                    <a className="menu-name" href="blog-v01.html">
                      Blog Style 01
                    </a>
                  </li>
                  <li className="menu-item clone-menu-item">
                    <a className="menu-name" href="blog-v02.html">
                      Blog Style 02
                    </a>
                  </li>
                  <li className="menu-item clone-menu-item">
                    <a className="menu-name" href="blog-v03.html">
                      Blog Style 03
                    </a>
                  </li>
                  <li className="menu-item clone-menu-item">
                    <a className="menu-name" href="contact.html">
                      Contact Us
                    </a>
                  </li>
                  <li className="menu-item clone-menu-item">
                    <a className="menu-name" href="about-us.html">
                      About Us
                    </a>
                  </li>
                  <li className="menu-item clone-menu-item">
                    <a className="menu-name" href="checkout.html">
                      Checkout
                    </a>
                  </li>
                  <li className="menu-item clone-menu-item">
                    <a className="menu-name" href="shopping-cart.html">
                      Shopping Cart
                    </a>
                  </li>
                  <li className="menu-item clone-menu-item">
                    <a className="menu-name" href="login.html">
                      Login/Register
                    </a>
                  </li>
                  <li className="menu-item clone-menu-item">
                    <a className="menu-name" href="404.html">
                      404
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
              <div className="wrap-custom-menu vertical-menu">
                <h4 className="menu-title">Category Pages</h4>
                <ul className="menu">
                  <li>
                    <a href="category-grid-3-cols.html">Grid 3 Cols</a>
                  </li>
                  <li>
                    <a href="category-grid.html">Grid 4 Cols</a>
                  </li>
                  <li>
                    <a href="category-grid-6-cols.html">Grid 6 Cols</a>
                  </li>
                  <li>
                    <a href="category-grid-left-sidebar.html">Grid Left Sidebar</a>
                  </li>
                  <li>
                    <a href="category-grid-right-sidebar.html">Grid Right Sidebar</a>
                  </li>
                  <li>
                    <a href="category-list.html">List Full</a>
                  </li>
                  <li>
                    <a href="category-list-left-sidebar.html">List Left Sidebar</a>
                  </li>
                  <li>
                    <a href="category-list-right-sidebar.html">List Right Sidebar</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
              <div className="wrap-custom-menu vertical-menu">
                <h4 className="menu-title">Product Types</h4>
                <ul className="menu">
                  <li>
                    <a href="single-product-simple.html">Simple</a>
                  </li>
                  <li>
                    <a href="single-product-grouped.html">Grouped</a>
                  </li>
                  <li>
                    <a href="single-product.html">Variable</a>
                  </li>
                  <li>
                    <a href="single-product-external.html">External/Affiliate</a>
                  </li>
                  <li>
                    <a href="single-product-onsale.html">Countdown</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 9 */}
      <div id="biolife-panel-7" className="biolife-panel biolife-sub-panel biolife-hidden">
        <div className="wrap-megamenu lg-width-800 md-width-750">
          <div className="mega-content">
            <div className="col-lg-3 col-md-3 col-xs-6">
              <div className="wrap-custom-menu vertical-menu">
                <h4 className="menu-title">Blog Categories</h4>
                <ul className="menu">
                  <li>
                    <a href="#">Beauty (30)</a>
                  </li>
                  <li>
                    <a href="#">Fashion (50)</a>
                  </li>
                  <li>
                    <a href="#">Food (10)</a>
                  </li>
                  <li>
                    <a href="#">Life Style (60)</a>
                  </li>
                  <li>
                    <a href="#">Travel (10)</a>
                  </li>
                  <li>
                    <a href="#">Nutrition (35)</a>
                  </li>
                  <li>
                    <a href="#">Food Decoration (45)</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-6">
              <div className="wrap-custom-menu vertical-menu">
                <h4 className="menu-title">Featured Posts</h4>
                <ul className="menu">
                  <li>
                    <a href="#">
                      Post example<sup>#1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Post example<sup>#2</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Post example<sup>#3</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Post example<sup>#4</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Post example<sup>#5</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Post example<sup>#6</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Post example<sup>#7</sup>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 md-margin-top-0 xs-margin-top-25px">
              <div className="block-posts">
                <h4 className="menu-title">Recent Posts</h4>
                <ul className="posts">
                  <li>
                    <div className="block-post-item">
                      <div className="thumb">
                        <a href="#">
                          <img src="assets/images/megamenu/thumb-05.jpg" alt="" width="100" height="73" />
                        </a>
                      </div>
                      <div className="left-info">
                        <h4 className="post-name">
                          <a href="#">Ashwagandha: The #1 Herb in the World for Anxiety?</a>
                        </h4>
                        <span className="p-date">Jan 05, 2019</span>
                        <span className="p-comment">2 Comments</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="block-post-item">
                      <div className="thumb">
                        <a href="#">
                          <img src="assets/images/megamenu/thumb-06.jpg" alt="" width="100" height="73" />
                        </a>
                      </div>
                      <div className="left-info">
                        <h4 className="post-name">
                          <a href="#">Ashwagandha: The #1 Herb in the World for Anxiety?</a>
                        </h4>
                        <span className="p-date">May 15, 2019</span>
                        <span className="p-comment">8 Comments</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="block-post-item">
                      <div className="thumb">
                        <a href="#">
                          <img src="assets/images/megamenu/thumb-07.jpg" alt="" width="100" height="73" />
                        </a>
                      </div>
                      <div className="left-info">
                        <h4 className="post-name">
                          <a href="#">Ashwagandha: The #1 Herb in the World for Anxiety?</a>
                        </h4>
                        <span className="p-date">Apr 26, 2019</span>
                        <span className="p-comment">10 Comments</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 10 */}
      <div id="biolife-panel-8" className="biolife-panel biolife-sub-panel biolife-hidden"></div>

      {/* 11 */}
      <div id="biolife-panel-9" className="biolife-panel biolife-sub-panel biolife-hidden"></div>

      {/* 12 */}
      <div id="biolife-panel-10" className="biolife-panel biolife-sub-panel biolife-hidden"></div>

      {/* 13 */}
      <div id="biolife-panel-11" className="biolife-panel biolife-sub-panel biolife-hidden"></div>

{/* 14 */}
<div id="biolife-panel-12" className="biolife-panel biolife-sub-panel biolife-hidden"><div className="wrap-megamenu lg-width-900 md-width-640">
                                            <div className="mega-content">
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 col-sm-12 xs-margin-bottom-25 md-margin-bottom-0">
                                                        <div className="wrap-custom-menu vertical-menu">
                                                            <h4 className="menu-title">Fresh Fuits</h4>
                                                            <ul className="menu">
                                                                <li><a href="#">Fruit &amp; Nut Gifts</a></li>
                                                                <li><a href="#">Mixed Fruits</a></li>
                                                                <li><a href="#">Oranges</a></li>
                                                                <li><a href="#">Bananas &amp; Plantains</a></li>
                                                                <li><a href="#">Fresh Gala Apples</a></li>
                                                                <li><a href="#">Berries</a></li>
                                                                <li><a href="#">Pears</a></li>
                                                                <li><a href="#">Produce</a></li>
                                                                <li><a href="#">Snack Foods</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-sm-12 lg-padding-left-23 xs-margin-bottom-25 md-margin-bottom-0">
                                                        <div className="wrap-custom-menu vertical-menu">
                                                            <h4 className="menu-title">Nut Gifts</h4>
                                                            <ul className="menu">
                                                                <li><a href="#">Non-Dairy Coffee Creamers</a></li>
                                                                <li><a href="#">Coffee Creamers</a></li>
                                                                <li><a href="#">Mayonnaise</a></li>
                                                                <li><a href="#">Almond Milk</a></li>
                                                                <li><a href="#">Ghee</a></li>
                                                                <li><a href="#">Beverages</a></li>
                                                                <li><a href="#">Ranch Salad Dressings</a></li>
                                                                <li><a href="#">Hemp Milk</a></li>
                                                                <li><a href="#">Nuts &amp; Seeds</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-4 col-sm-12 lg-padding-left-50 xs-margin-bottom-25 md-margin-bottom-0">
                                                        <div className="biolife-products-block max-width-270">
                                                            <h4 className="menu-title">Bestseller Products</h4>
                                                            <ul className="products-list default-product-style biolife-carousel nav-none-after-1k2 nav-center slick-initialized slick-slider" data-slick="{&quot;rows&quot;:1,&quot;arrows&quot;:true,&quot;dots&quot;:false,&quot;infinite&quot;:false,&quot;speed&quot;:400,&quot;slidesMargin&quot;:30,&quot;slidesToShow&quot;:1, &quot;responsive&quot;:[{&quot;breakpoint&quot;:767, &quot;settings&quot;:{ &quot;arrows&quot;: false}}]}">
                                                                
                                                                
                                                                
                                                            <div className="slick-list draggable"><div className="slick-track" style="opacity: 1; width: 900px; transform: translate3d(0px, 0px, 0px);"><li className="product-item first-slick last-slick slick-slide slick-current slick-active" style="margin-right: 30px; width: 270px;" tabindex="0" data-slick-index="0" aria-hidden="false">
                                                                    <div className="contain-product none-overlay">
                                                                        <div className="product-thumb">
                                                                            <a href="#" className="link-to-product" tabindex="0">
                                                                                <img src="assets/images/products/p-08.jpg" alt="dd" className="product-thumnail" width="270" height="270">
                                                                            </a>
                                                                        </div>
                                                                        <div className="info">
                                                                            <b className="categories">Fresh Fruit</b>
                                                                            <h4 className="product-title"><a href="#" className="pr-name" tabindex="0">National Fresh Fruit</a></h4>
                                                                            <div className="price">
                                                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li><li className="product-item slick-slide" style="margin-right: 30px; width: 270px;" tabindex="-1" data-slick-index="1" aria-hidden="true">
                                                                    <div className="contain-product none-overlay">
                                                                        <div className="product-thumb">
                                                                            <a href="#" className="link-to-product" tabindex="-1">
                                                                                <img src="assets/images/products/p-11.jpg" alt="dd" className="product-thumnail" width="270" height="270">
                                                                            </a>
                                                                        </div>
                                                                        <div className="info">
                                                                            <b className="categories">Fresh Fruit</b>
                                                                            <h4 className="product-title"><a href="#" className="pr-name" tabindex="-1">National Fresh Fruit</a></h4>
                                                                            <div className="price">
                                                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li><li className="product-item slick-slide" style="margin-right: 30px; width: 270px;" tabindex="-1" data-slick-index="2" aria-hidden="true">
                                                                    <div className="contain-product none-overlay">
                                                                        <div className="product-thumb">
                                                                            <a href="#" className="link-to-product" tabindex="-1">
                                                                                <img src="assets/images/products/p-15.jpg" alt="dd" className="product-thumnail" width="270" height="270">
                                                                            </a>
                                                                        </div>
                                                                        <div className="info">
                                                                            <b className="categories">Fresh Fruit</b>
                                                                            <h4 className="product-title"><a href="#" className="pr-name" tabindex="-1">National Fresh Fruit</a></h4>
                                                                            <div className="price">
                                                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li></div></div></ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 md-margin-top-9">
                                                        <div className="biolife-brand">
                                                            <ul className="brands">
                                                                <li><a href="#"><img src="assets/images/megamenu/brand-organic.png" alt="organic" width="161" height="136"></a></li>
                                                                <li><a href="#"><img src="assets/images/megamenu/brand-explore.png" alt="explore" width="160" height="136"></a></li>
                                                                <li><a href="#"><img src="assets/images/megamenu/brand-organic-2.png" alt="organic 2" width="99" height="136"></a></li>
                                                                <li><a href="#"><img src="assets/images/megamenu/brand-eco-teas.png" alt="eco teas" width="164" height="136"></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div>


    </div>
  );
};

export default Sidebar;
