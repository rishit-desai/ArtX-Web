import React from 'react'

export default function Bio() {

    return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
          <title>Bio</title>
          <link rel="stylesheet" href="assets/bootstrap/css/bio.bootstrap.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase" id="mainNav">
            <div className="container"><a className="navbar-brand" href="#page-top">Artx</a><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" className="navbar-toggler text-white bg-primary navbar-toggler-right text-uppercase rounded" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">home</a></li>
                  <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                  <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <header className="text-center text-white bg-primary masthead">
            <div className="container"><img className="img-fluid d-block mx-auto mb-5" src="assets/img/profile.png" />
              <h1>JOE MAMA</h1>
              <hr className="star-light" />
              <h2 className="font-weight-light mb-0">&nbsp;Graphic Artist - Canvas</h2>
            </div>
          </header>
          <section id="portfolio" className="portfolio">
            <div className="container">
              <h2 className="text-uppercase text-center text-secondary">arts</h2>
              <hr className="star-dark mb-5" />
              <div className="row">
                <div className="col-md-6 col-lg-4"><a className="d-block mx-auto portfolio-item" href="#portfolio-modal-1" data-bs-toggle="modal">
                    <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                      <div className="text-center text-white my-auto portfolio-item-caption-content w-100"><i className="fa fa-search-plus fa-3x" /></div>
                    </div><img className="img-fluid" src="assets/img/portfolio/cabin.png" />
                  </a></div>
                <div className="col-md-6 col-lg-4"><a className="d-block mx-auto portfolio-item" href="#portfolio-modal-2" data-bs-toggle="modal">
                    <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                      <div className="text-center text-white my-auto portfolio-item-caption-content w-100"><i className="fa fa-search-plus fa-3x" /></div>
                    </div><img className="img-fluid" src="assets/img/portfolio/cake.png" />
                  </a></div>
                <div className="col-md-6 col-lg-4"><a className="d-block mx-auto portfolio-item" href="#portfolio-modal-3" data-bs-toggle="modal">
                    <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                      <div className="text-center text-white my-auto portfolio-item-caption-content w-100"><i className="fa fa-search-plus fa-3x" /></div>
                    </div><img className="img-fluid" src="assets/img/portfolio/circus.png" />
                  </a></div>
                <div className="col-md-6 col-lg-4 offset-lg-0"><a className="d-block mx-auto portfolio-item" href="#portfolio-modal-4" data-bs-toggle="modal">
                    <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                      <div className="text-center text-white my-auto portfolio-item-caption-content w-100"><i className="fa fa-search-plus fa-3x" /></div>
                    </div><img className="img-fluid" src="assets/img/portfolio/game.png" />
                  </a></div>
                <div className="col-md-6 col-lg-4"><a className="d-block mx-auto portfolio-item" href="#portfolio-modal-5" data-bs-toggle="modal">
                    <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                      <div className="text-center text-white my-auto portfolio-item-caption-content w-100"><i className="fa fa-search-plus fa-3x" /></div>
                    </div><img className="img-fluid" src="assets/img/portfolio/safe.png" />
                  </a></div>
                <div className="col-md-6 col-lg-4"><a className="d-block mx-auto portfolio-item" href="#portfolio-modal-6" data-bs-toggle="modal">
                    <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                      <div className="text-center text-white my-auto portfolio-item-caption-content w-100"><i className="fa fa-search-plus fa-3x" /></div>
                    </div><img className="img-fluid" src="assets/img/portfolio/submarine.png" />
                  </a></div>
              </div>
            </div>
          </section>
          <section id="contact">
            <div className="container">
              <h2 className="text-uppercase text-center text-secondary mb-0">Contact Me</h2>
              <hr className="star-dark mb-5" />
              <div className="row" style={{marginBottom: '20px'}}>
                <div className="col-lg-8 mx-auto">
                  <form id="contactForm" name="sentMessage" noValidate="novalidate">
                    <div className="control-group">
                      <div className="mb-0 form-floating controls pb-2"><input className="form-control" type="text" id="name" required placeholder="Name" name="name" /><label className="form-label">Name</label><small className="form-text text-danger help-block" /></div>
                    </div>
                    <div className="control-group">
                      <div className="mb-0 form-floating controls pb-2"><input className="form-control" type="email" id="email" required placeholder="Email Address" name="email" /><label className="form-label">Email Address</label><small className="form-text text-danger help-block" /></div>
                    </div>
                    <div className="control-group">
                      <div className="mb-0 form-floating controls pb-2"><input className="form-control" type="tel" id="phone" required placeholder="Phone Number" name="phone" /><label className="form-label">Phone Number</label><small className="form-text text-danger help-block" /></div>
                    </div>
                    <div className="control-group">
                      <div className="mb-5 form-floating controls pb-2"><textarea className="form-control" id="message" required placeholder="Message" style={{height: '150px'}} defaultValue={""} /><label className="form-label">Message</label><small className="form-text text-danger help-block" /></div>
                    </div><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit" style={{background: 'rgb(255,209,91)'}}>Send</button>
                    <div id="success" />
                    <div />
                  </form>
                </div>
              </div>
            </div>
            <section className="text-white bg-primary mb-0" id="about">
              <div className="container">
                <h2 className="text-uppercase text-center text-white">About</h2>
                <hr className="star-light mb-5" />
                <div className="row">
                  <div className="col-lg-10 ms-auto">
                    <p className="lead">LOVES TO PAINT IN FREE TIME...................................................................................call me</p>
                  </div>
                </div>
                <div className="text-center mt-4"><a className="btn btn-outline-light btn-xl" role="button" href="#"><span>call me!</span></a></div>
              </div>
            </section>
          </section>
          <footer className="text-center footer" />
          <div className="text-center text-white copyright py-4">
            <div className="container"><small>Copyright © ArtX2021</small></div>
          </div>
          <div className="d-lg-none scroll-to-top position-fixed rounded"><a className="text-center d-block rounded text-white" href="#page-top"><i className="fa fa-chevron-up" /></a></div>
          <div className="modal text-center" role="dialog" tabIndex={-1} id="portfolio-modal-1">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header"><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /></div>
                <div className="modal-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col-lg-8 mx-auto">
                        <h2 className="text-uppercase text-secondary mb-0">Project Name</h2>
                        <hr className="star-dark mb-5" /><img className="img-fluid mb-5" src="assets/img/portfolio/cabin.png" />
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer pb-5"><a className="btn btn-primary btn-lg mx-auto rounded-pill portfolio-modal-dismiss" role="button" data-bs-dismiss="modal"><i className="fa fa-close" />&nbsp;Close Project</a></div>
              </div>
            </div>
          </div>
          <div className="modal text-center" role="dialog" tabIndex={-1} id="portfolio-modal-2">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header"><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /></div>
                <div className="modal-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col-lg-8 mx-auto">
                        <h2 className="text-uppercase text-secondary mb-0">Project Name</h2>
                        <hr className="star-dark mb-5" /><img className="img-fluid mb-5" src="assets/img/portfolio/cake.png" />
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer pb-5"><a className="btn btn-primary btn-lg mx-auto rounded-pill portfolio-modal-dismiss" role="button" data-bs-dismiss="modal"><i className="fa fa-close" />&nbsp;Close Project</a></div>
              </div>
            </div>
          </div>
          <div className="modal text-center" role="dialog" tabIndex={-1} id="portfolio-modal-3">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header"><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /></div>
                <div className="modal-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col-lg-8 mx-auto">
                        <h2 className="text-uppercase text-secondary mb-0">Project Name</h2>
                        <hr className="star-dark mb-5" /><img className="img-fluid mb-5" src="assets/img/portfolio/circus.png" />
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer pb-5"><a className="btn btn-primary btn-lg mx-auto rounded-pill portfolio-modal-dismiss" role="button" data-bs-dismiss="modal"><i className="fa fa-close" />&nbsp;Close Project</a></div>
              </div>
            </div>
          </div>
          <div className="modal text-center" role="dialog" tabIndex={-1} id="portfolio-modal-4">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header"><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /></div>
                <div className="modal-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col-lg-8 mx-auto">
                        <h2 className="text-uppercase text-secondary mb-0">Project Name</h2>
                        <hr className="star-dark mb-5" /><img className="img-fluid mb-5" src="assets/img/portfolio/game.png" />
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer pb-5"><a className="btn btn-primary btn-lg mx-auto rounded-pill portfolio-modal-dismiss" role="button" data-bs-dismiss="modal"><i className="fa fa-close" />&nbsp;Close Project</a></div>
              </div>
            </div>
          </div>
          <div className="modal text-center" role="dialog" tabIndex={-1} id="portfolio-modal-5">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header"><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /></div>
                <div className="modal-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col-lg-8 mx-auto">
                        <h2 className="text-uppercase text-secondary mb-0">Project Name</h2>
                        <hr className="star-dark mb-5" /><img className="img-fluid mb-5" src="assets/img/portfolio/safe.png" />
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer pb-5"><a className="btn btn-primary btn-lg mx-auto rounded-pill portfolio-modal-dismiss" role="button" data-bs-dismiss="modal"><i className="fa fa-close" />&nbsp;Close Project</a></div>
              </div>
            </div>
          </div>
          <div className="modal text-center" role="dialog" tabIndex={-1} id="portfolio-modal-6">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header"><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /></div>
                <div className="modal-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col-lg-8 mx-auto">
                        <h2 className="text-uppercase text-secondary mb-0">Project Name</h2>
                        <hr className="star-dark mb-5" /><img className="img-fluid mb-5" src="assets/img/portfolio/submarine.png" />
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer pb-5"><a className="btn btn-primary btn-lg mx-auto rounded-pill portfolio-modal-dismiss" role="button" data-bs-dismiss="modal"><i className="fa fa-close" />&nbsp;Close Project</a></div>
              </div>
            </div>
          </div>
        </div>
    );
}