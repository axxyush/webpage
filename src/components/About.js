import React from "react";
import Footer from "./Footer";

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
              Auspex Medix LLC is a pioneering health technology company that
              specializes in smart health solutions for all age groups, from
              children to seniors. Founded as a spin-off from the University at
              Buffalo, we leverage cutting-edge research to develop advanced
              mobile health sensors, wearable devices, AI-powered applications,
              and secure health data management systems. Our mission is to
              enhance healthcare through innovative technology, improving
              well-being across all stages of life.
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
              Our technology combines advanced mobile and wearable health
              sensors with artificial intelligence to provide real-time health
              monitoring and diagnostics. These solutions are designed to
              improve patient outcomes through early detection, personalized
              care, and continuous monitoring. We prioritize data security,
              implementing robust management systems that adhere to the highest
              standards of privacy and compliance.
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
              At Auspex Medix LLC, we envision a future where advanced health
              services are affordable and accessible to all. We are committed to
              empowering clinical researchers and end-users with AI-powered
              health solutions that enhance diagnostics, monitoring, and overall
              well-being. By leveraging mobile and wearable technologies, we aim
              to bridge the gap between quality healthcare and those who need it
              most. Our goal is to democratize health services, ensuring that
              everyone can benefit from personalized, real-time health
              monitoring and secure, data-driven insights, ultimately improving
              lives on a global scale.
            </p>
          </div>
        </div>
      </div>

      {/* Contact********************************* */}
      <Footer />
    </>
  );
}

export default About;
