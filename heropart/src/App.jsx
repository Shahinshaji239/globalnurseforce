import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="app container-fluid p-0">
      {/* Header */}
      <header className="header row align-items-center justify-content-between mx-0">
        <nav className="navbar navbar-expand-md col-12 p-0 d-flex align-items-center justify-content-between">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/372f33c8c021374cbf14d9b9ecb5da2a7b2dd5db?width=554"
            alt="Global Nurse Force Logo"
            className="header-logo"
          />
          <button
            className="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
            <a href="#" className="navbar-link inactive">
              About Us
            </a>
            <a href="#" className="navbar-link">
              International Recruitment
            </a>
            <a href="#" className="navbar-link inactive">
              Licensing & Registration
            </a>
            <a href="#" className="navbar-link inactive">
              Training Programs
            </a>
            <a href="#" className="navbar-link inactive">
              Visa
            </a>
            <a href="#" className="signup-btn ms-md-3 mt-2 mt-md-0">
              Sign up
              <svg
                className="signup-arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero row justify-content-center mx-0">
        <div className="hero-content col-12 col-lg-10 d-flex flex-column align-items-center">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-text">Direct Hire Recruitment</span>
            </div>
            <h1 className="hero-title">
              <span className="title-dark">
                Transforming Nursing Careers & Strengthening Healthcare Teams
                -{" "}
              </span>
              <span className="title-gradient">Worldwide</span>
            </h1>
            <p className="hero-description">
              We are a leading international nurse recruitment agency,
              connecting talented nurses with top hospitals and healthcare
              facilities across the globe.
            </p>
          </div>

          <div className="hero-buttons d-flex flex-column flex-md-row w-100 justify-content-center align-items-center">
            <a href="#" className="primary-btn">
              Explore nursing jobs
            </a>
            <a href="#" className="secondary-btn">
              Hire top talents
            </a>
          </div>

          <div className="hero-stats d-flex flex-row flex-wrap align-items-center justify-content-center stat-row-force">
            <div className="stat-item d-flex flex-row align-items-center justify-content-center stat-row-force mb-2 mb-md-0 me-md-4">
              <svg
                className="check-icon"
                width="24"
                height="24"
                viewBox="0 0 17 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.0501 13L0.350098 7.29998L1.7751 5.87498L6.0501 10.15L15.2251 0.974976L16.6501 2.39998L6.0501 13Z"
                  fill="#17548D"
                />
              </svg>
              <span className="stat-text ms-2">
                20,000+ Nursing Dreams Fulfilled
              </span>
            </div>
            <div className="stat-item d-flex flex-row align-items-center justify-content-center stat-row-force">
              <svg
                className="check-icon"
                width="24"
                height="24"
                viewBox="0 0 17 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.0501 13L0.350098 7.29998L1.7751 5.87498L6.0501 10.15L15.2251 0.974976L16.6501 2.39998L6.0501 13Z"
                  fill="#17548D"
                />
              </svg>
              <span className="stat-text ms-2">
                250+ Associated Hospitals Worldwide
              </span>
            </div>
          </div>
        </div>

        <div className="hero-video col-12 col-lg-10 position-relative mt-4">
          <img
            src="/Hero Video.png"
            alt="Hero Video"
            className="hero-video-bg"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          />
          <div className="video-overlay"></div>
          <div className="play-button">
            <div className="play-icon-container">
              <svg
                className="play-icon"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.414 10.6768C16.1363 11.7512 14.8238 12.5104 12.1988 14.0289C9.66114 15.4967 8.39237 16.2307 7.36986 15.9357C6.94713 15.8137 6.56196 15.5821 6.25133 15.2629C5.5 14.4911 5.5 12.9941 5.5 9.99999C5.5 7.00592 5.5 5.50888 6.25133 4.73705C6.56196 4.41796 6.94713 4.1863 7.36986 4.06434C8.39237 3.76932 9.66114 4.50326 12.1988 5.97114C14.8238 7.48957 16.1363 8.24879 16.414 9.32319C16.5287 9.76671 16.5287 10.2333 16.414 10.6768Z"
                  stroke="#1E74BF"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients row justify-content-center mx-0">
        <div className="clients-header col-12 d-flex flex-column align-items-center">
          <h2 className="clients-title">Our Clients and Partnership</h2>
          <div className="clients-logos-container">
            <div className="clients-logos-scroll">
              <div className="clients-logos">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c06bbb84373bef6186011cb29f6eef2a94692f6?width=232"
                  alt="NWL-ICS"
                  className="client-logo"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ca2ee54003b8862a0aba6ae933700f20d087941?width=308"
                  alt="OhioHealth"
                  className="client-logo"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/850c0ae4d1cb1243f90d0f6a899abf985b52ffbd?width=212"
                  alt="Partner Logo"
                  className="client-logo"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/162666d1f7c7f836148c7879978bac8a0a556a77?width=380"
                  alt="Insight Global"
                  className="client-logo"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfc4ed5901c3131fd70bfbbf4dcd325c9f7a53f7?width=298"
                  alt="MedStar Health"
                  className="client-logo"
                />
              </div>
              <div className="clients-logos" aria-hidden="true">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c06bbb84373bef6186011cb29f6eef2a94692f6?width=232"
                  alt="NWL-ICS"
                  className="client-logo"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ca2ee54003b8862a0aba6ae933700f20d087941?width=308"
                  alt="OhioHealth"
                  className="client-logo"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/850c0ae4d1cb1243f90d0f6a899abf985b52ffbd?width=212"
                  alt="Partner Logo"
                  className="client-logo"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/162666d1f7c7f836148c7879978bac8a0a556a77?width=380"
                  alt="Insight Global"
                  className="client-logo"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfc4ed5901c3131fd70bfbbf4dcd325c9f7a53f7?width=298"
                  alt="MedStar Health"
                  className="client-logo"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats col-12 d-flex flex-column align-items-center">
          <div className="stats-badge">
            <span className="badge-text">Proven Expertise You Can Trust</span>
          </div>
          <h2 className="stats-title">
            <span className="title-gradient">20+ Years</span>
            <span className="title-dark"> of Excellence </span>
            <span className="title-gradient">20,000+</span>
            <span className="title-dark"> Successful Placements</span>
          </h2>

          <div className="stats-cards d-flex flex-column flex-md-row align-items-center justify-content-center w-100">
            {/* Google Review Card */}
            <div className="review-card">
              <div className="card-inner"></div>
              <div className="card-content">
                <div className="card-inner-content">
                  <div className="platform-icon">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_5403)">
                        <path
                          d="M55.2238 28.529C55.2238 26.2347 55.0367 24.5604 54.6317 22.8242H28.2979V33.1795H43.7552C43.4437 35.753 41.7608 39.6285 38.021 42.2327L37.9686 42.5794L46.2949 48.9965L46.8717 49.0538C52.1696 44.1861 55.2238 37.0241 55.2238 28.529Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M28.2979 55.8128C35.8707 55.8128 42.2281 53.3323 46.8717 49.0539L38.021 42.2328C35.6526 43.876 32.4738 45.0232 28.2979 45.0232C20.8808 45.0232 14.5857 40.1556 12.3416 33.4277L12.0127 33.4555L3.35492 40.1214L3.2417 40.4346C7.85396 49.5497 17.3279 55.8128 28.2979 55.8128Z"
                          fill="#34A853"
                        />
                        <path
                          d="M12.3416 33.4277C11.7495 31.6914 11.4068 29.831 11.4068 27.9089C11.4068 25.9865 11.7495 24.1263 12.3105 22.3901L12.2948 22.0203L3.52852 15.2473L3.2417 15.383C1.34076 19.1656 0.25 23.4133 0.25 27.9089C0.25 32.4045 1.34076 36.6519 3.2417 40.4345L12.3416 33.4277Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M28.2979 10.7945C33.5645 10.7945 37.1172 13.0578 39.143 14.9492L47.0587 7.26012C42.1972 2.76452 35.8707 0.00512695 28.2979 0.00512695C17.3279 0.00512695 7.85396 6.26794 3.2417 15.3831L12.3105 22.3902C14.5857 15.6623 20.8808 10.7945 28.2979 10.7945Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_5403">
                          <rect
                            width="55"
                            height="56"
                            fill="white"
                            transform="translate(0.25 0.00512695)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="platform-name">Google Review</div>
                  <div className="stars">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        className="star"
                        width="27"
                        height="26"
                        viewBox="0 0 27 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_5410)">
                          <path
                            d="M14.1563 21.2031C13.7607 20.9634 13.2647 20.9634 12.8691 21.2032L6.80238 24.8803C5.86205 25.4502 4.69959 24.607 4.94946 23.5362L6.55785 16.6434C6.66234 16.1956 6.51083 15.7268 6.16407 15.4248L0.823986 10.7744C-0.00318748 10.054 0.441488 8.69344 1.53442 8.60063L8.57187 8.00302C9.03014 7.9641 9.42937 7.67508 9.60944 7.25187L12.3713 0.760723C12.7999 -0.246739 14.2279 -0.246738 14.6566 0.760725L17.4184 7.25188C17.5985 7.67508 17.9977 7.9641 18.456 8.00302L25.4934 8.60063C26.5864 8.69344 27.031 10.054 26.2039 10.7744L20.8638 15.4248C20.517 15.7268 20.3655 16.1956 20.47 16.6434L22.0785 23.5366C22.3283 24.6074 21.166 25.4506 20.2257 24.8808L14.1563 21.2031Z"
                            fill="url(#paint0_linear_1_5410)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_5410"
                            x1="13.5139"
                            y1="0.00512627"
                            x2="13.5139"
                            y2="21.3218"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFDE05" />
                            <stop offset="1" stopColor="#FF9D00" />
                          </linearGradient>
                          <clipPath id="clip0_1_5410">
                            <rect
                              width="26.2358"
                              height="25.1427"
                              fill="white"
                              transform="translate(0.395996 0.00512695)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                    <svg
                      className="star"
                      width="27"
                      height="26"
                      viewBox="0 0 27 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_5414)">
                        <path
                          d="M13.8638 21.2031C13.4682 20.9634 12.9722 20.9634 12.5766 21.2032L6.5099 24.8803C5.56957 25.4502 4.40711 24.607 4.65698 23.5362L6.26537 16.6434C6.36986 16.1956 6.21835 15.7268 5.87159 15.4248L0.531505 10.7744C-0.295668 10.054 0.149007 8.69344 1.24194 8.60063L8.27939 8.00302C8.73766 7.9641 9.13689 7.67508 9.31696 7.25187L12.0788 0.760723C12.5075 -0.246739 13.9354 -0.246738 14.3641 0.760725L17.1259 7.25188C17.306 7.67508 17.7052 7.9641 18.1635 8.00302L25.2009 8.60063C26.2939 8.69344 26.7386 10.054 25.9114 10.7744L20.5713 15.4248C20.2245 15.7268 20.073 16.1956 20.1775 16.6434L21.786 23.5366C22.0359 24.6074 20.8736 25.4506 19.9332 24.8808L13.8638 21.2031Z"
                          fill="#C2C4C6"
                        />
                        <mask
                          id="mask0_1_5414"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="27"
                          height="26"
                        >
                          <path
                            d="M13.8638 21.2031C13.4682 20.9634 12.9722 20.9634 12.5766 21.2032L6.5099 24.8803C5.56957 25.4502 4.40711 24.607 4.65698 23.5362L6.26537 16.6434C6.36986 16.1956 6.21835 15.7268 5.87159 15.4248L0.531505 10.7744C-0.295668 10.054 0.149007 8.69344 1.24194 8.60063L8.27939 8.00302C8.73766 7.9641 9.13689 7.67508 9.31696 7.25187L12.0788 0.760723C12.5075 -0.246739 13.9354 -0.246738 14.3641 0.760725L17.1259 7.25188C17.306 7.67508 17.7052 7.9641 18.1635 8.00302L25.2009 8.60063C26.2939 8.69344 26.7386 10.054 25.9114 10.7744L20.5713 15.4248C20.2245 15.7268 20.073 16.1956 20.1775 16.6434L21.786 23.5366C22.0359 24.6074 20.8736 25.4506 19.9332 24.8808L13.8638 21.2031Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_1_5414)">
                          <rect
                            x="-0.288574"
                            y="-1.36328"
                            width="17.2014"
                            height="31.2559"
                            fill="url(#paint0_linear_1_5414)"
                          />
                        </g>
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_5414"
                          x1="8.31211"
                          y1="-1.36328"
                          x2="8.31211"
                          y2="25.2246"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFDE05" />
                          <stop offset="1" stopColor="#FF9D00" />
                        </linearGradient>
                        <clipPath id="clip0_1_5414">
                          <rect
                            width="26.2358"
                            height="25.1427"
                            fill="white"
                            transform="translate(0.103516 0.00512695)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="reviews-count">1,230 User Reviews</div>
                </div>
              </div>
            </div>

            {/* Nurses Trained Card */}
            <div className="nurses-card">
              <div className="nurses-card-bg">
                <div className="nurse-avatars">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a7475ec045441020e349ecda78bde25e94cc5e3?width=96"
                    alt="Nurse"
                    className="nurse-avatar"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/805401b2de7e2929016e623ce5fa63ba9d259fd9?width=96"
                    alt="Nurse"
                    className="nurse-avatar"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c6ccac1f997a007c07825dd19aae1a2bcc7c98f?width=96"
                    alt="Nurse"
                    className="nurse-avatar"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5da91116f73932c236ea12f2ee377c32b4aea1a4?width=96"
                    alt="Nurse"
                    className="nurse-avatar"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/163bd0e29a67322645f2217513c744946eedf1e8?width=96"
                    alt="Nurse"
                    className="nurse-avatar"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ef760da5e922f07eaed69af96017ef2dcb4afac?width=96"
                    alt="Nurse"
                    className="nurse-avatar"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8f835cf6d3bb6c581d732fab0863bf4e2c0b372?width=96"
                    alt="Nurse"
                    className="nurse-avatar"
                  />
                </div>
                <div className="nurses-content">
                  <div className="nurses-count">10,000+</div>
                  <div className="nurses-text">Nurses Trained Globally</div>
                </div>
              </div>
            </div>

            {/* Facebook Review Card */}
            <div className="review-card">
              <div className="card-inner"></div>
              <div className="card-content">
                <div className="card-inner-content">
                  <div className="platform-icon">
                    <svg
                      width="57"
                      height="56"
                      viewBox="0 0 57 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_5443)">
                        <path
                          d="M56.75 28C56.75 12.5361 44.2139 0 28.75 0C13.2861 0 0.75 12.5361 0.75 28C0.75 41.9755 10.9893 53.5594 24.375 55.6598V36.0938H17.2656V28H24.375V21.8313C24.375 14.8138 28.5553 10.9375 34.9511 10.9375C38.0145 10.9375 41.2188 11.4844 41.2188 11.4844V18.375H37.6881C34.2098 18.375 33.125 20.5334 33.125 22.7478V28H40.8906L39.6492 36.0938H33.125V55.6598C46.5107 53.5594 56.75 41.9757 56.75 28Z"
                          fill="#1877F2"
                        />
                        <path
                          d="M39.6492 36.0938L40.8906 28H33.125V22.7478C33.125 20.5332 34.2098 18.375 37.6881 18.375H41.2188V11.4844C41.2188 11.4844 38.0145 10.9375 34.9509 10.9375C28.5553 10.9375 24.375 14.8138 24.375 21.8313V28H17.2656V36.0938H24.375V55.6598C25.8223 55.8866 27.285 56.0003 28.75 56C30.215 56.0003 31.6777 55.8866 33.125 55.6598V36.0938H39.6492Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_5443">
                          <rect
                            width="56"
                            height="56"
                            fill="white"
                            transform="translate(0.75)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="platform-name">Facebook Review</div>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="star"
                        width="27"
                        height="26"
                        viewBox="0 0 27 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_5449)">
                          <path
                            d="M14.2338 21.2068C13.8381 20.967 13.3419 20.967 12.9461 21.2068L6.87685 24.8855C5.93613 25.4556 4.77318 24.612 5.02315 23.5408L6.63222 16.6452C6.73675 16.1972 6.58518 15.7282 6.23828 15.4261L0.895943 10.7737C0.068422 10.0531 0.513284 8.69191 1.60667 8.59906L8.64709 8.0012C9.10555 7.96227 9.50495 7.67313 9.68509 7.24975L12.4481 0.755909C12.8769 -0.251971 14.3055 -0.251969 14.7343 0.755911L17.4973 7.24975C17.6775 7.67313 18.0769 7.96227 18.5353 8.0012L25.5758 8.59906C26.6691 8.69191 27.114 10.0531 26.2865 10.7737L20.9442 15.4261C20.5972 15.7282 20.4457 16.1972 20.5502 16.6452L22.1594 23.5413C22.4093 24.6124 21.2465 25.456 20.3058 24.886L14.2338 21.2068Z"
                            fill="url(#paint0_linear_1_5449)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_5449"
                            x1="13.5912"
                            y1="-6.8245e-07"
                            x2="13.5912"
                            y2="21.3255"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFDE05" />
                            <stop offset="1" stopColor="#FF9D00" />
                          </linearGradient>
                          <clipPath id="clip0_1_5449">
                            <rect
                              width="26.2469"
                              height="25.1531"
                              fill="white"
                              transform="translate(0.467773)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <div className="reviews-count">1,230 User Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="awards col-12 d-flex flex-column align-items-center">
          <h3 className="awards-title">Recent Awards & Certifications</h3>
          <div className="awards-logos-container w-100">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/386eb65cc8947da4584564e09661b2eaeab239b9?width=266"
                  alt="REC Award"
                  className="award-logo"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2c29d5f355450229f19a46303e204f96ab0733d?width=606"
                  alt="HealthTrust Europe"
                  className="award-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
