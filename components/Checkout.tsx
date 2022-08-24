const Checkout = () => {
  return (
    <div className="cart-section section pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-30">
            {/* <!-- Checkout Accordion Start --> */}
            <div id="checkout-accordion" className="panel-group">
              {/* <!-- Checkout Method --> */}
              <div className="panel single-accordion">
                <a className="accordion-head" data-toggle="collapse" data-parent="#checkout-accordion" href="#checkout-method">
                  1. checkout method
                </a>

                <div id="checkout-method" className="collapse show">
                  <div className="checkout-method accordion-body fix">
                    <ul className="checkout-method-list">
                      <li className="active" data-form="checkout-login-form">
                        Login
                      </li>
                      <li data-form="checkout-register-form">Register</li>
                    </ul>

                    <form className="checkout-login-form">
                      <div className="row">
                        <div className="input-box col-md-6 col-12 mb-20">
                          <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="input-box col-md-6 col-12 mb-20">
                          <input type="password" placeholder="Password" />
                        </div>
                        <div className="input-box col-md-6 col-12 mb-20">
                          <input type="submit" value="Login" />
                        </div>
                      </div>
                    </form>

                    <form className="checkout-register-form">
                      <div className="row">
                        <div className="input-box col-md-6 col-12 mb-20">
                          <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="input-box col-md-6 col-12 mb-20">
                          <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="input-box col-md-6 col-12 mb-20">
                          <input type="password" placeholder="Password" />
                        </div>
                        <div className="input-box col-md-6 col-12 mb-20">
                          <input type="password" placeholder="Confirm Password" />
                        </div>
                        <div className="input-box col-md-6 col-12 mb-20">
                          <input type="submit" value="Register" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* <!-- Billing Method --> */}
              <div className="panel single-accordion">
                <a className="accordion-head collapsed" data-toggle="collapse" data-parent="#checkout-accordion" href="#billing-method">
                  2. billing informatioon
                </a>
                <div id="billing-method" className="collapse">
                  <div className="accordion-body billing-method fix">
                    <form className="billing-form checkout-form">
                      <div className="row">
                        <div className="col-12 mb-20">
                          <select>
                            <option value="1">Select a country</option>
                            <option value="2">bangladesh</option>
                            <option value="3">Algeria</option>
                            <option value="4">Afghanistan</option>
                            <option value="5">Ghana</option>
                            <option value="6">Albania</option>
                            <option value="7">Bahrain</option>
                            <option value="8">Colombia</option>
                            <option value="9">Dominican Republic</option>
                          </select>
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                          <input type="text" placeholder="First Name" />
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                          <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="col-12 mb-20">
                          <input type="text" placeholder="Company Name" />
                        </div>
                        <div className="col-12 mb-20">
                          <input placeholder="Street address" type="text" />
                        </div>
                        <div className="col-12 mb-20">
                          <input placeholder="Apartment, suite, unit etc. (optional)" type="text" />
                        </div>
                        <div className="col-12 mb-20">
                          <input placeholder="Town / City" type="text" />
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                          <input type="text" placeholder="State / County" />
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                          <input placeholder="Postcode / Zip" type="text" />
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                          <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                          <input placeholder="Phone Number" type="text" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* <!-- Shipping Method --> */}
              <div className="panel single-accordion">
                <a className="accordion-head collapsed" data-toggle="collapse" data-parent="#checkout-accordion" href="#shipping-method">
                  3. shipping informatioon
                </a>
                <div id="shipping-method" className="collapse">
                  <div className="accordion-body shipping-method fix">
                    <h5>shipping address</h5>
                    <p>
                      <span>address&nbsp;</span>Bootexperts, Banasree D-Block, Dhaka 1219, Bangladesh
                    </p>

                    <button className="shipping-form-toggle">Ship to a different address?</button>

                    <form className="shipping-form checkout-form">
                      <div className="row">
                        <div className="col-12 mb-20">
                          <select>
                            <option value="1">Select a country</option>
                            <option value="2">bangladesh</option>
                            <option value="3">Algeria</option>
                            <option value="4">Afghanistan</option>
                            <option value="5">Ghana</option>
                            <option value="6">Albania</option>
                            <option value="7">Bahrain</option>
                            <option value="8">Colombia</option>
                            <option value="9">Dominican Republic</option>
                          </select>
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                          <input type="text" placeholder="First Name" />
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                          <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="col-12 mb-20">
                          <input type="text" placeholder="Company Name" />
                        </div>
                        <div className="col-12 mb-20">
                          <input placeholder="Street address" type="text" />
                        </div>
                        <div className="col-12 mb-20">
                          <input placeholder="Apartment, suite, unit etc. (optional)" type="text" />
                        </div>
                        <div className="col-12 mb-20">
                          <input placeholder="Town / City" type="text" />
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                          <input type="text" placeholder="State / County" />
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                          <input placeholder="Postcode / Zip" type="text" />
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                          <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                          <input placeholder="Phone Number" type="text" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* <!-- Payment Method --> */}
              <div className="panel single-accordion">
                <a className="accordion-head collapsed" data-toggle="collapse" data-parent="#checkout-accordion" href="#payment-method">
                  4. Payment method
                </a>
                <div id="payment-method" className="collapse">
                  <div className="accordion-body payment-method fix">
                    <ul className="payment-method-list">
                      <li className="active">check / money order</li>
                      <li className="payment-form-toggle">credit card</li>
                    </ul>

                    <form className="payment-form">
                      <div className="row">
                        <div className="input-box col-12 mb-20">
                          <label htmlFor="card-name">Name on Card *</label>
                          <input type="text" id="card-name" />
                        </div>
                        <div className="input-box col-12 mb-20">
                          <label>Credit Card Type</label>
                          <select>
                            <option>Please Select</option>
                            <option>Credit Card Type 1</option>
                            <option>Credit Card Type 2</option>
                          </select>
                        </div>
                        <div className="input-box col-12 mb-20">
                          <label htmlFor="card-number">Credit Card Number *</label>
                          <input type="text" id="card-number" />
                        </div>
                        <div className="input-box col-12">
                          <div className="row">
                            <div className="input-box col-12">
                              <label>Expiration Date</label>
                            </div>
                            <div className="input-box col-md-6 col-12 mb-20">
                              <select>
                                <option>Month</option>
                                <option>Jan</option>
                                <option>Feb</option>
                                <option>Mar</option>
                                <option>Apr</option>
                                <option>May</option>
                                <option>Jun</option>
                                <option>Jul</option>
                                <option>Aug</option>
                                <option>Sep</option>
                                <option>Oct</option>
                                <option>Nov</option>
                                <option>Dec</option>
                              </select>
                            </div>
                            <div className="input-box col-md-6 col-12 mb-20">
                              <select>
                                <option>Year</option>
                                <option>2015</option>
                                <option>2016</option>
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="input-box col-12">
                          <label htmlFor="card-Verify">Card Verification Number *</label>
                          <input type="text" id="card-Verify" />
                          <a href="#">What is it ?</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Checkout Accordion Start --> */}
          </div>

          {/* <!-- Order Details --> */}
          <div className="col-lg-6 col-12 mb-30">
            <div className="order-details-wrapper">
              <h2>your order</h2>
              <div className="order-details">
                <form>
                  <ul>
                    <li>
                      <p className="strong">product</p>
                      <p className="strong">total</p>
                    </li>
                    <li>
                      <p>Holiday Candle x1</p>
                      <p>$104.99</p>
                    </li>
                    <li>
                      <p>Christmas Tree x1 </p>
                      <p>$85.99</p>
                    </li>
                    <li>
                      <p className="strong">cart subtotal</p>
                      <p className="strong">$190.98</p>
                    </li>
                    <li>
                      <p className="strong">shipping</p>
                      <p>
                        <input type="radio" name="order-shipping" id="flat" />
                        <label htmlFor="flat">Flat Rate $ 7.00</label>
                        <br />
                        <input type="radio" name="order-shipping" id="free" />
                        <label htmlFor="free">Free Shipping</label>
                      </p>
                    </li>
                    <li>
                      <p className="strong">order total</p>
                      <p className="strong">$190.98</p>
                    </li>
                    <li>
                      <button className="button">place order</button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
