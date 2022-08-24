import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter-section section pt-100 pb-120">
      <div className="container">
        {/* <!-- Section Title Start--> */}
        <div className="row">
          <div className="section-title text-center col mb-55">
            <h1>Newsletter</h1>
            <p>
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the
              moment.
            </p>
          </div>
        </div>
        {/* <!-- Section Title End--> */}

        <div className="row">
          <div className="text-center col">
            {/* <!-- Newsletter Form --> */}
            <form
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="subscribe-form validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL" className="d-none">
                  Subscribe to our mailing list
                </label>
                <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Your email address" required />
                {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabIndex={-1} />
                </div>
                <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
