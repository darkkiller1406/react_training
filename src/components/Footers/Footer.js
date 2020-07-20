/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Footer() {
    return (
        <>
            <div className="section section-dark section-nucleo-icons">
                <Container>
                    <Row>
                        <Col lg="5" md="12">
                            <p className="footer-description">
                                <i className="fa fa-phone"></i>
                                <span> Phone: +1 (0) 000 0000 001</span>
                            </p>
                            <p className="footer-description">
                                <i className="fa fa-envelope"></i>
                                <span> Email: yourmail@example.com</span>
                            </p>
                            <p className="footer-description">
                                <i className="fa fa-home"></i>
                                <span> Address:1234 Street Name City, AA 99999</span>
                            </p>

                        </Col>
                        <Col lg="4" md="12">
                            <p className="footer-description">
                                <i className="fa fa-twitter"></i>
                                <a href='https://twitter.com/lightz' > twitter.com/lightz</a>
                            </p>
                            <p className="footer-description">
                                <i className="fa fa-facebook"></i>
                                <a href='https://facebook.com/lightz' > facebook.com/lightz</a>
                            </p>
                            <p className="footer-description">
                                <i className="fa fa-instagram"></i>
                                <a href='https://instagram.com/lightz' > instagram.com/lightz</a>
                            </p>
                        </Col>
                        <Col lg="3" md="12">
                            <br/>
                            <p className="footer-description">
                                <span className="copyright">
                                © {new Date().getFullYear()}, made with{" "}
                                <i className="fa fa-heart heart" /> by LightZ</span>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>{" "}
        </>
    );
}

export default Footer;
