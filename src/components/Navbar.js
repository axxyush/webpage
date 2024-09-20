import React, { useState, useEffect } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar bg-dark navbar-dark fixed-top navbar-expand-lg transition-all duration-300 ${
        sticky ? "py-2 " : "py-4"
      }`}
      style={{ transition: "all 0.3s ease" }}
    >
      <div className="container-fluid">
        <a className={`navbar-brand ${sticky ? "fs-4" : "fs-2"}`} href="/">
          Auspex Medix
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${sticky ? "fs-6" : "fs-5"}`} href="#">
                About
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${
                  sticky ? "fs-6" : "fs-5"
                }`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className={`dropdown-item ${sticky ? "fs-6" : "fs-5"}`}
                    href="https://auspexmedix.vercel.app"
                  >
                    VocalLens
                  </a>
                </li>
                <li>
                  <a
                    className={`dropdown-item ${sticky ? "fs-6" : "fs-5"}`}
                    href="#"
                  >
                    OralCam
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className={`dropdown-item ${sticky ? "fs-6" : "fs-5"}`}
                    href="#"
                  >
                    Ongoing
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${sticky ? "fs-6" : "fs-5"}`} href="#">
                News
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
