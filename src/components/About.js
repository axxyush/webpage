import React from "react";

function About() {
  return (
    <>
      {/* Hero********************* */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1718664485559-9ae16a7a01b1?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
        className="hero"
      >
        <h1 className="heroHeading slideup">
          <b>About</b>
        </h1>
      </div>

      {/* ********************************* */}
      <div
        style={{ backgroundColor: "white" }}
        className="align-item-center d-flex px-5"
      >
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://plus.unsplash.com/premium_photo-1679082307672-02ebf0ba9b9a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block slideup mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={500}
              height={300}
              loading="lazy"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="col-lg-6">
            <p className="lead slideup">
              Founded in 2016, Lucendi, Inc. is a leading innovator and
              developer of AI-enabled smart measurement platforms for
              cost-effective and high-performance micro-object detection and
              characterization. Lucendi technology portfolio and IP are based on
              computational microscopy and holographic imaging coupled with
              innovative image processing, big data and machine learning
              approaches. Lucendi’s core technologies are cost-effective, robust
              and field-portable, which make them adaptable to a wide variety of
              applications.
            </p>
          </div>
        </div>
      </div>

      {/* ***************************** */}

      <div
        style={{ backgroundColor: "brown" }}
        className="align-item-center d-flex px-5"
      >
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <p className="lead slideup">
              Lucendi is currently expanding its development team and is seeking
              ambitious, talented and resourceful individuals to fill in several
              open positions at different levels within our dynamic team.
              Lucendi’s current hiring priorities are software development
              engineers experienced in any of the following areas:
              <br />
              Lucendi is an organically growing company offering employees
              opportunities for personal development and growth, as well as
              competitive compensation. If you are interested to apply or learn
              more about this opportunity, please send your CV/resume or
              questions to
            </p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1686519093104-3140c6dcf284?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block slideup mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={500}
              height={300}
              loading="lazy"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
      {/* Contact********************************* */}
      <footer className="bg-dark slideup text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top border-secondary">
            <p>© 2024 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex mb-0">
              <li className="ms-3">
                <a className="text-white" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#twitter" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-white" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-white" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default About;
