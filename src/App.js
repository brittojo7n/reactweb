import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const App = () => {
  return (
    <>
      <h1 className="text-capitalize text-center">Computer Hardware Store</h1>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Hardware Store</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Hard Drives</a></li>
                  <li><a className="dropdown-item" href="#">SSDs</a></li>
                  <li><a className="dropdown-item" href="#">RAM</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">More Categories</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search Products" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col">
            <br></br>
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://rukminim2.flixcart.com/image/850/1000/kgzg8sw0/internal-hard-drive/p/g/z/wd-1-tb-hard-disk-original-imafx3kdtz2fckp8.jpeg?q=90&crop=false" className="card-img-top" alt="Hard Drive" height="250px" />
              <div className="card-body">
                <h5 className="card-title">1TB Hard Drive</h5>
                <p className="card-text">Reliable storage solution with 7200 RPM for fast read/write speeds. $50</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
          <div className="col">
          <br></br>
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://www.crucial.in/content/dam/crucial/ssd-products/t700/images/web/crucial-T700-ssd-dual-dynamic-hero-image.psd.transform/small-png/img.png" className="card-img-top" alt="SSD" height="250px" />
              <div className="card-body">
                <h5 className="card-title">500GB SSD</h5>
                <p className="card-text">High-speed SSD with fast data transfer rates and durability. $70</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
          <div className="col">
          <br></br>
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/da1af1ee70f13e7ed3b1ef66090d5cfa/large.jpg" className="card-img-top" alt="RAM" height="250px" />
              <div className="card-body">
                <h5 className="card-title">16GB DDR4 RAM</h5>
                <p className="card-text">High-performance memory module for enhanced multitasking. $80</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
