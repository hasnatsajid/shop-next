const Cart = () => {
  return (
    <div className="cart-section section pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive mb-30">
              <table className="table cart-table text-center">
                {/* <!-- Table Head --> */}
                <thead>
                  <tr>
                    <th className="number">#</th>
                    <th className="image">image</th>
                    <th className="name">product name</th>
                    <th className="qty">quantity</th>
                    <th className="price">price</th>
                    <th className="total">totle</th>
                    <th className="remove">remove</th>
                  </tr>
                </thead>

                {/* <!-- Table Body --> */}
                <tbody>
                  <tr>
                    <td>
                      <span className="cart-number">1</span>
                    </td>
                    <td>
                      <a href="#" className="cart-pro-image">
                        <img src="img/product/1.jpg" alt="" />
                      </a>
                    </td>
                    <td>
                      <a href="#" className="cart-pro-title">
                        Holiday Candle
                      </a>
                    </td>
                    <td>
                      <div className="product-quantity">
                        <input type="text" value="0" name="qtybox" />
                      </div>
                    </td>
                    <td>
                      <p className="cart-pro-price">$104.99</p>
                    </td>
                    <td>
                      <p className="cart-price-total">$104.99</p>
                    </td>
                    <td>
                      <button className="cart-pro-remove">
                        <i className="fa fa-trash-o"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="cart-number">2</span>
                    </td>
                    <td>
                      <a href="#" className="cart-pro-image">
                        <img src="img/product/2.jpg" alt="" />
                      </a>
                    </td>
                    <td>
                      <a href="#" className="cart-pro-title">
                        Christmas Tree
                      </a>
                    </td>
                    <td>
                      <div className="product-quantity">
                        <input type="text" value="0" name="qtybox" />
                      </div>
                    </td>
                    <td>
                      <p className="cart-pro-price">$85.99</p>
                    </td>
                    <td>
                      <p className="cart-price-total">$85.99</p>
                    </td>
                    <td>
                      <button className="cart-pro-remove">
                        <i className="fa fa-trash-o"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row">
              {/* <!-- Cart Action --> */}
              <div className="cart-action col-lg-4 col-md-6 col-12 mb-30">
                <a href="#" className="button">
                  Continiue Shopping
                </a>
                <button className="button">update cart</button>
              </div>

              {/* <!-- Cart Cuppon --> */}
              <div className="cart-cuppon col-lg-4 col-md-6 col-12 mb-30">
                <h4 className="title">Discount Code</h4>
                <p>Enter your coupon code if you have</p>
                <form className="cuppon-form">
                  <input type="text" placeholder="Cuppon Code" />
                  <button className="button">apply coupon</button>
                </form>
              </div>

              {/* <!-- Cart Checkout Progress --> */}
              <div className="cart-checkout-process col-lg-4 col-md-6 col-12 mb-30">
                <h4 className="title">Process Checkout</h4>
                <p>
                  <span>Subtotal</span>
                  <span>$190.98</span>
                </p>
                <h5>
                  <span>Grand total</span>
                  <span>$190.98</span>
                </h5>
                <button className="button">process to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
