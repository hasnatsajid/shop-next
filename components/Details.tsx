const Details = () => {
  return (
    <div className="product-section section pt-110 pb-90">
      <div className="container">
        {/* <!-- Product Wrapper Start--> */}
        <div className="row">
          {/* <!-- Product Image & Thumbnail Start --> */}
          <div className="col-lg-7 col-12 mb-30">
            {/* <!-- Product Thumbnail --> */}
            <div className="single-product-thumbnail product-thumbnail-slider float-left">
              <div className="single-thumb">
                <img src="img/product-details/thumb-1.jpg" alt="" />
              </div>
              <div className="single-thumb">
                <img src="img/product-details/thumb-2.jpg" alt="" />
              </div>
              <div className="single-thumb">
                <img src="img/product-details/thumb-3.jpg" alt="" />
              </div>
              <div className="single-thumb">
                <img src="img/product-details/thumb-4.jpg" alt="" />
              </div>
            </div>

            {/* <!-- Product Image --> */}
            <div className="single-product-image product-image-slider fix">
              <div className="single-image">
                <img src="img/product-details/1.jpg" alt="" />
              </div>
              <div className="single-image">
                <img src="img/product-details/2.jpg" alt="" />
              </div>
              <div className="single-image">
                <img src="img/product-details/3.jpg" alt="" />
              </div>
              <div className="single-image">
                <img src="img/product-details/4.jpg" alt="" />
              </div>
            </div>
          </div>
          {/* <!-- Product Image & Thumbnail End --> */}

          {/* <!-- Product Content Start --> */}
          <div className="single-product-content col-lg-5 col-12 mb-30">
            {/* <!-- Title --> */}
            <h1 className="title">Holiday Candle</h1>

            {/* <!-- Product Rating --> */}
            <span className="product-rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>

            {/* <!-- Price --> */}
            <span className="product-price">€ 120.0</span>

            {/* <!-- Description --> */}
            <div className="description">
              <p>
                There are many variations of passages of Lorem Ipsum avaable,majority have suffered alteration in some form, by injected humour, or rdomised
                words which don't look even slightly believable.
              </p>
            </div>

            {/* <!-- Color --> */}
            <div className="product-color fix">
              <h5>Select Color</h5>
              <form action="#">
                <div className="color-box">
                  <input type="radio" name="color" id="color-1" />
                  <label htmlFor="color-1" style={{ backgroundColor: '#51bd99' }}>
                    color 1
                  </label>
                </div>
                <div className="color-box">
                  <input type="radio" name="color" id="color-2" />
                  <label htmlFor="color-2" style={{ backgroundColor: '#83a931' }}>
                    color 2
                  </label>
                </div>
                <div className="color-box">
                  <input type="radio" name="color" id="color-3" />
                  <label htmlFor="color-3" style={{ backgroundColor: '#c8001e' }}>
                    color 3
                  </label>
                </div>
                <div className="color-box">
                  <input type="radio" name="color" id="color-4" />
                  <label htmlFor="color-4" style={{ backgroundColor: '#414141' }}>
                    color 4
                  </label>
                </div>
              </form>
            </div>

            {/* <!-- Quantity & Cart Button --> */}
            <div className="product-quantity-cart fix">
              <div className="product-quantity">
                <input type="text" value="0" name="qtybox" />
              </div>
              <button className="add-to-cart">add to cart</button>
            </div>

            {/* <!-- Action Button --> */}
            <div className="product-action-button fix">
              <button>
                <i className="ion-ios-email-outline"></i>Email to a friend
              </button>
              <button>
                <i className="ion-ios-heart-outline"></i>Wishlist
              </button>
              <button>
                <i className="ion-ios-printer-outline"></i>Print
              </button>
            </div>

            {/* <!-- Social Share --> */}
            <div className="product-share fix">
              <h6>Share :</h6>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          {/* <!-- Product Content End --> */}
        </div>
        {/* <!-- Product Wrapper End--> */}

        {/* <!-- Product Additional Info Start--> */}
        <div className="row">
          {/* <!-- Nav tabs --> */}
          <div className="col-12 mt-30">
            <ul className="pro-info-tab-list nav">
              <li>
                <a className="active" data-toggle="tab" href="#more-info">
                  More info
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#data-sheet">
                  Data sheet
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#reviews">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Tab panes --> */}
          <div className="tab-content col-12">
            <div className="pro-info-tab tab-pane active" id="more-info">
              <p>
                Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement
                dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result?
                Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with
                the greatest attention.
              </p>
            </div>

            <div className="pro-info-tab tab-pane" id="data-sheet">
              <table className="table table-bordered">
                <tbody>
                  <tr className="odd">
                    <td>Compositions</td>
                    <td>Cotton</td>
                  </tr>
                  <tr className="even">
                    <td>Styles</td>
                    <td>Casual</td>
                  </tr>
                  <tr className="odd">
                    <td>Properties</td>
                    <td>Short Sleeve</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pro-info-tab tab-pane" id="reviews">
              <a className="button" href="#">
                Be the first to write your review!
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Product Additional Info End--> */}
      </div>
    </div>
  );
};

export default Details;
