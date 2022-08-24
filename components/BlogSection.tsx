const BlogSection = () => {
  return (
    <div className="blog-section section bg-gray pt-100 pb-60">
      <div className="container">
        {/* <!-- Section Title Start--> */}
        <div className="row">
          <div className="section-title text-center col mb-60">
            <h1>Christmas Blog</h1>
          </div>
        </div>
        {/* <!-- Section Title End--> */}

        <div className="row">
          {/* <!-- Blog Item Start--> */}
          <div className="blog-item col-lg-4 col-md-6 col-12 mb-60">
            {/* <!-- Image --> */}
            <a href="blog-details.html" className="image">
              <img src="img/blog/1.jpg" alt="blog" />
            </a>

            {/* <!-- Content --> */}
            <div className="content fix">
              {/* <!-- Publish Date --> */}
              <span className="publish">
                <span>Published on:</span> 25 May 2017
              </span>

              {/* <!-- Title --> */}
              <h4 className="title">
                <a href="blog-details.html">If you are going to use a passage.</a>
              </h4>

              {/* <!-- Decs --> */}
              <p>
                If you are going to use a passage of Lorem Ipsum, yneed to be sure there isn't anything embarrassing hidden ithe middle text. All the Lorem
                Ipsum.
              </p>

              {/* <!-- Read More Link -->  */}
              <a href="blog-details.html" className="read-more">
                Read More
              </a>
            </div>
          </div>
          {/* <!-- Blog Item End--> */}

          <div className="blog-item col-lg-4 col-md-6 col-12 mb-60">
            {/* <!-- Image --> */}
            <a href="blog-details.html" className="image">
              <img src="img/blog/2.jpg" alt="blog" />
            </a>

            {/* <!-- Content --> */}
            <div className="content fix">
              {/* <!-- Publish Date --> */}
              <span className="publish">
                <span>Published on:</span> 25 May 2017
              </span>

              {/* <!-- Title --> */}
              <h4 className="title">
                <a href="blog-details.html">Ut enim ad minima veniam, quis.</a>
              </h4>

              {/* <!-- Decs --> */}
              <p>
                If you are going to use a passage of Lorem Ipsum, yneed to be sure there isn't anything embarrassing hidden ithe middle text. All the Lorem
                Ipsum.
              </p>

              {/* <!-- Read More Link -->  */}
              <a href="blog-details.html" className="read-more">
                Read More
              </a>
            </div>
          </div>
          {/* <!-- Blog Item End--> */}

          {/* <!-- Blog Item Start--> */}
          <div className="blog-item col-lg-4 col-md-6 col-12 mb-60">
            {/* <!-- Image --> */}
            <a href="blog-details.html" className="image">
              <img src="img/blog/3.jpg" alt="blog" />
            </a>

            {/* <!-- Content --> */}
            <div className="content fix">
              {/* <!-- Publish Date --> */}
              <span className="publish">
                <span>Published on:</span> 25 May 2017
              </span>

              {/* <!-- Title --> */}
              <h4 className="title">
                <a href="blog-details.html">At vero eos et accusamus et iusto</a>
              </h4>

              {/* <!-- Decs --> */}
              <p>
                If you are going to use a passage of Lorem Ipsum, yneed to be sure there isn't anything embarrassing hidden ithe middle text. All the Lorem
                Ipsum.
              </p>

              {/* <!-- Read More Link -->  */}
              <a href="blog-details.html" className="read-more">
                Read More
              </a>
            </div>
          </div>
          {/* <!-- Blog Item End--> */}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
