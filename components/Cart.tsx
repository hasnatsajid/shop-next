import { RootState } from '../store/store';
import { removeFromCart } from '../store/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const onRemoveFromCart = (e) => {
    const itemId = +e.target.dataset.object;
    const targetItem = cartItems.find((item) => item.id === itemId);

    if (targetItem) {
      dispatch(removeFromCart(targetItem));
    }
  };

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
                    <th className="total">total</th>
                    <th className="remove">remove</th>
                  </tr>
                </thead>

                {/* <!-- Table Body --> */}
                <tbody>
                  {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                      <tr key={item.id}>
                        <td>
                          <span className="cart-number">{index + 1}</span>
                        </td>
                        <td>
                          <a href="#" className="cart-pro-image">
                            <img src={item.image} alt="" />
                          </a>
                        </td>
                        <td>
                          <a href="#" className="cart-pro-title">
                            {item.name}
                          </a>
                        </td>
                        <td>
                          <div className="product-quantity">
                            <span className="dec qtybtn">
                              <i className="fa fa-angle-left"></i>
                            </span>
                            <input type="text" name="qtybox" />
                            <span className="inc qtybtn">
                              <i className="fa fa-angle-right"></i>
                            </span>

                            {/* <input type="text" value="0" name="qtybox" /> */}
                          </div>
                        </td>
                        <td>
                          <p className="cart-pro-price">${item.price}</p>
                        </td>
                        <td>
                          <p className="cart-price-total">${item.price}</p>
                        </td>
                        <td>
                          <button className="cart-pro-remove">
                            <i className="fa fa-trash-o" data-object={item.id} onClick={onRemoveFromCart}></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="text-center cart-table">
                      <td className="m-3 text-center full-width">No items to show :)</td>
                    </tr>
                  )}
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
