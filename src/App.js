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
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBEQEBIQFhUVFRYVFRYXFRUYFhUVFRUXFxUYFhcYHSggGBolGxUVITEhJSkrMC4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0mICUtLzcrLzUyLS0uNy0tLzAtLy8tMC0tLS02Ly0tLS8tKzIuLS0vLS0tLS0tMi0tLS0vK//AABEIALoBDwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYDBwj/xAA/EAACAQMCBAQDBgQEBgIDAAABAgMABBESIQUxQVEGEyJhMnGBI0JSYpGhBxRywTOCsdEkQ1OS4fDS8TRUsv/EABoBAQADAQEBAAAAAAAAAAAAAAABBAUCAwb/xAAvEQACAQMBBgQGAgMAAAAAAAAAAQIDESEEBRIiMUFRYYGh0TJxkcHh8BPxFDOx/9oADAMBAAIRAxEAPwD3GiiigCiiigCiiigCiiigCiiigCiikoBaKSigCikzRmgFozTc0maAdmkzSZpM0A7NGaZqo1UA/NLTM0uaAdRTc0tALRSUtALRSUUAtFFFAFFFFALRRRQBRRRQBRRSUAtFJRQBRRSZoBaTNIWppagH5pCa4vKACSQANyTyA96xXiH+KPDLbIWUzuNtMOGGc43kzo59iT7UBuS1QOK8ZtrZNdzNFEvQuwBPso5sfYZrw3jv8WeIz5W3VLZNWDp9UmOp8xhjtyUH3rGNNLPJkmWaRtsks7se2o5LfvQHsnHf4wwLlbKF5T/1JMxx/ML8bfI6ayN9/FbibqFDwRHvHF6j9JC/7VWcP8C3jo0swMSKQGUDVNuAR6MjTsQcsUGN84qwtI+G25SGKBry4cFGUMG9ZXmjpqRhucYDMCpye4goJuM3ksq3EstwXU6kkZj6SOfl4Pp+Qxz+lex+D/4hxXeIZgYpgmpj/wAp9I9TK33e+lvoTg155xe4sYLaOzETyyeYZpcXCt5LlAnliZYtLnCjUAuAV5nFZK/vLZRsHX2aRZM/pGtSD6iWT3rqrV88eEvF/FbaAm3tw1nGTIzTeZ8GN1jbV6V22CKQCcnma9q8LcbN5bJcGCeEttolXDbY3X8SnOxwM9qi5JoAadmuSU/NAPFLTNVKDQD80U3NLQC0tNpaAWiiigFooooBaKKSgFpKKKAKKTNJmgFzSZpCaYz0A8tTC9VfGePWtquu5mjjHTUwBb+lebfQGvOOP/xljGVsYGkPSSXKJ8wg9TfUrQHovH/ElpZIHupljBzpG5d8c9KKCzdOQ615l4i/jQcMthbZ6CSbrvjIiQ8vct9K8041xWe8ne4uG1O2PZVA5Ki/dUdvcnmSaiBaAncf8RXt4W/m7mR1JGlM4Qb52jXC57HGaj8O4VNOziCJ3YLrYAFm0rgZCjfqP1riuByH+/61Isb+WGRZYXZHXOGXmMgg/sTQFyPD8EUBmu5mLB9DQxNA8kTHJUupkAIIU7DcbZqc/ilLcSw2MSeWY40SVkUTF1HrkkBBD5JYaD6RhSB3x5YAZOAP0rlFcNI4jgjeRzyCgn9hvQFpc38shYyySPrIL5Y4Yr8ORy2Gw226Vxk48UUxRHSG9LLH8T+zv8TA/hzp9qmxeFHGDxCcQg7iCP7Sdh/SucDluc++K0vBuHeXtZW6wDG80mmS43G+5ykfTlqHsK53r/Dkm1uZk4+A3roJJtNrEdgZNpGzyCJ8RPLbatJ4f8Jx5RooSzYyZbkat9jlIBjbnu5BHvV7bWkEcvrbzJypbLMWcqCM+pt9OSNhtvtVg8xIxyHYbD69/rVyloalTMsIrVNXCHLJOtkt4mWSUtcSqcqWIIQjONCgaIyASMque5NWUvimT/loiju2WP8AYD96zIlycICx/b/z9KsbTgMkgDSsFUjI22x0zjYDbqc+1XlptPSXF++RU/nrVHgfD4gm1iQTMxB3Gr0nfcEDYDbtWv4d4ghnbQrgSAZMbbNjbJUH41GR6hkd8Hasnb8J+xdvs1KsuPtI8HOxViDgEbEZ7muKI8ZDqVyM4KujEZBBxgnGxNRVo06y4Wk0TTqzpviu0z0ZHrqrV5raeLTYxSvfzmWJdPlHQPPJJwUY5CydMHAPPJNbHgHiG1vI/NtZkkXrg+pT2dTup+YrLqU5U3aRfhOM1dF4DTs1xRq6CuDseDS5pmaXNAPopoNKKAdS00UtALRSUmaAWkJppaqDxR4vsrBNVzKAxGViX1Sv/SnQe5wPegL8msz4i8ecOssrNcKZB/yo/tJM9iq/B/mIrxrxr/Ey6v1MMSm3h1Zwjv5rgAjEjggFSDnQBjI5msImOQH6cv8AagPYrv8Ajh6iIrElOhefSx+arGwH/cazvHv4r8RuPTBptlxvo9ch7/aMNh8gD71iLS2eRtKI7tjOlQWIHcgDYe9XnCvDE0lxDBLmJZYfPWQKJEWNkYxu7KcKhK4yTtmgKOeRnZpJXZmPxOzFmPzZjk12S0fyfPC/Z6tAfIwz4yVXfLEA5OBt1xkVq34rwu1XTbRPJI0KlZtStJDI6YYaz8MqtnDRYXcbNWb4rxu4uVhE7BzCrKrY9ZDtqOs/eOcb+3XnQELVSZrhLcqvM79hzqZw7g95cjVGgjj5+ZIdK475O5HyBqG0uYOEkyr8RApbCC5uW02sLv3bGFHzJ2H1NX/DuBWUZyA97J3+C3B6erfX9NQ9q1EHCbmZMSMI4VH+HGPKiVR3x6m7YJwe1RdvkicLmZO28MQI3/GTNPIP+Rb7gHs8hwF6bbHtmtJY8IY4MUcdqoGkeUzByD/1JcjX+mQeR61bWlnDGoEajA5bYH0Wm3CymVG1gRKjh1PVjp0Ebch6uvUVepbPnLMypU1sViBwtre1hdIx6pJdTDOfWUA1Fm5sdxuTmi2up5hBIV8qNkcyRtsyscCPGw/N26UWFlHEkSRrq8pSqO4GoBviwcdcDlirfh3D/OYrrAYDIDA+rHxaQOoG+OZrQhRhSV+X6uvt0Kc6s6jsVVlZoixAZdo08sSNz0nBPzzgfpV9acEZl1ysAoAbGVyFb4WIzhVOOZyfanG7iWMLEPUDhi0aMJBuckNnSR7c/wDSNdXTSOznYsADpyBgADGM8thtXdpyxHCOLxWXllml7bRiRI0fppdTpY/iBY7hemw5dOtRXkMmNZCRg5A3Pt6QTlj9cfKq93ABJIAHMnYVmeIeMVL+RZRtcSnYaQSv6jn9NveuZKnRW9J/XJ1FzqYSNnxDiSiMLtHCm/qI3PVnPU/6VjbnxY8zmDhsLTyfixiNfck9PckD3ri3huSRll4zcMM7paQ7u246LyG+CRyz8QrW8J4ZLIgigjFrB+CM4kbbH2ko3B/pOdvjNZtTXt8NFY7l2GkXOo/IzcPhEySauIzNdXAHptojiOLPIyvsFHI9M6TjXyrd+DvAcNvcC+bIm06VRHbyo10aSN8GT5sAOWFGBSx3FrZroiVXcZ2XAUE7kk988+Z71W3fG7iQnVIQD91fSuO2396zp1kndu7NnT7OqVFhbqPQr3i8EA+0cZ/CN2/Tp8zgU3hfH4JyVQsGGTpYYJAOMjG3UV5VNdKuwGT+Ec/r2rvYXUgZZACjLuN9/wD6ry/yHfwLz2VBQavxHr3m09WrH8C8Tl9a3Qij0Lq83WFRlA9WQxyhG55kYGcjkNPb3CsqujKysMqykEEHkQRsRVpSTV0YtSnKnLdkrMmg04VxVq6rUnA8UtIKWgGk1zZ6Y8mKr7viKr7mgK3+IF7LHw27eFJXcRnHluUdQebqw39I3IG5ANfMIlDEtnJY5JLZYk9WOMk19IcR4jI2QDge1eLeMvB8UTSXSyGOI7lFQsQ7HkoBACk45nbOO1AZgMDsf03/APTT81DtbjI0uR7c96lEgDc4+dAaIeJ3Syt7aBRE6M5klAT7QFsxncHDrnGvZthg1T3PE7iSNYXlmaNPhRnYxrvnZScbVAWUuQkas7fL+wqenBGyDdSac8o09Tt8lGf2zUNpEpXID3IBwMsTsAO9SU4ZO41SlYU/Nsd+mOefY4rWcH4NIMfy8KxdNbjXKfkM4X6k/Kr+x8Owo2uViz9WPqf39l+Qx8qmEJ1HaKIlKMFeTMtwLhaJvDb+Y3SWcHAPdY+Z+un51r7PwvPcENcuzjnhto167Rjbbucn3q9tp7aJT5cbFumrGM59iajXV7JJ8bbfhGy/p1+uat0tn1JPix8ytU1kIrGTtFBaQbKPNYdvhH15fpmuV3fPINJwF/AowNuWepqKSKMmtOlpKdPNrsoVNTOfghc0h3oApRVkrgBS0VnuOeL7a3yoPmSfhU7A/mbp/rXM5xgrydjuMZSdoo0ROOdZvi3jGGNvKgBnlJwFTJGe2RzPsM1US2V/eYa8kFrbnJIPp9I7gkH/ALiPlVrwjhEHl+VaW25wTcSahKCOsWMMp575Ucjhgayq2078NJeZoUtDbNT6EZ/D11cKJ+L3H8tDn0wr8bHmFCDPq5HGGb2rRcHtyF8nhsAt4z8UrANO/PffIXv6tR35LVjb8BjjPn3khZyManJZyPwr2H5VAFR+JeK0Ty44BoSR/KDDBOrB2JzheRG2TmsmpO7vUd32NbT6WU1wKy7/AL9iwt+GW1plpSXlbcjJZ2PQuxOT82NQ5vELXCfZMFiyVwud9JKkE8zuD7VmkSeUq8h8torhznfEkY1DOM9QeZ7E1KtkVAywrszM5OSRqY5Yj/YbVXqVW8G3pNDCm95q/i/sia8gUZJxSRLLKdMatyJwBliBzPsKs+GeHHbS82sBs4GMuwHPAPpjUd2x9atnu7NIpIVLAK4GY+c6gc2blzyDnbbYbjHEafWWD3qapX3aau/DoR7Tw3GiMZXAJTUrBlEYJGV9bH7Qn22G+9doeFqbVy0sGY2BVwzFVDYDIxC8snIxnc+9Vks73DBFUKoOoLklUGACzO2/IDJP6b13vr5REttCcoDqd+XmP3A6KOnyHau7x7Hh/HWbScs3v8l+eX6zjJa45SQt8nx//YFcuDcQj4d58wBEZUlo/MKwhhvrVACAx2BwN6oeOeI4LUeo6n6IOf17Cq7hnh294l/xF85trQeoDIUso6gNyH529sA0hdcSwjjWVaUY7k+J9vd9D0bwZ/FaxvNMcxFtMdtLt9m55eiTYfRsHoM16NG1eXWv8PrK7SGPyXjtom1AB5FaY43LITsD1c+s4wNIwT6haQKiKiAKqqFVRyCqMAD2AFXYu6ufPs7iloFFSQZ65mY1XSxVZulcJEoCmnjqrvrRXVkZQVYEEEZBB5g1opos1BlhoDwvx3wYwSxKkUUcJ2jdQQcnGoSuSSSMZyen1qv4HwtJZHVhLMVIx5QJRu+XIGn5nHzr3S94GlwpjkjDqcZB5bbg1Ns/DsUSfCqIoJ0quAABk7AUtfAvY844b4ZnICgLCn4Ixlz/AFSEY/QE/mq9h4Fb2o9ekO3Jd2kc9NTbnHuavbrjKhdNuun85Azj2HT5n9KpSPiY5J3LE7k/M8zV/T7PbzPH/SlW1qWI5OplOMDCjsP7nma55rh5rHlsP3/8U+zsPMkVAAWY4BY/3NaqUYLhVkZ73pvLuzpqFdrW0klYKg559hsMnfqcb451LitoInQTHUM4cbggEcwo3GDg+rBP4aI75YVKRMXOtXDkaVVl6qDuSRsc426VxKrJrgXsdqml8T9zpNwxYoxIweTJGwBQAEZ1BsH5YYA+1ReJzK0n2ZOhVVUBGMADl885yetQVnV2cgqSGIfGNmO5BA5Hfl71A4vxy3thmVxnog3Y/T+5oo7vHOXsQ3vcMUWYqm414ltrbIdtT/gXdvr0H1qhS94lxE6bVDDDyMh223z6+vLkvKp3DOCWNq3pU3lyDuTjyo2/MTkKQf6m9hVDUbTjF7tJXZco6FvM8EOCHifEhna2tjuWORle45F/2X3q04PY2dqQLGL+Ym//AGJP8NT3jxz5/cHsWq+g4Hc3ZDXTZTORGAREN8j083PuxPcAVp4LCC2TU2kAfeP/AL+1Zc3Oq96ozQhGMeGCM1a+HHkYXF7JkjcFsBU/oXkvbO5PUmpk3GI4hotVH9ZH+gPP6/pVZxjiTzzMcny1JEY5Ajlqx3Pv0NRBVOpXfwwwj6DR7Likp1cvt7lavE7i68icat5HEyswJCrqUZPsQDgd/aultZRxAp8f2rSqCAdDMTjT2xk789zUlgeS7Drj/QdqeiAcq8XK5owpJWvl/wBcl5DktpHxlWOThQASC3YfiNaSfhcFssbSpM4yMujIAGGCY3U50kb9d+/av4Xxh4Uki3KOp2DFSjEY1Kw5e461ADHGMnGc46Z74710nFLxPOUKk5Wbsl6+1i34lxh2e4VGLRysDhlxyxjAzscAD3xVWKaKqeN+IYbYYY6n6IOf17CovKbO0qdCHZFzLdBEOpgqDds7Dbqe9ZC/8TTXEn8tw5GZjtrx+4zso9zTuEeHr7irLLcMYLXOQeWpef2an4th8Z254zjFbngvBEBEPDUCRDGZyAxkO/qUn4z6j6j6dhgMOXtCmr25v0MbU7RcsUsLv1ZU+HfBUFoyy3f/ABV22GWMbqh7nVzwQfW2BywM4z6NwvgUkrLLdEEjdYxnQh77/E35j9AuSKn8E4BHCCcZZjlmO7MeWSTuTyH0Aq/jTFWYwtl5ZkuVxsMQAwK7gUgFOr0ORaKKKApytcmjqXopfLoCvMGaFsAdzVjornLKBQHJYVXkKpvE7FraaKOZoZGQhJFwSrdPp0PXBOMGu97xA8lqkuQWyTQHmnDuPYzBeSiGeM6WDYCvjk4YjG4/8VcLcAbnWwPJgQQR7dKTxb4Tju9JzodTjWBnKZ3Ujr7dvrWBs+OrZztDGZZLfOGWQaXVuTFR0OehAzyPetGjrXhT+pRq6Rc4/Q9HRgw1Icj96fDPh0IOG1Ar8xuP9KqOE3sUjrJC+pCSGwDkEA7Mp3B5VIuNEZM80gQDJ3I69P36VoqacblJxs7E7+eEryHOW1b7YBJOScD61X398kUaPdSCMhi2lGJ1gZ0qdst0JAwMjtzztx4pmmbyOGwkk/fIGfnvsvzaulv4XijYTcSmaWVtxCpZi2//AHMBnpgDqcVQr7QhTW7HL9C3S0cpZlhepzPHby8YxcOhKJn1SEAYydyW+FTuT1JqXZ+GrS2bVds13cncxL6gCerZI293IB7Z5aC0tbmcCOJf5eEbBI8ByPdxtH8k3/Nzq+tODWtmgMpUddI3LE8zjmx7k1l1atSrmo7I0aNGMXu01dlRb8Ou7vCviOLkIoyQuNtnfAL8uQCjpg4rU8K8PwwKNl9I7AAAdhyArgnii3BCqj4yBnAGBnc4G9Z7ivFpZ2IZvRnZRsuM7EjqfnVd1qcFwmjR2ZXqStNWRoOJeJo0ykADn8X3B/8AL6be9Za7u5JW1SMWPTPIfIchXGk1dqqTqynzN7T6Olp1wrPfqOJpNzSAU6uCyKBSikFKKAcKbNMqKWdgqjcknAFVfGuPw2wwx1P0Qc/r2FZ+04XfcTZZJCY7csQDg6dgSdC/fOx35e9esKbau8Io6rXQo8KzLt7km+8RzXEn8tw9HZjn1BSWOB90dB7mrfwb4XskRbu8kFxMTgQYJKybZV429TOMjOrCjOTtvWo8NWMVvH5HD41ZztLO3qGRt6mGDIQc+lcAb5IO1bTgvhxUPmSeuQganYDU2N9yANtzgDYdKswhdWWF6s+er6mdWV5u/h0RV2nB5rohrgaYwcrCDtjp5h++fb4R2JGqtjZWKoAFAFSIYQKkKte8YqKsis3fmIiU8ClApa6ICiiloAooooCJppGOKHeo8jUA2aaq+ck1LZa5slAVskNRJoat3So0sdAUc0VYfxV4btvtbxoHlcJkxq2kOR9443yB+w5E16LPDUCeDNAfP3B+I3MRl/ldfqHqwushQcg8umTvjqasbfh5lCXF3OXD50qGLMT+H2OfuqO1bPiX8PHe4ZraYxRS/wCKi6s57KBsVOTseW/Tatd4a8B29uAUTfG7tu5779OQ2GBUylJx3b4ISine2TI8C4VcEBIU8hO+kGQ56gHZfm2T7CtlwjwpFCGkk541OzEljgc3c7nA/StFP5FrGXchQP1J6ADqfasFx3i8102CWjiB2jB3OOr9z+w/evCc40vmXdNpKmoeOXctr3xIFGi1UAfjI3/yr0+Z/Ss/LIzMWYkk8yTkmudcXmP3Bn3PL6d6oTnKbyfT0dPS08bQXuSBSE1zQt1I+gqbLw2VYfOK4XWYzn4lYDOGXmv1/uK5SPV1ErXxc52lrJK2iNSx54HQdyeQHuavOH8EiWeBLiXDMVYJoDRyKc6QsoYjDEY3Ht1FTzNBFb+kBY5kE0SuGYebGArxSAbuhyCCds5Pas7xLiTTnU6RhupUNk9h6mOAOwxXs1GHPLKKqVdQ2o8Mcq/X972+pxvWYyyFwA2psgYwDnkMbYHIfKuQpBVdxjjcNuPWct0Qcz8+wrxScnguylGnC8nZIsZJFVSzEADck7AVk+J+J5JXFvYqzMx0hgMsx/IP7ntXKw4bf8WfP+HADuxyIxjnj/qN+3civQuB8MtrLMFjH5s59MkhPwnGftH+70PlrvuMgc6sRgouzy+3uYeq2lKeKeF36+Rn/D3gKKAC64owZtiIt2GrnhsZMr/lXP8AmzW5t+Ey3hXWpigXZYwcMwxj7QrsBjbQpxjmTkirTgvho6hNcMZJMHcjAUE5KovJF5e5wMljvWut7YAYAqzGlnenl+hjufRELhnCkiUKigADGwq1SOnKldAK9jgQCnUUtAFFFLQBRRRQBS0UUBWtTCK64ppFAciKYVrsRTStARmWuLx1NKUnlUBVyQZrnHw8mrlYBXTTigK+CwVelR+O3y29vLMzxpoQkFzhdWPSDuOZwMe9WU8oUb1kfFRS5hkt3XMbjB/1BHYggEH2oSnZ3Mdd8Rlm9UkjPk5AJ9IONtKjYbHpUYuOpArLec1jIbW71FBvDIM4Kdj8u2+OXLFWtpeQuNUBR8c+hGeWRzFZlSlJPJ9bptXSnBbll4dfoTmGScnbOw9un1roKjxXCsdJBU12II515lhNczScBSIW8sw1CWJgXKhS/lEYHllto985bBIAOKiQ8ddDKEji0Saco4Mg1LuHyx9T8sk88DbaqZZ8B8Mfh9QB5jng99x+1c4pi6EpgNvjPIc8Zx05V6bzsrYK/wDDBylvZvy8vzyJt3es7hpXy7nALHc4BOAPYZ2HKo0E5Ks0i6ACeZHwjkx7Z7VW8QvobdY3uGV5VB0kAaiT8RUfdBxzrNSzXd+TgaIQQD+AfM/fb2qY0nLPTueWo1sKCt16RX37eRY8Z8WEnyrQFmO2vGd/yDr86m+HvBo//K4ieXq0M23t5h5n+kfvutcfD/DApaO3QySnA1bekZ5sT8Cn6k45HcV6twLwqzMst0dbDdRjCJtj0L3x945O55DarMab5Qwu/Uwa+qnWe9UfyXQreH2E90FRA0MAAAABjdh0AUf4S4/zb/dI33HBeBRQIFRQAOwxVja2iqMAVNRK9oQUVZFVtvmMjiruq0oFOArsgAKWiloAopaKAKKKKAKWiigCiiigIFJin4oxQHPFGmuuml00ByCUoWumKazUA01DubgAU6eWq+YE0BBu5yx9qrpo81bPDUaWGgMZ4p8PpdQmNtiN0bG6t/seRH/ivOOK8EPDkjlFwvn53Toynngcyu3M4B9jXts0VYvx14XF3HrQATIPQfxDnob2547E+5qGrkxk4u65mb4ZxKO5TIwrj4k/uvcVZW8rGNwTkrjHfBIrF8Z8Lz2kUc7umdW4U4KHmuD94/Ll786srLxREsIaQM0vJgORI5MTy3/3qpUoNfCbuk2gpf7HZ259/wAmgt4CNTMQARvntVFxfxSqfZWoBPLXjYH8o6n3qsueJ3V6fLUBY+oGdP8Ambr8v2q04VwVY2VVVpJW5ADc4546Ku49R7jfpSNK2Zc+x46jaON2jhd+vkVlrw0Z8+8LuTk+WDufd3+6MdB7cq2/AuDXd7oGgW9uOQVfUw/LkYUfmI+WdjWj8MeBixWS5AJGCEHwKRuDv8bZ6nl0Ar0mysFQYAqwoXzIyXIp/D3hmG3QKigdfcnqSTuT7netJFDiuiR11C16HI1VroBQBTsUAgFLS0UAUtFFAFFFFAFLSUtAFFFFAFFFFARcUuKdiigExSGlJpjNQCM1R5Gp7muRFAcGWubJUkrTCtARHSo8kdT2WuTpQFTPFUCaCr2SOoU8NAeW/wASfDTzKLmHUXjXDJ3TmSo/EO3UfLfzqO0tv5VpWnPnasLEEO4yNy3Llk59q+jHtc1Q2n8MrN7prpkJDHPlHHlBuracb/I7bnbsBjPB/Bp7qKPy4vKXq5Hpx3iXmxPPJwAercj6x4b8JRW67DLHdmO7Me7Hr8uQ6AVoLLhyoAAKsEjqFFIHKGADlUhUp6rTgKkCAU4CjFLQBS0UUAUtFFAFFFFAFFFLQBRRRQBRRRQBRRRQHGkJoNNNANY1zanGm0A3FJinmmmgGEU0rXSkNAcStc2Su5pKAitFXJoM1ONOQb0BEt+H9TVlFABT0rqKAaqV0AoFOFAJilopaAMUuKBRQBRRRQBRRRQBRRS0AUUUUAUUUUAUUUUAUUUUB//Z" className="card-img-top" alt="RAM" height="250px" />
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
