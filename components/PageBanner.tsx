const PageBanner = ({ title }) => {
  return (
    <div className="page-banner-section section" style={{ backgroundImage: 'url(/img/bg/page-banner.jpg)' }}>
      <div className="container">
        <div className="row">
          {/* <!-- Page Title Start --> */}
          <div className="page-title text-center col">
            <h1>{title}</h1>
          </div>
          {/* <!-- Page Title End --> */}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
