import React from 'react'

export default function Bio() {
    return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
          <title>About us</title>
          <link rel="stylesheet" href="assets/bootstrap/css/main.bootstrap.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="assets/fonts/fontawesome5-overrides.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css" />
          <link rel="stylesheet" href="assets/css/main.css" />
          <h1 className="text-center text-white d-none d-lg-block site-heading"><span className="text-primary site-heading-upper mb-3"><strong>PLATFORM TO DEPICT YOUR CREATIVITY</strong><br /></span><span className="site-heading-lower">Artx</span></h1>
          <nav className="navbar navbar-dark navbar-expand-lg sticky-top bg-dark py-lg-4" id="mainNav" style={{color: 'var(--bs-white)'}}>
            <div className="container"><a className="navbar-brand text-uppercase d-lg-none text-expanded" href="#">ARTX</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarResponsive"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="about">About us</a></li>
                  <li className="nav-item"><a className="nav-link" href="products">Products</a></li>
                  <li className="nav-item" style={{marginRight: 20}}><i className="fa fa-search" style={{color: 'var(--bs-gray-300)', marginRight: '15px', paddingRight: 0}} /><input type="search" id="search-field" className="search-field" name="search" style={{color: 'var(--bs-white)', background: 'var(--bs-gray-dark)', marginLeft: 20, borderStyle: 'none', borderColor: 'var(--bs-gray-600)', borderTopStyle: 'none', borderBottomStyle: 'solid'}} /></li>
                </ul>
              </div>
            </div>
          </nav>
          <section className="page-section about-heading">
            <div className="container"><img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="assets/img/3124541.png" style={{transform: 'scale(0.85)'}} />
              <div className="about-heading-content">
                <div className="row">
                  <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="bg-faded rounded p-5">
                      <h2 className="section-heading mb-4"><span className="section-heading-upper">Feel the beauty of art!</span><span className="section-heading-lower">&nbsp;About Artx</span></h2>
                      <p>Founded in 2021 by the Parnav Harinathan, Rishit Desai and Samarth Borade, in the era of the pandemic of Corona virus(COVID-19) .In this era there was a spike in art based accounts on the social media platforms like 'Instagram'. We are dedicated to help those artistic users to show their creativity through paintings , murals , canvas , etc.&nbsp; to the world via this platform.</p>
                      <p className="mb-0"><span>We hope you enjoy the art and show some love to the artists.</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="text-center footer text-faded py-5" style={{background: 'rgba(0,0,0,0.15)'}}>
            <div className="social-icons" style={{color: 'var(--bs-purple)', background: 'rgba(0,0,0,0)'}}><a href="#" /><a href="https://www.facebook.com/profile.php?id=100071450851447" target="_blank"><i className="fab fa-facebook-f" style={{background: 'rgba(255,255,255,0)', color: '#ed1b0d'}} /></a><a href="#" /><a href="https://www.instagram.com/artx_619/?hl=en" target="_blank"><i className="fab fa-instagram" style={{background: 'rgba(255,255,255,0)', color: '#fc1406'}} /></a></div>
            <div className="container">
              <p className="m-0 small" style={{background: 'rgba(255,255,255,0.16)', color: 'rgb(255,255,255)'}}>Copyright&nbsp;©&nbsp;Artx2021</p>
            </div>
          </footer>
        </div>
    );
}