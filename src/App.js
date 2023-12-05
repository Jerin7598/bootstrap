import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Form, Button, Row, Col } from 'react-bootstrap';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import { useParallax } from 'react-scroll-parallax';

  

  

function NavScrollExample() {

  

    const [menuActive, setMenuActive] = useState(false);
    const handleToggleClick = () => {
      setMenuActive((prevMenuActive) => !prevMenuActive);
    };

    useEffect(() => {
      const handleToggleClick = () => {
        setMenuActive((prevMenuActive) => !prevMenuActive);
      };
  
      const toggle = document.querySelector('.toggle');
  
      if (toggle) {
        toggle.addEventListener('click', handleToggleClick);
      }
  
      return () => {
        if (toggle) {
          toggle.removeEventListener('click', handleToggleClick);
        }
      };
    }, []);

  

  const desktopImages = [
    'b1.webp',
    'b3.webp',
    'b5.webp',
  ];
  const parallax = useParallax<HTMLDivElement>({
    rotate: [0, 360],
  });
  const mobileImages = ['a1.jpeg', 'a3.jpeg', 'a5.jpeg'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === desktopImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentImageIndex, desktopImages.length]);
////



  

  return (
    <div>
     <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="y.png" width="150px" alt="Your Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="">
                <button>PRODUCTS</button>
              <Container>
              <div class="dropdown-content">
      <div class="header">
        <h2>Mega Menu</h2>
      </div>
      <div class="row">
        <div class="column">
          <h3>Bikes</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class="column">
          <h3>Music</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class="column">
          <h3>Electric Bikes</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div></div>

              </Container>
              </Nav.Link>
              <Nav.Link href="">
                <button>DEALERS</button>
              </Nav.Link>
              <Nav.Link href="">
                <button>BUYER'S GUIDE</button>
              </Nav.Link>
              <Nav.Link href="">
                <button>SERVICE</button>
              </Nav.Link>
              <Nav.Link href="">
                <button>PARTS</button>
              </Nav.Link>
              <Nav.Link href="">
                <button>MOTOGP</button>
              </Nav.Link>
              <Nav.Link href="">
                <button>EVENTS</button>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className="b">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Row className="horizontal-scroll-row">
          {isMobileView
            ? mobileImages.map((imageUrl, index) => (
                <Col
                  key={index}
                  className="scrolling-image"
                  style={{
                    display: index === currentImageIndex ? 'block' : 'none',
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Col>
              ))
            : desktopImages.map((imageUrl, index) => (
                <Col
                  key={index}
                  className="scrolling-image"
                  style={{
                    display: index === currentImageIndex ? 'block' : 'none',
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Col>
              ))}
        </Row>
      </Container>

      
<div className='back'>
      <h2 className='head'>MotorCycles</h2>
<Container className='bike'>
  <Row>
    <Col>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
         <img className='bike' src="r15m.webp"></img>
         
        <Carousel.Caption>

          
         <h3 className='hea'>R15 M</h3>
        </Carousel.Caption>
        
      </Carousel.Item>


      <Carousel.Item>
         <img src="motogp-edition.webp"></img>
        <Carousel.Caption>
         <h3 className='hea'>R15 M</h3>
        </Carousel.Caption>
        
      </Carousel.Item>

      
      <Carousel.Item>
         <img src="R15-V4.webp"></img>
        <Carousel.Caption>
         <h3></h3>
        </Carousel.Caption>
        
      </Carousel.Item>

      
      <Carousel.Item>
         <img src="r15s.webp"></img>
        <Carousel.Caption>
         <h3></h3>
        </Carousel.Caption>
        
      </Carousel.Item>

      
      <Carousel.Item>
         <img src="fzs-fi-new.webp"></img>
        <Carousel.Caption>
         
        </Carousel.Caption>
        <h3></h3>
      </Carousel.Item>

      <Carousel.Item>
         <img src="fz-x.webp"></img>
        <Carousel.Caption>
         <h3 ></h3>
        </Carousel.Caption>
        
      </Carousel.Item>

      <Carousel.Item>
         <img src="mt15-v2.webp"></img>
        <Carousel.Caption>
         <h3 className='hea'>MT-15</h3>
        </Carousel.Caption>
        
      </Carousel.Item>


      </Carousel>
   </Col>   
</Row>

      </Container>
</div>

<div className={`Animated-Radial-Menu ${menuActive ? 'active' : ''}`}>
      <ul className="menu">
        <div className="toggle" onClick={handleToggleClick}>
          <ion-icon name="add-outline"></ion-icon>
        </div>
        <li style={{ '--i': 0, '--clr': '#ff2972' }}>
          <a href="#">
            <ion-icon name="beer-outline"></ion-icon>
          </a>
        </li>
        <li style={{ '--i': 1, '--clr': '#fee800' }}>
          <a href="#">
            <ion-icon name="home-outline"></ion-icon>
          </a>
        </li>
        <li style={{ '--i': 2, '--clr': '#04fc43' }}>
          <a href="#">
            <ion-icon name="person-outline"></ion-icon>
          </a>
        </li>
        <li style={{ '--i': 3, '--clr': '#fe00f1' }}>
          <a href="#">
            <ion-icon name="settings-outline"></ion-icon>
          </a>
        </li>
        <li style={{ '--i': 4, '--clr': '#00b0fe' }}>
          <a href="#">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </li>
        <li style={{ '--i': 5, '--clr': '#fea600' }}>
          <a href="#">
            <ion-icon name="key-outline"></ion-icon>
          </a>
        </li>
        <li style={{ '--i': 6, '--clr': '#a529ff' }}>
          <a href="#">
            <ion-icon name="camera-outline"></ion-icon>
          </a>
        </li>
        <li style={{ '--i': 7, '--clr': '#01bdab' }}>
          <a href="#">
            <ion-icon name="image-outline"></ion-icon>
          </a>
        </li>
      </ul>
    </div>   
</div>
  );
}

export default NavScrollExample;


