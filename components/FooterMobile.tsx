const FooterMobile = () => {
  return (
    <div className="mobile-footer">
      <div className="mobile-footer-inner">
        <div className="mobile-block block-menu-main">
          <a className="menu-bar menu-toggle btn-toggle" data-object="open-mobile-menu" href="">
            <span className="fa fa-bars"></span>
            <span className="text">Menu</span>
          </a>
        </div>
        <div className="mobile-block block-sidebar">
          <a className="menu-bar filter-toggle btn-toggle" data-object="open-mobile-filter" href="">
            <i className="fa fa-sliders" aria-hidden="true"></i>
            <span className="text">Sidebar</span>
          </a>
        </div>
        <div className="mobile-block block-minicart">
          <a className="link-to-cart" href="#">
            <span className="fa fa-shopping-bag" aria-hidden="true"></span>
            <span className="text">Cart</span>
          </a>
        </div>
        <div className="mobile-block block-global">
          <a className="menu-bar myaccount-toggle btn-toggle" data-object="global-panel-opened" href="">
            <span className="fa fa-globe"></span>
            <span className="text">Global</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
